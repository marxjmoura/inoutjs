const fileExtension = /(?:\.([^.]+))?$/

class FileInfoWrapper {
  constructor(file) {
    this._file = file
  }

  contentType () {
    return this._file.type
  }

  ext () {
    return fileExtension.exec(this._file.name)[1]
  }

  fullName () {
    return this._file.name
  }

  name () {
    return this._file.name.replace(fileExtension, '')
  }
}

export default FileInfoWrapper
