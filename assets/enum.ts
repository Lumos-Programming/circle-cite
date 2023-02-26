import { validation } from './validation'
import { InputType, InputComponentsType, SnackbarType, SnackbarTypeList } from '~/assets/type'
export const Regexp = {
  normalize: /\/$/,
  public: /(^\/(login)?$|^(\/(event|project|skill|article|member))?(\/\d+)?$)/,
  whiteList: /(^\/(login)?$|^(\/admin)?(\/(event|project|skill|article|member))?(\/.+)?$)/
}
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
        inset: true,
        class: v ? 'text-main-color' : 'text-grey-darken-4',
        label: v ? 'している' : 'していない'
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
    select: {
      comp: 'atom-input-select',
      props: {}
    }
  }
}
export const articleInputs: InputType[] = [
  {
    key: 'id',
    title: 'id',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID]
  },
  {
    key: 'title',
    title: 'タイトル',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(40)]
  },
  {
    key: 'body',
    title: '本文',
    type: 'richtext',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(1000)]
  },
  {
    key: 'published',
    title: '公開中かどうか',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false,
    default: false,
    rules: [validation.required]
  },
  {
    key: 'userArticleId',
    title: '著者',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.required, validation.checkUUID],
    props: { queryName: 'listUsers', itemTitle: 'name' }
  },
  {
    key: 'projectArticleId',
    title: '関連するプロジェクト（任意）',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID],
    props: { queryName: 'listProjects', itemTitle: 'title' }
  },
  {
    key: 'eventArticleId',
    title: '関連するイベント（任意）',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID],
    props: { queryName: 'listEvents', itemTitle: 'title' }
  },
  {
    key: 'file',
    title: 'サムネイル画像',
    type: 'fileinput',
    schemaType: 'S3Object',
    isArray: false,
    default: null,
    rules: [validation.maxFileSize(5)]
  }
]
export const eventInputs: InputType[] = [
  {
    key: 'id',
    title: 'id',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID]
  },
  {
    key: 'title',
    title: 'タイトル',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(40)]
  },
  {
    key: 'date',
    title: '日付',
    type: 'textfield',
    schemaType: 'AWSDate',
    isArray: true,
    default: ['2000-01-01'],
    rules: [validation.required, validation.checkAWSDate]
  },
  {
    key: 'description',
    title: '概要',
    type: 'textarea',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(300)]
  },
  {
    key: 'wanted',
    title: '募集中かどうか',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false,
    default: false,
    rules: [validation.required]
  },
  {
    key: 'published',
    title: '公開中かどうか',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false,
    default: false,
    rules: [validation.required]
  },
  {
    key: 'file',
    title: 'サムネイル画像',
    type: 'fileinput',
    schemaType: 'S3Object',
    isArray: false,
    default: null,
    rules: [validation.maxFileSize(5)]
  }
]
export const memberInputs: InputType[] = [
  {
    key: 'id',
    title: 'id',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID]
  },
  {
    key: 'name',
    title: 'お名前',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(20)]
  },
  {
    key: 'email',
    title: 'メールアドレス',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required]
  },
  {
    key: 'description',
    title: '簡単な自己紹介',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(300)]
  },
  // NOTE: ↓ここtextareaにするか、richtextにするかmarkdownにするか検討
  {
    key: 'forRecruitment',
    title: '就活用長めの自己紹介',
    type: 'textarea',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.maxString(1000)]
  },
  {
    key: 'history',
    title: 'これまでの経歴',
    type: 'textarea',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.maxString(1000)]
  },
  {
    key: 'university',
    title: '大学名',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(40)]
  },
  {
    key: 'faculty',
    title: '学部・学科・プログラム名',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(40)]
  },
  {
    key: 'grade',
    title: '学年(1~6(院2年)で)',
    type: 'textfield',
    schemaType: 'Int',
    isArray: false,
    default: 0,
    rules: [validation.required]
  },
  {
    key: 'jobHunting',
    title: '就活中かどうか',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false,
    default: false,
    rules: [validation.required]
  },
  {
    key: 'join',
    title: '開始日',
    type: 'textfield',
    schemaType: 'AWSDate',
    isArray: false,
    default: '',
    rules: [validation.checkAWSDate]
  },
  {
    key: 'leave',
    title: '終了日',
    type: 'textfield',
    schemaType: 'AWSDate',
    isArray: false,
    default: '',
    rules: [validation.checkAWSDate]
  },
  {
    key: 'discordId',
    title: 'discord',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.maxString(10)]
  },
  {
    key: 'github',
    title: 'githubのURL（任意）',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.checkURL, validation.maxString(40)]
  },
  {
    key: 'zenn',
    title: 'zennのURL（任意）',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.checkURL, validation.maxString(40)]
  },
  {
    key: 'qiita',
    title: 'qiitaのURL（任意）',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.checkURL, validation.maxString(40)]
  },
  {
    key: 'twitter',
    title: 'twitterのURL（任意）',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.checkURL, validation.maxString(40)]
  },
  {
    key: 'slide',
    title: 'slideのURL（任意）',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.checkURL, validation.maxString(40)]
  },
  {
    key: 'file',
    title: 'アイコン画像',
    type: 'fileinput',
    schemaType: 'S3Object',
    isArray: false,
    default: null,
    rules: [validation.maxFileSize(5)]
  }
]
export const portfolioInputs: InputType[] = [
  {
    key: 'id',
    title: 'id',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID]
  },
  {
    key: 'title',
    title: 'タイトル',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(40)]
  },
  {
    key: 'url',
    title: 'URL',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.checkURL, validation.maxString(40)]
  },
  {
    key: 'description',
    title: '概要',
    type: 'textarea',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(300)]
  },
  {
    key: 'published',
    title: '公開中かどうか',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false,
    default: false,
    rules: [validation.required]
  },
  {
    key: 'file',
    title: 'サムネイル画像',
    type: 'fileinput',
    schemaType: 'S3Object',
    isArray: false,
    default: null,
    rules: [validation.maxFileSize(5)]
  },
  {
    key: 'userPortfolioId',
    title: '作者',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.required, validation.checkUUID],
    props: { queryName: 'listUsers', itemTitle: 'name' }
  }
]
export const projectInputs: InputType[] = [
  {
    key: 'id',
    title: 'id',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID]
  },
  {
    key: 'title',
    title: 'タイトル',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(40)]
  },
  {
    key: 'start',
    title: '開始日',
    type: 'textfield',
    schemaType: 'AWSDate',
    isArray: false,
    default: '',
    rules: [validation.checkAWSDate]
  },
  {
    key: 'end',
    title: '終了日',
    type: 'textfield',
    schemaType: 'AWSDate',
    isArray: false,
    default: '',
    rules: [validation.checkAWSDate]
  },
  {
    key: 'description',
    title: '概要',
    type: 'textarea',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(300)]
  },
  {
    key: 'wanted',
    title: '募集中かどうか',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false,
    default: false,
    rules: [validation.required]
  },
  {
    key: 'published',
    title: '公開中かどうか',
    type: 'switch',
    schemaType: 'Boolean',
    isArray: false,
    default: false,
    rules: [validation.required]
  },
  {
    key: 'file',
    title: 'サムネイル画像',
    type: 'fileinput',
    schemaType: 'S3Object',
    isArray: false,
    default: null,
    rules: [validation.maxFileSize(5)]
  }
]
export const skillInputs: InputType[] = [
  {
    key: 'id',
    title: 'id',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID]
  },
  {
    key: 'title',
    title: 'スキルタグ名',
    type: 'textfield',
    schemaType: 'String',
    isArray: false,
    default: '',
    rules: [validation.required, validation.maxString(40)]
  }
]
export const articleSkillInputs: InputType[] = [
  {
    key: 'id',
    title: 'id',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID]
  },
  {
    key: 'articleID',
    title: '紐づける記事',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.required],
    props: { queryName: 'listArticles', itemTitle: 'title' }
  },
  {
    key: 'skillID',
    title: '紐づけるスキルタグ',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.required],
    props: { queryName: 'listSkills', itemTitle: 'title' }
  }
]
export const eventUserInputs: InputType[] = [
  {
    key: 'id',
    title: 'id',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID]
  },
  {
    key: 'eventID',
    title: '紐づけるイベント',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.required],
    props: { queryName: 'listEvents', itemTitle: 'title' }
  },
  {
    key: 'userID',
    title: '紐づけるユーザー',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.required],
    props: { queryName: 'listUsers', itemTitle: 'name' }
  }
]
export const projectUserInputs: InputType[] = [
  {
    key: 'id',
    title: 'id',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID]
  },
  {
    key: 'projectID',
    title: '紐づけるプロジェクト',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.required],
    props: { queryName: 'listProjects', itemTitle: 'title' }
  },
  {
    key: 'userID',
    title: '紐づけるユーザー',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.required],
    props: { queryName: 'listUsers', itemTitle: 'name' }
  }
]
export const userSkillInputs: InputType[] = [
  {
    key: 'id',
    title: 'id',
    type: 'textfield',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.checkUUID]
  },
  {
    key: 'skillID',
    title: '紐づけるスキルタグ',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.required],
    props: { queryName: 'listSkills', itemTitle: 'title' }
  },
  {
    key: 'userID',
    title: '紐づけるユーザー',
    type: 'select',
    schemaType: 'ID',
    isArray: false,
    default: '',
    rules: [validation.required],
    props: { queryName: 'listUsers', itemTitle: 'name' }
  }
]
