import * as Utils from '../../src/utils'

describe('Utils functions', () => {
  it('Check colored', () => {
    expect(Utils.colored(1)).toBe('rgb(2,252,0)')
  })
  it('Check randomize', () => {
    const r = Utils.randomize(10)
    expect(r).toBeGreaterThanOrEqual(0)
    expect(r).toBeLessThanOrEqual(10)
  })
  it('Check capitalize', () => {
    expect(Utils.capitalize('hola')).toBe('Hola')
    expect(Utils.capitalize('somebody')).toBe('Somebody')
    expect(Utils.capitalize([])).toBe('')
  })
})