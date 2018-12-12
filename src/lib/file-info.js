const fileExtension = /(?:\.([^.]+))?$/

class FileInfoWrapper {
  constructor(file) {
    this._file = file
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

  type () {
    return this._file.type
  }
}

export default FileInfoWrapper
