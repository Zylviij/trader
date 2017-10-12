
const express = require('express')
const app = express()

const fs = require('fs')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {})
})

const port = 3000
app.listen(port, () => {
  console.log('Server started on http://localhost:' + port + '/')
})
