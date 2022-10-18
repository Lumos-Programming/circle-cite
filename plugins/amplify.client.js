import { API, Storage } from 'aws-amplify'
// TODO: 開発速度優先でjsで開発したため、後に適切な片付けを行う
export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$config
  const isProd = config.public.isProd
  return {
    provide: {
      listGraphql: async ({ name, query, filter = {}, multiple = 1 }) => {
        try {
          const items = []
          const variables = Object.assign(
            { limit: config.public.limit * multiple },
            filter
          )

          const listQuery = async () => {
            // NOTE: DynamoDBのscanの1MB制限に達するとnextTokenが返される
            const result = await API.graphql({
              query,
              variables
            })
            items.push(...result.data[name].items)
            if (result.data[name]?.nextToken) {
              variables.nextToken = result.data[name].nextToken
              await listQuery()
            }
          }

          await listQuery()
          return items.length ? items : []
        } catch (e) {
          if (isProd) console.log(e)
        }
      },
      createStorage: async (path, image) => {
        await Storage.put(path + image.name, image, {
          level: 'protected',
          contentType: image.type
        }).catch((e) => {
          if (isProd) console.log('createStorage', e)
        })
      },
      updateStorage: async (item, image, path) => {
        if (image) {
          const s3Path = path || item.url || ''
          await Storage.remove(s3Path + item.fullName, {
            level: 'protected',
            contentType: image.type || item.type || ''
          }).catch((e) => {
            console.log('updateStorage', e)
          })
          await Storage.put(s3Path + image.name, image, {
            level: 'protected',
            contentType: image.type || item.type || ''
          }).catch((e) => {
            console.log('updateStorage', e)
          })
        }
      },
      deleteStorage: async (item) => {
        await Storage.remove(item.url + item.fullName, {
          level: 'protected'
        }).catch((e) => {
          console.log('deleteStorage', e)
        })
      },
      getImage: async (item) => {
        item.uploadImageUrl = await this.getStorage(
          item.url + item.fullName,
          item.identityId
        )
        item.inputImage = null
        item.isNew = false
        item.isUpdated = false
        return item
      },
      getImages: async (res) => {
        for (let i = 0, len = res.length; i < len; i++) {
          let item = res[i]
          item = await this.getImage(item)
        }
        return res
      },
      createImage: async ({
        item = {},
        path = '',
        query = {},
        assign = {}
      }) => {
        if (item.isNew) {
          const image = item.inputImage // ファイルオブジェクト
          const createitem = {
            fullName: image.name || '',
            name: image.name.substring(0, image.name.indexOf('.')) || '', // 拡張子無い名前
            type: image.type || '',
            size: image.size || 0,
            alt: item.alt || '',
            url: path || '',
            identityId: this.$store.state.identityId,
            owner: this.$store.state.owner
          }
          if (Object.keys(assign)) {
            Object.assign(createitem, assign)
          }
          await this.createStorage(path, image).then(async () => {
            await API.graphql({
              query,
              variables: {
                input: createitem
              }
            }).catch((e) => {
              console.log('createImage', e)
            })
          })
        }
      },
      updateImage: async ({ item = {}, query = {}, path = null }) => {
        if (!item.isNew && item.isUpdated) {
          const image = item.inputImage
          await this.updateStorage(item, image, path).then(async () => {
            await API.graphql({
              query,
              variables: {
                input: {
                  id: item.id || '',
                  fullName: image ? image.name : item.fullName || '',
                  name: image
                    ? image.name.substring(0, image.name.indexOf('.'))
                    : item.name || '',
                  type: image ? image.type : item.type || '',
                  size: image ? image.size : item.size || 0,
                  alt: item.alt || '',
                  url: path || item.url || ''
                }
              }
            }).catch((e) => {
              console.log('updateImage', e)
            })
          })
        }
      },
      deleteImage: async ({ item = {}, query = {} }) => {
        await this.deleteStorage(item).then(async () => {
          await API.graphql({
            query,
            variables: { input: { id: item.id } }
          }).catch((e) => {
            console.log('deleteImage', e)
          })
        })
      }
    }
  }
})
