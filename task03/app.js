const express = require('express')

const app = express()

const homeRoute = require('./routes/home')
const usersRoute = require('./routes/users')
const notFoundRoute = require('./routes/404')

app.use(usersRoute)
app.use(homeRoute)
app.use(notFoundRoute)

app.listen(3000)