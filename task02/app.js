const express = require('express')

const app = express()

app.use('/users', (req, res, next) => {
  console.log('This is user route')
  res.send('<h1>Users</h1>')
})

app.use('/', (req, res, next) => {
  console.log('This is home route')
  res.send('<h1>Home</h1>')
})

app.listen(3000)