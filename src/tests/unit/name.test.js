import io from '@/inout'

describe('fullName()', () => {
  let blob

  beforeAll(done => {
    blob = new Blob([], { type: 'text/plain' })
    done()
  })

  describe('when file has no extension', () => {
    const file = new File([blob], 'unknown')
    it('should return the name', () => expect(io(file).name()).toEqual('unknown'))
  })

  describe('when is a dot file extension', () => {
    const file = new File([blob], '.dotfile')
    it('should return an empty string', () => expect(io(file).name()).toBe(''))
  })

  describe('when the file has a name and extension', () => {
    const file = new File([blob], 'file.txt')
    it('should return the name', () => expect(io(file).name()).toEqual('file'))
  })
})
