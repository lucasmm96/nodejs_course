const express = require('express')

const app = express()

app.use('/users', (req, res, next) => {
  console.log('middleware /users');
  res.send('<h1>this is users</h1>')
  next()
})

app.use('/', (req, res, next) => {
  console.log('middleware /');
  res.send('<h1>this is home</h1>')
})

app.listen(3000)