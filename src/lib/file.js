import FileReaderWrapper from './file-reader'

class FileWrapper {
  constructor (file) {
    this._reader = new FileReaderWrapper(file);
  }

  readLine (callback) {
    this._reader.readLine(callback)
  }
}

export default FileWrapper
