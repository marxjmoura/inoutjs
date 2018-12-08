import FileWrapper from './lib/file'

const io = function (file) {
  return new FileWrapper(file)
}

window.io = io

export default io
