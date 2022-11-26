export const Regexp = {
  normalize: /\/$/,
  public: /(^\/(login)?$|^(\/(event|project|skill|article|member))?(\/\d+)?$)/,
  whiteList:
    /(^\/(login)?$|^(\/admin)?(\/(event|project|skill|article|member))?(\/.+)?$)/
}
