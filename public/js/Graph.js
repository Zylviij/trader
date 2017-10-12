
class Colors {
  constructor(background, foreground) {
    this.background = background
    this.foreground = foreground
  }
}

class Graph {
  constructor(data, colors, granularity) {
    this.data = data
    this.colors = colors
    this.granularity = granularity // in seconds
  }

  min() {
    return this.data.map((e) => { return e.min() }).sort().shift()
  }

  max() {
    return this.data.map((e) => { return e.min() }).sort().pop()
  }

  min_time() {
    return this.data.map((e) => { return e.min_time() }).sort().shift()
  }

  max_time() {
    return this.data.map((e) => { return e.max_time() }).sort().pop()
  }

  draw(context, region) {
    context.fillStyle = this.colors.background
    context.fillRect(region.x, region.y, region.width, region.height)

    context.fillStyle = this.colors.foreground

    const timesteps = (max_time() - min_time()) / 5 + 1
    const vertical = max() - min()

    

  }
}
