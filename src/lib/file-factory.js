import FileWrapper from './file'

class FileFactory {
  constructor (file) {
    this._file = file
  }

  create () {
    if (this._file instanceof FileWrapper) {
      return this._file.toFile()
    } else if (this._file instanceof File) {
      return this._file
    } else if (this._file instanceof Blob) {
      return this._fileFromBlob(this._file)
    } else {
      return this._emptyFile()
    }
  }

  _fileFromBlob (blob) {
    return new File([blob], 'untitled', {
      type: blob.type,
      lastModified: new Date()
    })
  }

  _emptyFile () {
    const blob = new Blob([], { type: 'text/plain' })

    return new File([blob], 'untitled.txt', {
      type: blob.type,
      lastModified: new Date()
    })
  }
}

export default FileFactory
