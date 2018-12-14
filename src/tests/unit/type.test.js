import io from '@/inout'
import empty_txt from '@/tests/fakes/empty.txt'

describe('type()', () => {
  describe('when io() has no parameter', () => {
    it('should return text/plain', () => expect(io().type()).toEqual('text/plain'))
  })

  describe('when io() parameter already is an InOut.js wrapper', () => {
    const wrapper = io(empty_txt)
    it('should get wrapped file type', () => expect(io(wrapper).type()).toEqual('text/plain'))
  })

  describe('when io() parameter is a Blob', () => {
    const blob = new Blob([], { type: 'text/plain' })
    it('should get wrapped file type created from the blob', () => expect(io(blob).type()).toEqual('text/plain'))
  })

  describe('when io() parameter is a File', () => {
    it('should return the file content type', () => expect(io(empty_txt).type()).toEqual('text/plain'))
  })
})
