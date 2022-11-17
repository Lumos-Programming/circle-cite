export default defineNuxtPlugin((nuxtApp) => {
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
        method = 'GET',
        headers = {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        },
        body = null
      }: {
        method?: string
        headers?: { [key: string]: string }
        body?: string | null | FormData
      } = {}) => ({
        baseURL: config.public.baseUrl || '',
        body,
        method,
        headers: {
          ...headers
        }
      }),
      baseFetch: async <T>(path: string, options = nuxtApp.$options()) => {
        if (!isProd) console.log(options)
        const { data, error, refresh } = await useFetch(path, {
          ...options,
          onResponseError({ request, response, options }) {
            if (!isProd) console.log(response)
          }
        })
        if (error.value) clearError()
        else if (!data.value) await refresh()
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
      getYMD: (string: string, separator = '/') => {
        if (!string) return ''
        const date = new Date(string)
        return (
          date.getFullYear() +
          separator +
          ('0' + (date.getMonth() + 1)).slice(-2) +
          separator +
          ('0' + date.getDate()).slice(-2)
        )
      }
    }
  }
})
