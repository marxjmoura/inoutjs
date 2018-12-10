import io from '@/inout'

describe('contentType()', () => {
  describe('when the parameter is a File', () => {
    const blob = new Blob([], { type: 'text/plain' })
    const file = new File([blob], 'file.txt', { type: blob.type, lastModified: new Date() })

    it('should return the file content type', () => expect(io(file).contentType()).toBe('text/plain'))
  })

  describe('when the parameter is not an instance of File', () => {
    it('should return undefined', () => expect(io().contentType()).toBeUndefined())
  })
})
