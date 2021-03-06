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

describe('size()', () => {
  describe('when io() has no parameter', () => {
    it('should return zero', () => expect(io().size()).toEqual(0))
  })

  describe('when io() parameter already is an InOut.js wrapper', () => {
    const wrapper = io(startwars_txt)
    it('should get wrapped file size', () => expect(io(wrapper).size()).toEqual(5643))
  })

  describe('when io() parameter is a Blob', () => {
    const blob = new Blob(['Abracadabra'], { type: 'text/plain' })
    it('should get wrapped file size created from the blob', () => expect(io(blob).size()).toEqual(11))
  })

  describe('when size unit is not passed', () => {
    it('should return size in bytes', () => expect(io(startwars_txt).size()).toEqual(5643))
  })

  describe('when size unit is B', () => {
    it('should return size in bytes', () => expect(io(startwars_txt).size('B')).toEqual(5643))
  })

  describe('when size unit is KB', () => {
    it('should return size in kilobytes', () => {
      const size = io(startwars_txt).size('KB').toFixed(6)
      expect(Number(size)).toEqual(5.510742)
    })
  })

  describe('when size unit is MB', () => {
    it('should return size in megabytes', () => {
      const size = io(startwars_txt).size('MB').toFixed(6)
      expect(Number(size)).toEqual(0.005382)
    })
  })

  describe('when size unit is GB', () => {
    it('should return size in gigabytes', () => {
      const size = io(startwars_txt).size('GB').toFixed(6)
      expect(Number(size)).toEqual(0.000005)
    })
  })
})
