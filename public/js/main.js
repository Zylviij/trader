
const $ = require('jquery')
const Api = require('./public/js/Api.js')

$(document).ready(() => {
  // Background Canvas
  const canvas = $('canvas.trader')[0]
  const context = canvas.getContext('2d')

  let resize = () => {
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
  }
  resize()

  // Draw
  let draw = (data) => {
    // Clear Screen
    context.clearRect(0, 0, canvas.width, canvas.height)

    // Diagnostic Data
    context.font = '30px serif'
    context.fillText(data.fps | 0, 10, 30)
  }

  // Draw Loop
  let last_frame_time = performance.now()

  let draw_loop = () => {
    let data = new Object()

    // Fps Calculation
    let current_time = performance.now()
    let delta_time = (current_time - last_frame_time) / 1000
    data.fps = 1 / delta_time

    last_frame_time = performance.now()

    // Draw
    draw(data)

    // Recusive Loop (Will not Overflow)
    requestAnimationFrame(draw_loop)
  }
  draw_loop()

  // Handle Resize Events
  window.onresize = resize

  // TEST
  let header = {
    'Authorization': 'Bearer ec7bb420f9e9c5cf348b9f91fccaaad4-42b7340f40019fe3db0a08bdd73c2749',
    'Accept-Datetime-Format': 'UNIX'
  }

  let base_url = 'https://api-fxpractice.oanda.com/v3/'
  
  Api(base_url + 'accounts', header, (data) => {
    Api(base_url + 'accounts/' + data.accounts.pop().id + '/instruments', header, (data) => {
      Api(base_url + 'instruments/' + data.instruments.pop().name + '/candles?count=5000', header, (data) => {
        console.log(data)
      })
    })
  })
})
