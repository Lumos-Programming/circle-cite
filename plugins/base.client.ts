export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$config.public.isProd
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
        const { data, error } = await useFetch(path, options)
        let err = null
        if (error.value) {
          err = {
            data: error.value,
            // @ts-ignore
            request: error.value.request || path,
            options
          }
          if (!isProd) console.dir(err)
          if (!isProd) console.error(error.value)
          clearError()
        }
        return { data: data.value as T, error: err }
      },
      baseAsyncData: async <T>(path: string, options = nuxtApp.$options()) => {
        const { data, error } = await useAsyncData(
          path,
          () => $fetch(path, options),
          { initialCache: false }
        )
        let err = null
        if (error.value) {
          err = {
            data: error.value,
            // @ts-ignore :NOTE
            request: error.value.request || path,
            options
          }
          if (!isProd) console.dir(err)
          if (!isProd) console.error(path, error.value)
          clearError()
        }
        return { data: data.value as T, error: err }
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
      }
    }
  }
})
