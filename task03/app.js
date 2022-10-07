const express = require('express')

const app = express()

const homeRoute = require('./routes/home')

app.use(homeRoute)

app.listen(3000)