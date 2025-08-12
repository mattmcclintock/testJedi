export function makeCounter (start = 0) {
  let n = start
  return {
    inc () {
      n += 1
      return n
    },
    reset () {
      n = 0
      return n
    },
    value () {
      return n
    }
  }
}
