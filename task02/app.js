const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('Running server...')
  res.send('<h1>Home</h1>')
  next()
})

app.listen(3000)