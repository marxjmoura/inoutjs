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
import file from '@/tests/fakes/starwars.txt'

describe('greaterOrEqual()', () => {
  describe('when io() has no parameter', () => {
    it('should return false', () => expect(io().greaterOrEqual(2048)).toBe(false))
  })

  describe('when the parameter is not passed to the utility function', () => {
    it('should return false', () => expect(io(file).greaterOrEqual()).toBe(false))
  })

  describe('when file size is greater than option without size unit', () => {
    it('should use bytes as size unit and return true', () => expect(io(file).greaterOrEqual(2048)).toBe(true))
  })

  describe('when file size is equal to option without size unit', () => {
    it('should use bytes as size unit and return true', () => expect(io(file).greaterOrEqual(5643)).toBe(true))
  })

  describe('when file size is lower than option without size unit', () => {
    it('should return false', () => expect(io(file).greaterOrEqual(10240)).toBe(false))
  })

  describe('when file size is greater than option and size unit is bytes', () => {
    it('should return true', () => expect(io(file).greaterOrEqual(2048, 'B')).toBe(true))
  })

  describe('when file size is equal to option and size unit is bytes', () => {
    it('should return true', () => expect(io(file).greaterOrEqual(5643, 'B')).toBe(true))
  })

  describe('when file size is lower than option and size unit is bytes', () => {
    it('should return false', () => expect(io(file).greaterOrEqual(10240, 'B')).toBe(false))
  })

  describe('when file size is greater than option and size unit is kilobytes', () => {
    it('should return true', () => expect(io(file).greaterOrEqual(5, 'KB')).toBe(true))
  })

  describe('when file size is equal to option and size unit is kilobytes', () => {
    it('should return true', () => expect(io(file).greaterOrEqual(5.5107421875, 'KB')).toBe(true))
  })

  describe('when file size is lower than option and size unit is kilobytes', () => {
    it('should return false', () => expect(io(file).greaterOrEqual(10, 'KB')).toBe(false))
  })

  describe('when file size is greater than option and size unit is megabytes', () => {
    it('should return true', () => expect(io(file).greaterOrEqual(0.001, 'MB')).toBe(true))
  })

  describe('when file size is equal to option and size unit is megabytes', () => {
    it('should return true', () => expect(io(file).greaterOrEqual(0.005381584167480469, 'MB')).toBe(true))
  })

  describe('when file size is lower than option and size unit is megabytes', () => {
    it('should return false', () => expect(io(file).greaterOrEqual(10, 'MB')).toBe(false))
  })

  describe('when file size is greater than option and size unit is gigabytes', () => {
    it('should return true', () => expect(io(file).greaterOrEqual(0.000001, 'GB')).toBe(true))
  })

  describe('when file size is equal to option and size unit is gigabytes', () => {
    it('should return true', () => expect(io(file).greaterOrEqual(0.000005255453288555145, 'GB')).toBe(true))
  })

  describe('when file size is lower than option and size unit is gigabytes', () => {
    it('should return false', () => expect(io(file).greaterOrEqual(1, 'GB')).toBe(false))
  })
})
