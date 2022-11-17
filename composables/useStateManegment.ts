import type { Ref } from 'vue'
import { User } from '~/assets/API'

// ログイン可能状態とログイン状態の状態管理
export const useLoginState = () => {
  const isSignedIn = useState<boolean>('isSignedIn', () => false)
  const setSignedIn = (isSignedIn: Ref<boolean>) => (v: boolean) => {
    isSignedIn.value = v
  }
  return {
    isSignedIn: readonly(isSignedIn),
    setSignedIn: setSignedIn(isSignedIn)
  }
}

// マイプロフィールの管理
export const useMyProfile = () => {
  const myProfile = useState<User>('myProfile')
  const setMyProfile = (myProfile: Ref<User>) => (v: User) => {
    myProfile.value = v
  }
  return {
    myProfile: readonly(myProfile),
    setMyProfile: setMyProfile(myProfile)
  }
}
