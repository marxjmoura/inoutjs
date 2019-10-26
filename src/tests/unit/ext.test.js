/*
 * MIT License
 *
 * Copyright (c) 2018-present Marx J. Moura
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
import startwars_txt from '@/tests/fakes/starwars.txt'

describe('ext()', () => {
  const blob = new Blob([], { type: 'text/plain' })

  describe('when io() has no parameter', () => {
    it('should return txt', () => expect(io().ext()).toEqual('txt'))
  })

  describe('when io() parameter already is an InOut.js wrapper', () => {
    const wrapper = io(startwars_txt)
    it('should get wrapped file extension', () => expect(io(wrapper).ext()).toEqual('txt'))
  })

  describe('when io() parameter is a Blob', () => {
    const blob = new Blob([], { type: 'text/plain' })
    it('should return undefined', () => expect(io(blob).ext()).toBeUndefined())
  })

  describe('when file has no extension', () => {
    const file = new File([blob], 'unknown')
    it('should return undefined', () => expect(io(file).ext()).toBeUndefined())
  })

  describe('when is a dot file extension', () => {
    const file = new File([blob], '.dotfile')
    it('should return the string after the dot', () => expect(io(file).ext()).toEqual('dotfile'))
  })

  describe('when the file name has a single dot', () => {
    const file = new File([blob], 'file.txt')
    it('should return the string after the dot', () => expect(io(file).ext()).toEqual('txt'))
  })

  describe('when the file name has multiple dots', () => {
    const file = new File([blob], 'file.name.with.dots.txt')
    it('should return the string after the last dot', () => expect(io(file).ext()).toEqual('txt'))
  })
})
