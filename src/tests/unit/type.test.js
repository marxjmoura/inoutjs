import io from '@/inout'
import file from '@/tests/fakes/empty.txt'

describe('type()', () => {
  describe('when the parameter is a File', () => {
    it('should return the file content type', () => expect(io(file).type()).toBe('text/plain'))
  })

  describe('when the parameter is not an instance of File', () => {
    it('should return undefined', () => expect(io().type()).toBeUndefined())
  })
})