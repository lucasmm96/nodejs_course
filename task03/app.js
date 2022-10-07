const express = require('express')

const app = express()

const homeRoute = require('./routes/home')
const usersRoute = require('./routes/users')

app.use(usersRoute)
app.use(homeRoute)

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)