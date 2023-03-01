export const validation = {
  required: (v: any) => !!v || '必須項目です',
  maxString: (length: number) => (v: string) =>
    !v ? true : (v && v.length <= length) || length + '文字までです',
  equalString: (length: number) => (v: string) =>
    !v ? true : (v && v.length === length) || `想定している文字数は丁度${length}文字です`,
  rangeInt: (range: number[]) => (v: string) =>
    !v || range.length < 2
      ? true
      : (Number(v) && Number(v) >= range[0] && Number(v) <= range[1]) ||
        `${range[0]}から${range[1]}までの数字を入力してください。`,
  maxFileSize: (size: number) => (v: File[]) =>
    !v || !v[0]
      ? true
      : v[0].size <= size * 1000 * 1000 || `アップロード可能なファイルサイズは${size}MBまでです`,
  checkAWSDate: (v: string) =>
    !v
      ? true
      : /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/g.test(v) ||
        '日付は YYYY-MM-DD の形式で入力してください',
  checkUUID: (v: string) =>
    !v
      ? true
      : /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/g.test(v) ||
        '有効なIDを入力してください',
  checkURL: (v: string) =>
    !v
      ? true
      : /^(https?)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:`&=+$,%#]+)$/g.test(v) ||
        '有効なURLを入力してください',
  alreadyExistTag: (v: string, list: (string | null)[]) =>
    !v ? true : !list.includes(v) || `「${v}」は既に存在します。`
}
