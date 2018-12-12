import io from '@/inout'
import file from '@/tests/fakes/starwars.txt'

describe('lowerThan()', () => {
  describe('when the parameter is not an instance of File', () => {
    it('should return false', () => expect(io().lowerThan(2048)).toBe(false))
  })

  describe('when the parameter is not passed to the utility function', () => {
    it('should return false', () => expect(io(file).lowerThan()).toBe(false))
  })

  describe('when file size is greater than option without size unit', () => {
    it('should use bytes as size unit and return true', () => expect(io(file).lowerThan(10240)).toBe(true))
  })

  describe('when file size is equal to option without size unit', () => {
    it('should use bytes as size unit and return false', () => expect(io(file).lowerThan(5643)).toBe(false))
  })

  describe('when file size is lower than option without size unit', () => {
    it('should return false', () => expect(io(file).lowerThan(2048)).toBe(false))
  })

  describe('when file size is greater than option and size unit is bytes', () => {
    it('should return true', () => expect(io(file).lowerThan(10240, 'B')).toBe(true))
  })

  describe('when file size is equal to option and size unit is bytes', () => {
    it('should return false', () => expect(io(file).lowerThan(5643, 'B')).toBe(false))
  })

  describe('when file size is lower than option and size unit is bytes', () => {
    it('should return false', () => expect(io(file).lowerThan(2048, 'B')).toBe(false))
  })

  describe('when file size is greater than option and size unit is kilobytes', () => {
    it('should return true', () => expect(io(file).lowerThan(10, 'KB')).toBe(true))
  })

  describe('when file size is equal to option and size unit is kilobytes', () => {
    it('should return false', () => expect(io(file).lowerThan(5.5107421875, 'KB')).toBe(false))
  })

  describe('when file size is lower than option and size unit is kilobytes', () => {
    it('should return false', () => expect(io(file).lowerThan(5, 'KB')).toBe(false))
  })

  describe('when file size is greater than option and size unit is megabytes', () => {
    it('should return true', () => expect(io(file).lowerThan(10, 'MB')).toBe(true))
  })

  describe('when file size is equal to option and size unit is megabytes', () => {
    it('should return false', () => expect(io(file).lowerThan(0.005381584167480469, 'MB')).toBe(false))
  })

  describe('when file size is lower than option and size unit is megabytes', () => {
    it('should return false', () => expect(io(file).lowerThan(0.001, 'MB')).toBe(false))
  })

  describe('when file size is greater than option and size unit is gigabytes', () => {
    it('should return true', () => expect(io(file).lowerThan(1, 'GB')).toBe(true))
  })

  describe('when file size is equal to option and size unit is gigabytes', () => {
    it('should return false', () => expect(io(file).lowerThan(0.000005255453288555145, 'GB')).toBe(false))
  })

  describe('when file size is lower than option and size unit is gigabytes', () => {
    it('should return false', () => expect(io(file).lowerThan(0.000001, 'GB')).toBe(false))
  })
})
