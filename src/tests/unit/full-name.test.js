import io from '@/inout'
import startwars_txt from '@/tests/fakes/starwars.txt'

describe('fullName()', () => {
  const blob = new Blob([], { type: 'text/plain' })

  describe('when io() has no parameter', () => {
    it('should return untitled.txt', () => expect(io().fullName()).toEqual('untitled.txt'))
  })

  describe('when io() parameter already is an InOut.js wrapper', () => {
    const wrapper = io(startwars_txt)
    it('should get wrapped file extension', () => expect(io(wrapper).fullName()).toEqual('starwars.txt'))
  })

  describe('when io() parameter is a Blob', () => {
    const blob = new Blob([], { type: 'text/plain' })
    it('should return untitled', () => expect(io(blob).fullName()).toEqual('untitled'))
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
