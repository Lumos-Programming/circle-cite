export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body) return
  await $fetch(
    'https://discord.com/api/webhooks/1041681585063333918/j0FnI7IIEgYELSvpzHxfi50UZ75OCnf51VCyZmi0D6u7REN2u5mFK6JjaKr778W6pw-2',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body
    }
  )
  return { status: 200, statusCode: 200, ok: true }
})
