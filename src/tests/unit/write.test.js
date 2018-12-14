import io from '@/inout'

describe('write()', () => {
  describe('when has no parameter', () => {
    it('nothing should happen', () => expect(() => io().write()).not.toThrow())
  })

  describe('when has parameter', () => {
    const wrapper = io().write('Think before you speak.')
    const lines = []

    wrapper.readLine((line, next) => {
      if (line !== undefined) {
        lines.push(line)
        next()
      }
    })

    it('should write content to file', () => expect(lines[0]).toEqual('Think before you speak.'))

    it('should write a single line', () => expect(lines.length).toEqual(1))
  })
})
