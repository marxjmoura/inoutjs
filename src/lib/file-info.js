const fileExtension = /\.[^/.]+$/

class FileInfoWrapper {
  constructor(file) {
    this._file = file
  }

  fullName () {
    return this._file.name
  }

  name () {
    return this._file.name.replace(fileExtension, '')
  }
}

export default FileInfoWrapper
