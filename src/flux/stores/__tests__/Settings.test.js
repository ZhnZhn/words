import Settings from '../Settings'

const { isApiKeyAllow } = Settings;

describe("isApiKeyAllow", ()=>{
  const fn = isApiKeyAllow;
  test('should return false for all X', ()=>{
    expect(fn('XXX')).toBe(false)
    expect(fn('XXXXXXXX')).toBe(false)
    expect(fn('X')).toBe(false)
  })

  test('should return true for one not X', ()=>{
    expect(fn('XXXy')).toBe(true)
    expect(fn('XXXXXyXXX')).toBe(true)
    expect(fn('abcd')).toBe(true)
  })
})
