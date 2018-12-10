import FileReaderWrapper from './file-reader'
import FileInfoWrapper from './file-info'

class FileWrapper {
  constructor (file) {
    this._file = file
    this._info = new FileInfoWrapper(file);
    this._reader = new FileReaderWrapper(file);
  }

  contentType () {
    if (this._isFileInstance()) {
      return this._info.contentType()
    }
  }

  ext () {
    if (this._isFileInstance()) {
      return this._info.ext()
    }
  }

  fullName () {
    if (this._isFileInstance()) {
      return this._info.fullName()
    }
  }

  name () {
    if (this._isFileInstance()) {
      return this._info.name()
    }
  }

  readLine (callback) {
    if (this._isFileInstance()) {
      this._reader.readLine(callback)
    }
  }

  _isFileInstance () {
    return this._file instanceof File
  }
}

export default FileWrapper
