
class Line {
  constructor(data, color) {
    this.data = data
    this.color = color
  }

  min() {
    return this.data.map((e) => { return e.value }).sort().shift()
  }

  max() {
    return this.data.map((e) => { return e.value }).sort().pop()
  }

  min_time() {
    return this.data.map((e) => { return e.time }).sort().shift()
  }

  max_time() {
    return this.data.map((e) => { return e.time }).sort().pop()
  }
}
