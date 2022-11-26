import { GraphQLQuery } from '@aws-amplify/api'
import { StorageAccessLevel } from '@aws-amplify/storage'
import { API, Auth, Storage } from 'aws-amplify'
import { v4 as uuidv4 } from 'uuid'
export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$config
  const isProd = config.public.isProd
  const { isSignedIn } = useLoginState()
  return {
    provide: {
      getQuery: async <T, S>({
        query,
        variables = {}
      }: {
        query: string
        variables?: object
      }): Promise<S> => {
        return await API.graphql<GraphQLQuery<T>>({
          query,
          variables,
          authMode: isSignedIn.value ? 'AMAZON_COGNITO_USER_POOLS' : 'AWS_IAM'
        })
          .then((res: any) => {
            const name =
              Object.keys(res.data).length && Object.keys(res.data)[0]
            if (!name) return
            if (!isProd) console.log(res.data[name])
            return res.data[name]
          })
          .catch((e) => {
            if (!isProd) console.log(e)
            clearError()
          })
      },
      listQuery: async <T, R>({
        query,
        filter = {},
        multiple = 1
      }: {
        query: string
        filter?: object
        multiple?: number
      }): Promise<R[]> => {
        const items: R[] = []
        const variables = {
          limit: config.public.limit * multiple,
          nextToken: null,
          filter
        }
        const callbackQuery = async () => {
          try {
            // NOTE: DynamoDBのscanの1MB制限に達するとnextTokenが返される
            const res: any = await API.graphql<GraphQLQuery<T>>({
              query,
              variables,
              authMode: isSignedIn.value
                ? 'AMAZON_COGNITO_USER_POOLS'
                : 'AWS_IAM'
            })
            const name =
              Object.keys(res.data).length && Object.keys(res.data)[0]
            if (!name) return
            items.push(...(res.data[name]?.items || []))
            if (res.data[name]?.nextToken) {
              variables.nextToken = res.data[name].nextToken
              await callbackQuery()
            }
          } catch (e) {
            if (!isProd) console.log(e)
            clearError()
          }
        }
        await callbackQuery()
        if (!isProd) console.log(items)
        return items
      },
      baseMutation: async <T, S>({
        query,
        input = {}
      }: {
        query: string
        input?: object
      }): Promise<S> => {
        return await API.graphql<GraphQLQuery<T>>({
          query,
          variables: { input }
        })
          .then((res: any) => {
            const name =
              Object.keys(res.data).length && Object.keys(res.data)[0]
            if (!name) return
            if (!isProd) console.log(res.data[name])
            return res.data[name]
          })
          .catch((e) => {
            if (!isProd) console.log(name + ':', e)
            clearError()
          })
      },
      getImage: async (key = ''): Promise<string> => {
        // NOTE: keyは{prptected or public or private}/{identityId}/{random uuid}/{file name}.{extension}の形式
        // NOTE: 返り値はデフォルト15分の有効期限付き署名付きURL(String)
        if (!key) return '/no_image.png'
        const item = key.split('/')
        if (item.length !== 4) return '/no_image.png'
        if (
          item[0] !== 'protected' &&
          item[0] !== 'public' &&
          item[0] !== 'private'
        )
          return '/no_image.png'
        return await Storage.get(key, {
          level: item[0] as StorageAccessLevel,
          identityId: item[1]
        })
      },
      makeS3Object: async (
        level: StorageAccessLevel = 'protected',
        file: File
      ) => {
        if (!file) return
        const { name, type, size } = file
        const extension = type.split('/')[1]
        const { identityId } = await Auth.currentCredentials()
        const key =
          level +
          '/' +
          identityId +
          '/' +
          uuidv4() +
          (extension && '.') +
          extension
        return {
          key,
          name,
          size,
          type,
          identityId
        }
      },
      putImage: async (
        key: string,
        level: StorageAccessLevel = 'protected',
        file: File
      ) => {
        if (!file) return
        return await Storage.put(key, file, {
          level,
          contentType: file.type
        }).catch((e) => {
          if (!isProd) console.log('createImage', e)
        })
      },
      removeImage: async (
        key: string,
        level: StorageAccessLevel = 'protected'
      ) => {
        if (!key || !level) return
        return await Storage.remove(key, {
          level
        }).catch((e) => {
          console.log('deleteImage', e)
        })
      },
      signUp: async (username: string, password: string) => {
        await Auth.signUp({
          username,
          password
        })
          .then((e) => {
            alert(
              'アカウントを仮作成して、確認コードをメールアドレス宛に送信しました。\nご確認下さい。'
            )
          })
          .catch((e) => {
            switch (e.code) {
              case 'UsernameExistsException':
                // ユーザープール内に既に同じ username が存在する場合に起こる。
                alert('既に同じメールアドレスのアカウントが存在します')
                return
              case 'InvalidPasswordException':
                // ユーザープールのポリシーで設定したパスワードの強度を満たさない場合に起こる。
                alert('設定したパスワードが必要な条件を満たしていません')
                return
              case 'InvalidParameterException':
                // 必要な属性が足りない場合や、入力された各項目が Cognito 側で正しくパースできない場合（バリデーションエラー）に起こる。
                // password が6文字未満の場合はバリデーションエラーでこちらのエラーコードが返ってくる。
                alert(
                  '必要な項目が足りないか、正しく認識することができませんでした'
                )
                return
              default:
                // その他のエラー
                alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
            }
          })
      },
      confirmSignUp: async (username: string, passcode: string) => {
        await Auth.confirmSignUp(username, passcode)
          .then((e) => {
            alert('認証できました。')
          })
          .catch((e) => {
            switch (e.code) {
              case 'CodeMismatchException':
                // 無効なコードが入力された場合に起こる。
                alert('無効なコードが入力されました')
                throw new Error('error')
              case 'LimitExceededException':
                // コードを間違え続けた場合に起こる。
                alert('規定回数以上コードを間違えて入力されました')
                throw new Error('error')
              case 'ExpiredCodeException':
                // コードが期限切れ（24時間をオーバー）した場合に起こる。
                // 注) username が存在しない・無効化されている場合にも起こる。
                alert(
                  'コードの期限が切れているか、登録いただいたメールアドレスが存在しません'
                )
                throw new Error('error')
              case 'NotAuthorizedException':
                // 既にステータスが CONFIRMED になっている場合に起こる。
                alert('既に確認済みです')
                throw new Error('error')
              case 'CodeDeliveryFailureException':
                // 確認コードの送信に失敗した場合に起こる。
                alert('認証コードの送信に失敗しました')
                throw new Error('error')
              default:
                // その他のエラー
                alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
                throw new Error('error') // 必要
            }
          })
      },
      signIn: async (username: string, password: string) => {
        await Auth.signIn(username, password)
          .then((user) => {
            console.log(user)
          })
          .catch((e) => {
            alert('ログインに失敗しました。')
            // alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
          })
      },
      resendSignUp: async (username: string) => {
        await Auth.resendSignUp(username)
          .then(() => {
            alert('確認コードを再送信しました。')
          })
          .catch((e) => {
            switch (e.code) {
              case 'CodeDeliveryFailureException':
                // 確認コードの送信に失敗した場合に起こる。
                alert('確認コードの送信に失敗しました。')
                return
              default:
                // その他のエラー
                alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
            }
          })
      },
      signOut: async () => {
        await Auth.signOut().catch((e) => {
          alert('ステータス：' + e.code + ' \nメッセージ：' + e.message)
        })
      },
      updateUserAttributes: async (email: string) => {
        const user = await Auth.currentAuthenticatedUser()
        await Auth.updateUserAttributes(user, {
          email
        })
          .then(() => {
            alert(
              'メールアドレスを変更しました。\n再度。確認コードをメールアドレス宛に送信しました。\nご確認下さい。'
            )
          })
          .catch((e) => {
            alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
          })
      },
      verifyUserAttributes: async (code: string) => {
        await Auth.verifyCurrentUserAttributeSubmit('email', code)
          .then(() => {
            alert('再認証できました。')
          })
          .catch((e) => {
            alert('ステータス：' + e.code + '\nメッセージ：' + e.message)
          })
      },
      changePassword: async (oldPassword: string, newPassword: string) => {
        await Auth.currentAuthenticatedUser()
          .then((user) => {
            return Auth.changePassword(user, oldPassword, newPassword)
          })
          .then(() => {
            alert('パスワードを変更しました。')
          })
          .catch((e) => {
            alert('ステータス：' + e.code + ' \nメッセージ：' + e.message)
          })
      }
    }
  }
})
