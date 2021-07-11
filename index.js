export const not_base64_regex = /[^A-Z0-9+\/=]/i

export function base64(text) {
  if (typeof text !== 'string') return false
  else if (text.length % 4 !== 0 || not_base64_regex.test(text)) return false

  const padding = text.indexOf('=')

  return (
    padding === -1 ||
    padding === text.length - 1 ||
    (padding === text.length - 2 && text.charAt(text.length - 1) === '=')
  )
}

export default function (ajv) {
  ajv.addFormat('base64', {
    type: 'string',
    errors: true,
    validate: (data) => base64(data),
  })
}
