const newline = /(\r?\n)/

class FileReaderWrapper {
  constructor(file) {
    this._file = file
    this._offset = 0
    this._chunkSize = 1024 * 4 // 4KB
    this._fileReader = new FileReader()
    this._decoder = new TextDecoder('utf-8')
  }

  readChunk (callback) {
    if (typeof callback !== 'function') return

    this._fileReader.onload = () => {
      const buffer = new Uint8Array(this._fileReader.result)
      const chunk = this._decoder.decode(buffer, { stream: true })

      this._nextChunk(chunk, callback)
    }

    this._seek()
  }

  readLine (callback) {
    if (typeof callback !== 'function') return

    const chunk = { partialLine: '' }

    this._fileReader.onload = () => {
      const buffer = new Uint8Array(this._fileReader.result)
      const content = this._decoder.decode(buffer, { stream: true })

      chunk.offset = 0
      chunk.content = content.split(newline)

      this._nextLine(chunk, callback)
    }

    this._seek()
  }

  _eof () {
    return this._offset === this._file.size
  }

  _nextChunk (chunk, callback) {
    const next = () => {
      if (this._eof()) {
        this._stop(callback)
      } else {
        this._seek()
      }
    }

    callback(chunk, next)
  }

  _nextLine (chunk, callback) {
    for (; chunk.offset < chunk.content.length && !newline.test(chunk.partialLine); chunk.offset++) {
      chunk.partialLine += chunk.content[chunk.offset]
    }

    const eoc = chunk.offset >= chunk.content.length
    const line = chunk.partialLine.replace(newline, '')

    if (newline.test(chunk.partialLine)) {
      chunk.partialLine = ''
    } else if (eoc && !this._eof()) {
      this._seek()
      return
    }

    const next = () => {
      if (eoc && this._eof()) {
        this._stop(callback)
      } else {
        this._nextLine(chunk, callback)
      }
    }

    callback(line, next)
  }

  _seek () {
    if (this._eof()) return

    let start = this._offset
    let end = this._offset + this._chunkSize

    if (end > this._file.size) {
      end = this._file.size
    }

    const slice = this._file.slice(start, end)

    this._fileReader.readAsArrayBuffer(slice)
    this._offset = end
  }

  _stop (callback) {
    callback(undefined, () => {})
  }
}

export default FileReaderWrapper
