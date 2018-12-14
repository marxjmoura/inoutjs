class FileSaveWrapper {
  constructor (file) {
    this._file = file
  }

  save (name, type) {
    name = name || this._file.name
    type = type || this._file.type

    const blob = new Blob([this._file], { type: type })
    const options = { type: blob.type, lastModified: this._file.lastModified }
    const file = new File([blob], name, options)

    this._download(file)
  }

  _download (file) {
    const a = document.createElement('a')

    a.href = URL.createObjectURL(file)
    a.download = file.name

    a.click()
    a.remove()
  }
}

export default FileSaveWrapper
