import { InputAttr } from '~~/assets/enum'
export default defineNuxtPlugin((nuxtApp) => {
  const { addSnackbar } = useSnackbar()
  const { setBanEdit } = useEditState()
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  // 画面のサイズ変動があった時に高さを再計算する
  window.addEventListener('resize', setFillHeight)

  // 初期化
  setFillHeight()

  const config = nuxtApp.$config
  const isProd = config.public.isProd
  return {
    provide: {
      options: ({
        key,
        method = 'GET',
        headers = {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        },
        body = null,
        lazy = true,
        cache = true
      }: {
        key?: string
        method?: string
        headers?: { [key: string]: string }
        body?: string | null | FormData
        lazy?: boolean
        cache?: boolean
      } = {}) => ({
        key,
        baseURL: config.public.baseUrl || '',
        body,
        method,
        headers: {
          ...headers
        },
        lazy,
        initialCache: cache
      }),
      baseFetch: async <T>(path: string, options = nuxtApp.$options()) => {
        setBanEdit(true)
        if (!isProd) console.log(options)
        const { data, error, refresh } = await useFetch(path, {
          ...options,
          onResponseError({ request, response, options }) {
            if (!isProd) console.log(response)
            if (options.method !== 'GET') {
              addSnackbar({ type: 'alert', text: '送信に失敗しました' })
            }
          }
        })
        if (error.value) clearError()
        else if (options.method !== 'GET') {
          addSnackbar({ type: 'success', text: '送信が完了しました' })
        }
        setBanEdit(false)
        return { data: data.value as T, error: error.value as any }
      },
      itemsSort: (
        items: any[],
        prop: string,
        order: 'asc' | 'desc' = 'asc'
      ): any[] => {
        const extract = items.map((v, i) => {
          return { i, v: v[prop] }
        })
        if (order === 'asc') {
          extract.sort((a, b) => {
            return b.v > a.v ? -1 : b.v < a.v ? 1 : 0
          })
        } else if (order === 'desc') {
          extract.sort((a, b) => {
            return b.v < a.v ? -1 : b.v > a.v ? 1 : 0
          })
        }
        return extract.map((v) => items[v.i])
      },
      copyToClipboard: (text: string) => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text)
        }
      },
      getYMD: (string: string | null = '', separator = '/') => {
        if (!string) return ''
        const date = new Date(string)
        return (
          date.getFullYear() +
          separator +
          ('0' + (date.getMonth() + 1)).slice(-2) +
          separator +
          ('0' + date.getDate()).slice(-2)
        )
      },
      isObject: (v: object) => {
        return v !== null && typeof v === 'object' && !Array.isArray(v)
      },
      findItem: (array: any[], key: string, value: any) => {
        const item = array.find((v) => v[key] === value)
        if (item) return item
        return null
      },
      filterAttr: (
        object: { [key: string]: any },
        attr: string[] = Object.keys(object)
      ): any => {
        return attr.reduce((v: object, c) => {
          if (InputAttr.File.includes(c) && nuxtApp.$isObject(object[c])) {
            return {
              ...v,
              [c]: nuxtApp.$filterAttr(object[c], [
                'key',
                'name',
                'size',
                'type',
                'identityId'
              ])
            }
          } else
            return {
              ...v,
              [c]: object[c]
            }
        }, {})
      },
      excludeAttr: (
        object: { [key: string]: any },
        attr: string[] = []
      ): any => {
        const res = JSON.parse(JSON.stringify(object))
        for (let i = 0, len = attr.length; i < len; i++) {
          delete res[attr[i]]
        }
        return res
      },
      snakeCase: (str: string): string => {
        return str.replace(/[A-Z]/g, function (s) {
          return '_' + s.charAt(0).toLowerCase()
        })
      }
    }
  }
})
