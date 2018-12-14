class FileWriterWrapper {
  constructor (file) {
    this._file = file
  }

  write (content) {
    if (content === null || content === undefined) return

    const blob = new Blob([this._file, content], { type: this._file.type })
    const file = new File([blob], this._file.name, { type: blob.type, lastModified: new Date() })

    return file
  }

  writeLine (content) {
    if (content === null || content === undefined) {
      content = ''
    }

    return this.write(`${content}\n`)
  }
}

export default FileWriterWrapper
