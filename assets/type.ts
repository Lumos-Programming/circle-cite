import { S3ObjectInput } from '~/assets/API'
export type IndexSignature<T> = T & { [key: string]: any }
export type FileInput<T> = IndexSignature<{
  [P in keyof T]: T[P] extends S3ObjectInput | null | undefined
    ? (S3ObjectInput & { file?: File }) | null
    : T[P]
}>
export type SnackbarTypeList = 'info' | 'warning' | 'alert' | 'success'
export type SnackbarType = {
  id?: number
  icon?: string
  text?: string
  color?: string
  background?: string
  timeout?: number
}
export type InputTypeList =
  | 'textfield'
  | 'textarea'
  | 'richtext'
  | 'switch'
  | 'fileinput'
  | 'select'
export type SchemaTypeList =
  | 'ID'
  | 'String'
  | 'Int'
  | 'Float'
  | 'Boolean'
  | 'AWSDate'
  | 'AWSTime'
  | 'AWSDateTime'
  | 'AWSTimestamp'
  | 'AWSEmail'
  | 'AWSJSON'
  | 'AWSPhone'
  | 'AWSURL'
  | 'AWSIPAddress'
  | 'S3Object'
export type InputComponentsType = {
  [key in InputTypeList]: { comp: string; props?: object }
}
export type InputType = {
  key: string
  title: string
  type: InputTypeList
  rules?: any[]
  schemaType: SchemaTypeList
  isArray: boolean
  default: any
  props?: any
}
