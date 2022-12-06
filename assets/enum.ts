import { SnackbarType, SnackbarTypeList } from '~/assets/type'
export const Regexp = {
  normalize: /\/$/,
  public: /(^\/(login)?$|^(\/(event|project|skill|article|member))?(\/\d+)?$)/,
  whiteList:
    /(^\/(login)?$|^(\/admin)?(\/(event|project|skill|article|member))?(\/.+)?$)/
}
export const InputAttr = {
  RichText: ['body'],
  TextArea: ['description'],
  File: ['file']
}
export const OgpKey = [
  'title',
  'description',
  'image'
  // 'type',
  // 'siteName',
  // 'url'
] as const
export const iconTypes: { [key in SnackbarTypeList]: SnackbarType } = {
  info: {
    icon: 'mdi-information-outline',
    color: 'text-white',
    background: 'bg-grey-lighten-1'
  },
  warning: {
    icon: 'mdi-alert-outline',
    color: 'text-white',
    background: 'bg-orange-darken-1'
  },
  alert: {
    icon: 'mdi-alert-octagon-outline',
    color: 'text-white',
    background: 'bg-red-darken-3'
  },
  success: {
    icon: 'mdi-check-circle-outline',
    color: 'text-white',
    background: 'bg-light-green'
  }
}
export const Greetings = (name = 'スーパーエンジニア'): string[] => [
  'Hi, ' + name + '!',
  'Welcome back, ' + name + '!',
  'おかえりなさい！' + name + 'さん',
  name + 'は今日何するの？',
  'さーて、' + name + 'といっちょやりますか！',
  'おっとぉ？！先進気鋭の' + name + 'が登場だー！',
  name + 'は最近どう？',
  name + '、疲れてない？　少し離れてみるのも大事でっせ',
  name === 'スーパーエンジニア'
    ? 'ガハハハ　早く名前を変えないとスーパーエンジニアになる呪いをかけたぞ'
    : 'スーパーエンジニアの...って分かってますよ、' + name + 'さん'
]
