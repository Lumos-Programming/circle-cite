import { S3ObjectInput } from '~/assets/API'
import { OgpKey } from '~/assets/enum'
export type IndexSignature<T> = T & { [key: string]: any }
export type FileInput<T> = IndexSignature<{
  [P in keyof T]: T[P] extends S3ObjectInput | null | undefined
    ? (S3ObjectInput & { file?: File }) | null
    : T[P]
}>
// NOTE: & { [key: string]: any }がエラーの元になるかも
type MetaKey<T extends readonly unknown[]> = T[number]
export type Metadata = {
  [k in MetaKey<typeof OgpKey>]?: string
}
