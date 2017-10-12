
const $ = require('jquery')

module.exports = (url, header, callback) => {
  $.ajax(url, {
    headers: header
  }).done(callback)
}
