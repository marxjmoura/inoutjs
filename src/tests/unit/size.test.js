import io from '@/inout'
import fixture from '@/tests/fixtures'

describe('size()', () => {
  let file

  beforeAll(done => {
    file = fixture('starwars.txt')
    done()
  })

  describe('when the parameter is not an instance of File', () => {
    it('should return undefined', () => expect(io().size()).toBeUndefined())
  })

  describe('when size unit is not passed', () => {
    it('should return size in bytes', () => expect(io(file).size()).toEqual(5764))
  })

  describe('when size unit is B', () => {
    it('should return size in bytes', () => expect(io(file).size('B')).toEqual(5764))
  })

  describe('when size unit is KB', () => {
    it('should return size in kilobytes', () => {
      const size = io(file).size('KB').toFixed(6)
      expect(Number(size)).toEqual(5.628906)
    })
  })

  describe('when size unit is MB', () => {
    it('should return size in megabytes', () => {
      const size = io(file).size('MB').toFixed(6)
      expect(Number(size)).toEqual(0.005497)
    })
  })

  describe('when size unit is GB', () => {
    it('should return size in gigabytes', () => {
      const size = io(file).size('GB').toFixed(6)
      expect(Number(size)).toEqual(0.000005)
    })
  })
})
