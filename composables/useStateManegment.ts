import type { Ref } from 'vue'
import { User } from '~/assets/API'

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
