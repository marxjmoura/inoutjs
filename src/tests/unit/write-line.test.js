/*
 * MIT License
 *
 * Copyright (c) 2018 LogiQ System
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
