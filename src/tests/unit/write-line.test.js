import io from '@/inout'

describe('writeLine()', () => {
  describe('when has no parameter', () => {
    const wrapper = io().writeLine()
    const lines = []

    wrapper.readLine((line, next) => {
      if (line !== undefined) {
        lines.push(line)
        next()
      }
    })

    it('should break line', () => expect(lines.length).toEqual(2))
  })

  describe('when has parameter', () => {
    const wrapper = io().writeLine('Keep calm and press ctrl+alt+del.')
    const lines = []

    wrapper.readLine((line, next) => {
      if (line !== undefined) {
        lines.push(line)
        next()
      }
    })

    it('should write content to file', () => expect(lines[0]).toEqual('Keep calm and press ctrl+alt+del.'))

    it('should write two lines', () => expect(lines.length).toEqual(2))
  })
})
