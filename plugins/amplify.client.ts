import { GraphQLResult } from '@aws-amplify/api'
import { API, Auth } from 'aws-amplify'
// TODO: 開発速度優先で開発したため、後に適切な型付けを行う
export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$config
  const isProd = config.public.isProd
  const { isSignedIn } = useLoginState()
  return {
    provide: {
      unAuthListQuery: async <T, S>({
        name,
        query,
        filter = {},
        multiple = 1
      }): Promise<S[]> => {
        const items = []
        const variables = Object.assign(
          { limit: config.public.limit * multiple, nextToken: null },
          filter
        )
        const callbackQuery = async () => {
          try {
            // NOTE: DynamoDBのscanの1MB制限に達するとnextTokenが返される
            const result = (await API.graphql({
              query,
              variables,
              authMode: 'AWS_IAM'
            })) as GraphQLResult<T>
            items.push(...(result.data[name]?.items || []))
            if (result.data[name]?.nextToken) {
              variables.nextToken = result.data[name].nextToken
              await callbackQuery()
            }
          } catch (e) {
            if (!isProd) console.log(name + ':', e)
            clearError()
          }
        }

        await callbackQuery()
        if (!isProd) console.log(items)
        return items
      },
      listQuery: async <T, S>({
        name,
        query,
        filter = {},
        multiple = 1
      }): Promise<S[]> => {
        const items = []
        const variables = Object.assign(
          { limit: config.public.limit * multiple, nextToken: null },
          filter
        )
        const callbackQuery = async () => {
          try {
            // NOTE: DynamoDBのscanの1MB制限に達するとnextTokenが返される
            const result = (await API.graphql({
              query,
              variables
            })) as GraphQLResult<T>
            items.push(...(result.data[name]?.items || []))
            if (result.data[name]?.nextToken) {
              variables.nextToken = result.data[name].nextToken
              await callbackQuery()
            }
          } catch (e) {
            if (!isProd) console.log(name + ':', e)
            clearError()
          }
        }

        await callbackQuery()
        if (!isProd) console.log(items)
        return items
      },
      baseMutation: async <T>({ name, query, input }): Promise<T> => {
        try {
          const res = (await API.graphql({
            query,
            variables: { input }
          })) as GraphQLResult<T>
          console.log(name)
          console.log(res)
          console.log(res.data[name])
          return res.data[name]
        } catch (e) {
          if (!isProd) console.log(name + ':', e)
          clearError()
        }
      },
      // createStorage: async (path, image) => {
      //   await Storage.put(path + image.name, image, {
      //     level: 'protected',
      //     contentType: image.type
      //   }).catch((e) => {
      //     if (!isProd) console.log('createStorage', e)
      //   })
      // },
      // updateStorage: async (item, image, path) => {
      //   if (image) {
      //     const s3Path = path || item.url || ''
      //     await Storage.remove(s3Path + item.fullName, {
      //       level: 'protected',
      //       contentType: image.type || item.type || ''
      //     }).catch((e) => {
      //       console.log('updateStorage', e)
      //     })
      //     await Storage.put(s3Path + image.name, image, {
      //       level: 'protected',
      //       contentType: image.type || item.type || ''
      //     }).catch((e) => {
      //       console.log('updateStorage', e)
      //     })
      //   }
      // },
      // deleteStorage: async (item) => {
      //   await Storage.remove(item.url + item.fullName, {
      //     level: 'protected'
      //   }).catch((e) => {
      //     console.log('deleteStorage', e)
      //   })
      // },
      // getImage: async (item) => {
      //   item.uploadImageUrl = await nuxtApp.$getStorage(
      //     item.url + item.fullName,
      //     item.identityId
      //   )
      //   item.inputImage = null
      //   item.isNew = false
      //   item.isUpdated = false
      //   return item
      // },
      // getImages: async (res) => {
      //   for (let i = 0, len = res.length; i < len; i++) {
      //     let item = res[i]
      //     item = await nuxtApp.$getImage(item)
      //   }
      //   return res
      // },
      // createImage: async ({
      //   item = {},
      //   path = '',
      //   query = {},
      //   assign = {}
      // }) => {
      //   if (item.isNew) {
      //     const image = item.inputImage // ファイルオブジェクト
      //     const createitem = {
      //       fullName: image.name || '',
      //       name: image.name.substring(0, image.name.indexOf('.')) || '', // 拡張子無い名前
      //       type: image.type || '',
      //       size: image.size || 0,
      //       alt: item.alt || '',
      //       url: path || '',
      //       identityId: nuxtApp.$$store.state.identityId,
      //       owner: nuxtApp.$$store.state.owner
      //     }
      //     if (Object.keys(assign)) {
      //       Object.assign(createitem, assign)
      //     }
      //     await nuxtApp.$createStorage(path, image).then(async () => {
      //       await API.graphql({
      //         query,
      //         variables: {
      //           input: createitem
      //         }
      //       }).catch((e) => {
      //         console.log('createImage', e)
      //       })
      //     })
      //   }
      // },
      // updateImage: async ({ item = {}, query = {}, path = null }) => {
      //   if (!item.isNew && item.isUpdated) {
      //     const image = item.inputImage
      //     await nuxtApp.$updateStorage(item, image, path).then(async () => {
      //       await API.graphql({
      //         query,
      //         variables: {
      //           input: {
      //             id: item.id || '',
      //             fullName: image ? image.name : item.fullName || '',
      //             name: image
      //               ? image.name.substring(0, image.name.indexOf('.'))
      //               : item.name || '',
      //             type: image ? image.type : item.type || '',
      //             size: image ? image.size : item.size || 0,
      //             alt: item.alt || '',
      //             url: path || item.url || ''
      //           }
      //         }
      //       }).catch((e) => {
      //         console.log('updateImage', e)
      //       })
      //     })
      //   }
      // },
      // deleteImage: async ({ item = {}, query = {} }) => {
      //   await nuxtApp.$deleteStorage(item).then(async () => {
      //     await API.graphql({
      //       query,
      //       variables: { input: { id: item.id } }
      //     }).catch((e) => {
      //       console.log('deleteImage', e)
      //     })
      //   })
      // },
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
