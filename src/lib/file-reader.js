const newline = /(\r\n|\n|\r)/

class FileReaderWrapper {
  constructor(file) {
    this._file = file
    this._offset = 0
    this._chunkSize = 1024 * 4 // 4KB
    this._fileReader = new FileReader()
    this._decoder = new TextDecoder('utf-8')
  }

  readLine (callback) {
    if (typeof callback !== 'function') return

    const chunk = { partialLine: '' }

    this._fileReader.onload = () => {
      const buffer = new Uint8Array(this._fileReader.result)
      const decoded = this._decoder.decode(buffer, { stream: true })

      chunk.offset = 0
      chunk.content = decoded.split(newline)

      this._nextLine(chunk, callback)
    }

    this._seek()
  }

  _eof () {
    return this._offset === this._file.size
  }

  _nextLine (chunk, callback) {
    for (; chunk.offset < chunk.content.length && !newline.test(chunk.partialLine); chunk.offset++) {
      chunk.partialLine += chunk.content[chunk.offset]
    }

    const eoc = chunk.offset >= chunk.content.length
    const line = chunk.partialLine.replace(newline, '')

    if (newline.test(chunk.partialLine)) {
      chunk.partialLine = ''
    }

    if (eoc && this._eof()) {
      callback(undefined, () => {})
    } else if (eoc) {
      this._seek()
    } else {
      callback(line, () => this._nextLine(chunk, callback))
    }
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
}

export default FileReaderWrapper
