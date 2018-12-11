import io from '@/inout'

describe('fullName()', () => {
  let blob

  beforeAll(done => {
    blob = new Blob([], { type: 'text/plain' })
    done()
  })

  describe('when the parameter is not an instance of File', () => {
    it('should return undefined', () => expect(io().fullName()).toBeUndefined())
  })

  describe('when file has no extension', () => {
    const file = new File([blob], 'unknown')
    it('should return the name', () => expect(io(file).fullName()).toEqual('unknown'))
  })

  describe('when is a dot file extension', () => {
    const file = new File([blob], '.dotfile')
    it('should return the extension including the dot', () => expect(io(file).fullName()).toEqual('.dotfile'))
  })

  describe('when the file has a name and extension', () => {
    const file = new File([blob], 'file.txt')
    it('should return the name and extension', () => expect(io(file).fullName()).toEqual('file.txt'))
  })
})
