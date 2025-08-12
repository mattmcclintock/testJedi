import { describe, it, expect } from 'vitest'
import { makeCounter } from '../src/counter.js'

describe('makeCounter', () => {
  it('starts at 0 by default', () => {
    const c = makeCounter()
    expect(c.value()).toBe(0)
  })

  it('increments correctly', () => {
    const c = makeCounter(1)
    expect(c.inc()).toBe(2)
    expect(c.inc()).toBe(3)
  })

  it('resets to 0', () => {
    const c = makeCounter(5)
    c.reset()
    expect(c.value()).toBe(0)
  })
})
