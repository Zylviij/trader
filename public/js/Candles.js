
class Candles {
  constructor(candles, color, good_color, bad_color) {
    this.candles = candles

    this.color = color
    this.good_color = good_color
    this.bad_color = bad_color
  }

  min() {
    return this.data.map((e) => { return e.low }).sort().shift()
  }

  max() {
    return this.data.map((e) => { return e.high }).sort().pop()
  }

  min_time() {
    return this.data.map((e) => { return e.time }).sort().shift()
  }

  max_time() {
    return this.data.map((e) => { return e.time }).sort().pop()
  }
}
