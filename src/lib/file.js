import FileReaderWrapper from './file-reader'
import FileInfoWrapper from './file-info'

class FileWrapper {
  constructor (file) {
    this._info = new FileInfoWrapper(file);
    this._reader = new FileReaderWrapper(file);
  }

  fullName () {
    return this._info.fullName()
  }

  name () {
    return this._info.name()
  }

  readLine (callback) {
    this._reader.readLine(callback)
  }
}

export default FileWrapper
