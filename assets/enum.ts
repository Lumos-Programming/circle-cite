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
  'image',
  'type',
  'siteName',
  'url'
] as const
