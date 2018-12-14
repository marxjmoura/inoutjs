import FileFactory from './file-factory'
import FileInfoWrapper from './file-info'
import FileReaderWrapper from './file-reader'
import FileSaveWrapper from './file-save'
import FileSizeWrapper from './file-size'

class FileWrapper {
  constructor (file) {
    this._file = new FileFactory(file).create()
    this._info = new FileInfoWrapper(this._file)
    this._reader = new FileReaderWrapper(this._file)
    this._save = new FileSaveWrapper(this._file)
    this._size = new FileSizeWrapper(this._file)
  }

  ext () {
    return this._info.ext()
  }

  fullName () {
    return this._info.fullName()
  }

  greaterThan (size, unit) {
    return this._size.greaterThan(size, unit)
  }

  greaterOrEqual (size, unit) {
    return this._size.greaterOrEqual(size, unit)
  }

  lowerThan (size, unit) {
    return this._size.lowerThan(size, unit)
  }

  lowerOrEqual (size, unit) {
    return this._size.lowerOrEqual(size, unit)
  }

  name () {
    return this._info.name()
  }

  readChunk (callback) {
    this._reader.readChunk(callback)
  }

  readLine (callback) {
    this._reader.readLine(callback)
  }

  save (name, type) {
    this._save.save(name, type)
  }

  size (unit) {
    return this._size.calculate(unit)
  }

  toFile () {
    return this._file
  }

  type () {
    return this._info.type()
  }
}

export default FileWrapper
