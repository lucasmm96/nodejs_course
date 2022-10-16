const express = require('express');
const app = express();

app.set('view engine', 'pug')
app.set('views', 'views')

app.get('/', (req, res) => {
  res.status(200).render('home', { pageTitle: 'Home' })
})

app.listen(3000)