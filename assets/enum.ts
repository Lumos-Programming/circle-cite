import { InputType, InputComponentsType, SnackbarType, SnackbarTypeList } from '~/assets/type'
export const Regexp = {
  normalize: /\/$/,
  public: /(^\/(login)?$|^(\/(event|project|skill|article|member))?(\/\d+)?$)/,
  whiteList: /(^\/(login)?$|^(\/admin)?(\/(event|project|skill|article|member))?(\/.+)?$)/
}
export const InputComponents = (key?: string, v?: any): InputComponentsType => {
  return {
    textfield: {
      comp: 'v-text-field',
      props: {
        density: 'compact',
        clearable: true,
        class: 'text-main-color',
        disabled: key === 'id' || key === 'email'
      }
    },
    textarea: {
      comp: 'v-textarea',
      props: { density: 'compact', clearable: true, class: 'text-main-color' }
    },
    richtext: { comp: 'module-tiptap' },
    switch: {
      comp: 'v-switch',
      props: {
        density: 'compact',
        'hide-details': true,
        class: v ? 'text-main-color' : 'text-grey-darken-4'
      }
    },
    fileinput: {
      comp: 'v-file-input',
      props: {
        density: 'compact',
        clearable: true,
        class: 'text-main-color',
        variant: 'underlined',
        accept: 'image/*'
      }
    },
    select: { comp: 'v-select' }
  }
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
  'おっとぉ？！新進気鋭の' + name + 'が登場だー！',
  'おっとぉ？！先進気鋭の...え？新進気鋭？。。。あ。',
  name + 'は最近どう？',
  name + '、疲れてない？  少し離れてみるのも大事でっせ',
  name.includes('スーパーエンジニア') || name.includes('ゲスト')
    ? 'ガハハハ  早く名前を変えないとスーパーエンジニアになる呪いをかけたぞ'
    : 'スーパーエンジニアの...って分かってますよ、' + name + 'さん'
]
export const articleInputs: InputType[] = [
  { key: 'id', title: 'id', type: 'textfield', schemaType: 'ID', isArray: false },
  { key: 'title', title: 'タイトル', type: 'textfield', schemaType: 'String', isArray: false },
  { key: 'body', title: '本文', type: 'richtext', schemaType: 'String', isArray: false },
  {
    key: 'published',
    title: '下書きor公開',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false
  },
  { key: 'userArticleId', title: '著者のID', type: 'textfield', schemaType: 'ID', isArray: false },
  {
    key: 'projectArticleId',
    title: '関連するプロジェクトのID（任意）',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false
  },
  {
    key: 'eventArticleId',
    title: '関連するイベントのID（任意）',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false
  },
  {
    key: 'file',
    title: 'サムネイル画像',
    type: 'fileinput',
    schemaType: 'S3Object',
    isArray: false
  }
]
export const eventInputs: InputType[] = [
  { key: 'id', title: 'id', type: 'textfield', schemaType: 'ID', isArray: false },
  { key: 'title', title: 'タイトル', type: 'textfield', schemaType: 'String', isArray: false },
  { key: 'date', title: '日付', type: 'textfield', schemaType: 'AWSDate', isArray: true },
  { key: 'description', title: '概要', type: 'textfield', schemaType: 'String', isArray: false },
  {
    key: 'wanted',
    title: '募集終了or募集中',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false
  },
  {
    key: 'published',
    title: '下書きor公開',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false
  },
  {
    key: 'file',
    title: 'サムネイル画像',
    type: 'fileinput',
    schemaType: 'S3Object',
    isArray: false
  }
]
export const memberInputs: InputType[] = [
  { key: 'id', title: 'id', type: 'textfield', schemaType: 'ID', isArray: false },
  { key: 'name', title: 'お名前', type: 'textfield', schemaType: 'String', isArray: false },
  {
    key: 'email',
    title: 'メールアドレス',
    type: 'textfield',
    schemaType: 'String',
    isArray: false
  },
  {
    key: 'description',
    title: '簡単な自己紹介',
    type: 'textfield',
    schemaType: 'String',
    isArray: false
  },
  // NOTE: ↓ここtextareaにするか、richtextにするかmarkdownにするか検討
  {
    key: 'forRecruitment',
    title: '就活用長めの自己紹介',
    type: 'textarea',
    schemaType: 'String',
    isArray: false
  },
  {
    key: 'history',
    title: 'これまでの経歴',
    type: 'textarea',
    schemaType: 'String',
    isArray: false
  },
  { key: 'university', title: '大学名', type: 'textfield', schemaType: 'String', isArray: false },
  {
    key: 'faculty',
    title: '学部・学科・プログラム名',
    type: 'textfield',
    schemaType: 'String',
    isArray: false
  },
  {
    key: 'grade',
    title: '学年(1~6(院2年)で)',
    type: 'textfield',
    schemaType: 'Int',
    isArray: false
  },
  {
    key: 'jobHunting',
    title: '就活中かどうか',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false
  },
  { key: 'join', title: '開始日', type: 'textfield', schemaType: 'AWSDate', isArray: false },
  { key: 'leave', title: '終了日', type: 'textfield', schemaType: 'AWSDate', isArray: false },
  {
    key: 'discordId',
    title: 'discordのID',
    type: 'textfield',
    schemaType: 'String',
    isArray: false
  },
  {
    key: 'github',
    title: 'githubのURL（任意）',
    type: 'textfield',
    schemaType: 'String',
    isArray: false
  },
  {
    key: 'zenn',
    title: 'zennのURL（任意）',
    type: 'textfield',
    schemaType: 'String',
    isArray: false
  },
  {
    key: 'qiita',
    title: 'qiitaのURL（任意）',
    type: 'textfield',
    schemaType: 'String',
    isArray: false
  },
  {
    key: 'twitter',
    title: 'twitterのURL（任意）',
    type: 'textfield',
    schemaType: 'String',
    isArray: false
  },
  {
    key: 'slide',
    title: 'slideのURL（任意）',
    type: 'textfield',
    schemaType: 'String',
    isArray: false
  },
  { key: 'file', title: 'アイコン画像', type: 'fileinput', schemaType: 'S3Object', isArray: false }
]
export const portfolioInputs: InputType[] = [
  { key: 'id', title: 'id', type: 'textfield', schemaType: 'ID', isArray: false },
  { key: 'title', title: 'タイトル', type: 'textfield', schemaType: 'String', isArray: false },
  { key: 'url', title: 'URL', type: 'textfield', schemaType: 'String', isArray: false },
  { key: 'description', title: '概要', type: 'textfield', schemaType: 'String', isArray: false },
  {
    key: 'published',
    title: '下書きor公開',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false
  },
  {
    key: 'file',
    title: 'サムネイル画像',
    type: 'fileinput',
    schemaType: 'S3Object',
    isArray: false
  },
  { key: 'userPortfolioId', title: '作者のID', type: 'textfield', schemaType: 'ID', isArray: false }
]
export const projectInputs: InputType[] = [
  { key: 'id', title: 'id', type: 'textfield', schemaType: 'ID', isArray: false },
  { key: 'title', title: 'タイトル', type: 'textfield', schemaType: 'String', isArray: false },
  { key: 'start', title: '開始日', type: 'textfield', schemaType: 'AWSDate', isArray: false },
  { key: 'end', title: '終了日', type: 'textfield', schemaType: 'AWSDate', isArray: false },
  { key: 'description', title: '概要', type: 'textfield', schemaType: 'String', isArray: false },
  {
    key: 'wanted',
    title: '募集終了or募集中',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false
  },
  {
    key: 'published',
    title: '下書きor公開',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false
  },
  {
    key: 'file',
    title: 'サムネイル画像',
    type: 'fileinput',
    schemaType: 'S3Object',
    isArray: false
  }
]
export const skillInputs: InputType[] = [
  { key: 'id', title: 'id', type: 'textfield', schemaType: 'ID', isArray: false },
  { key: 'title', title: 'スキルタグ名', type: 'textfield', schemaType: 'String', isArray: false }
]
