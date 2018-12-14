import io from '@/inout'
import startwars_txt from '@/tests/fakes/starwars.txt'

describe('size()', () => {
  describe('when io() has no parameter', () => {
    it('should return zero', () => expect(io().size()).toEqual(0))
  })

  describe('when io() parameter already is an InOut.js wrapper', () => {
    const wrapper = io(startwars_txt)
    it('should get wrapped file size', () => expect(io(wrapper).size()).toEqual(5643))
  })

  describe('when io() parameter is a Blob', () => {
    const blob = new Blob(['Abracadabra'], { type: 'text/plain' })
    it('should get wrapped file size created from the blob', () => expect(io(blob).size()).toEqual(11))
  })

  describe('when size unit is not passed', () => {
    it('should return size in bytes', () => expect(io(startwars_txt).size()).toEqual(5643))
  })

  describe('when size unit is B', () => {
    it('should return size in bytes', () => expect(io(startwars_txt).size('B')).toEqual(5643))
  })

  describe('when size unit is KB', () => {
    it('should return size in kilobytes', () => {
      const size = io(startwars_txt).size('KB').toFixed(6)
      expect(Number(size)).toEqual(5.510742)
    })
  })

  describe('when size unit is MB', () => {
    it('should return size in megabytes', () => {
      const size = io(startwars_txt).size('MB').toFixed(6)
      expect(Number(size)).toEqual(0.005382)
    })
  })

  describe('when size unit is GB', () => {
    it('should return size in gigabytes', () => {
      const size = io(startwars_txt).size('GB').toFixed(6)
      expect(Number(size)).toEqual(0.000005)
    })
  })
})
