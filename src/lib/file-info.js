class FileInfoWrapper {
  constructor(file) {
    this._file = file
  }

  fullName () {
    return this._file.name
  }
}

export default FileInfoWrapper
