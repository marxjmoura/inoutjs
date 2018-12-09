import io from '@/inout'
import fixture from '@/tests/fixtures'

describe('fullName()', () => {
  let file

  beforeAll(done => {
    file = fixture('empty.txt')
    done()
  })

  it('should be empty.txt', () => expect(io(file).fullName()).toEqual('empty.txt'))
})
