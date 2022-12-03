export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body.url) return
  const response = await $fetch(body.url, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    }
  })
  return response
})
