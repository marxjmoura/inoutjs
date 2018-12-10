export default function (fixture) {
  const xhr = new XMLHttpRequest()

  xhr.open('get', `/base/src/tests/fixtures/${fixture}`, false)
  xhr.send()

  const blob = new Blob([xhr.responseText], { type: xhr.getResponseHeader('content-type') })

  return new File([blob], fixture, { type: blob.type, lastModified: new Date() })
}
