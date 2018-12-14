import io from '@/inout'

describe('save()', () => {
  it('should download the file', () => expect(() => io().save()).not.toThrow())

  describe('when a name is passed as parameter', () => {
    it('should override the file name', () => expect(() => io().save('foo.json')).not.toThrow())
  })

  describe('when name and type are passed as parameter', () => {
    it('should override the file name and type', () => expect(() => io().save('foo.json', 'application/json')).not.toThrow())
  })
})
