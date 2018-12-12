import FileInfoWrapper from './file-info'
import FileReaderWrapper from './file-reader'
import FileSizeWrapper from './file-size'

class FileWrapper {
  constructor (file) {
    this._file = file
    this._info = new FileInfoWrapper(file)
    this._reader = new FileReaderWrapper(file)
    this._size = new FileSizeWrapper(file)
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

  greaterThan (maxSize, unit) {
    if (!this._isFileInstance()) return false
    if (typeof maxSize !== 'number') return false

    return this._size.greaterThan(maxSize, unit)
  }

  greaterOrEqual (maxSize, unit) {
    if (!this._isFileInstance()) return false
    if (typeof maxSize !== 'number') return false

    return this._size.greaterOrEqual(maxSize, unit)
  }

  lowerThan (maxSize, unit) {
    if (!this._isFileInstance()) return false
    if (typeof maxSize !== 'number') return false

    return this._size.lowerThan(maxSize, unit)
  }

  lowerOrEqual (maxSize, unit) {
    if (!this._isFileInstance()) return false
    if (typeof maxSize !== 'number') return false

    return this._size.lowerOrEqual(maxSize, unit)
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

  size (unit) {
    if (this._isFileInstance()) {
      return this._size.calculate(unit)
    }
  }

  _isFileInstance () {
    return this._file instanceof File
  }
}

export default FileWrapper
