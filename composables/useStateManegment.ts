import type { Ref } from 'vue'
import { User } from '~/assets/API'
import { SnackbarType, SnackbarTypeList } from '~/assets/type'
import { iconTypes } from '~/assets/enum'

// ログイン可能状態とログイン状態の状態管理
export const useLoginState = () => {
  const isSignedIn = useState<boolean>('isSignedIn', () => false)
  const setSignedIn = (isSignedIn: Ref<boolean>) => (v: boolean) => {
    isSignedIn.value = v
  }
  const isAdmin = useState<boolean>('isAdmin', () => false)
  const setAdmin = (isAdmin: Ref<boolean>) => (v: boolean) => {
    isAdmin.value = v
  }
  return {
    isSignedIn: readonly(isSignedIn),
    setSignedIn: setSignedIn(isSignedIn),
    isAdmin: readonly(isAdmin),
    setAdmin: setAdmin(isAdmin)
  }
}

// マイプロフィールの管理
export const useMyUser = () => {
  const cognitoUser = useState<any>('cognitoUser', () => ({}))
  const setCognitoUser = (cognitoUser: Ref<any>) => (v: any) => {
    cognitoUser.value = v
  }
  const myUser = useState<User>('myUser', () => ({} as User))
  const setMyUser = (myUser: Ref<User>) => (v: User) => {
    myUser.value = v
  }
  return {
    cognitoUser: readonly(cognitoUser),
    setCognitoUser: setCognitoUser(cognitoUser),
    myUser: readonly(myUser),
    setMyUser: setMyUser(myUser)
  }
}

// snackbarの管理
export const useSnackbar = () => {
  const snackbars = useState<SnackbarType[]>('snackbar', () => [])
  const setSnackbars =
    (snackbars: Ref<SnackbarType[]>) => (v: SnackbarType[]) => {
      snackbars.value = v
    }
  const addSnackbar =
    (snackbars: Ref<SnackbarType[]>) =>
    (
      {
        type = 'success',
        text = '保存が完了しました',
        timeout = 3000
      }: {
        type?: SnackbarTypeList
        text: string
        timeout?: number
      } = {
        type: 'success',
        text: '保存が完了しました',
        timeout: 3000
      }
    ) => {
      snackbars.value.push({
        id: Number(Math.random().toFixed(2)),
        text,
        timeout,
        ...iconTypes[type]
      })
    }
  const deleteSnackbar = (snackbars: Ref<SnackbarType[]>) => (id: number) => {
    const index = snackbars.value.findIndex((v) => v.id === id)
    if (index !== -1) snackbars.value.splice(index, 1)
  }
  return {
    snackbars: readonly(snackbars),
    addSnackbar: addSnackbar(snackbars),
    deleteSnackbar: deleteSnackbar(snackbars),
    setSnackbars: setSnackbars(snackbars)
  }
}
