const sizeUnit = /B|KB|MB|GB/i
const exponentOf = { B: 0, KB: 1, MB: 2, GB: 3 }

class FileSizeWrapper {
  constructor (file) {
    this._file = file
  }

  calculate (unit) {
    unit = sizeUnit.test(unit) ? unit.toUpperCase() : 'B'

    return Number(this._file.size) / Math.pow(1024, exponentOf[unit])
  }

  greaterThan (size, unit) {
    return this.calculate(unit) > Number(size)
  }

  greaterOrEqual (size, unit) {
    return this.calculate(unit) >= Number(size)
  }

  lowerThan (size, unit) {
    return this.calculate(unit) < Number(size)
  }

  lowerOrEqual (size, unit) {
    return this.calculate(unit) <= Number(size)
  }
}

export default FileSizeWrapper
