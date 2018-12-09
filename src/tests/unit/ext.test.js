import io from '@/inout'

describe('ext()', () => {
  let blob

  beforeAll(done => {
    blob = new Blob([], { type: 'text/plain' })
    done()
  })

  describe('when file has no extension', () => {
    const file = new File([blob], 'unknown')
    it('should return undefined', () => expect(io(file).ext()).toBeUndefined())
  })

  describe('when is a dot file extension', () => {
    const file = new File([blob], '.dotfile')
    it('should return the string after the dot', () => expect(io(file).ext()).toEqual('dotfile'))
  })

  describe('when the file name has a single dot', () => {
    const file = new File([blob], 'file.txt')
    it('should return the string after the dot', () => expect(io(file).ext()).toEqual('txt'))
  })

  describe('when the file name has multiple dots', () => {
    const file = new File([blob], 'file.name.with.dots.txt')
    it('should return the string after the last dot', () => expect(io(file).ext()).toEqual('txt'))
  })
})
