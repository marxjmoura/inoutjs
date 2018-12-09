export default function (fixture) {
  const xhr = new XMLHttpRequest()

  xhr.open('get', `/base/src/tests/fixtures/${fixture}`, false)
  xhr.send()

  const blob = new Blob([xhr.responseText], { type: 'text/plain' })

  return new File([blob], fixture)
}
