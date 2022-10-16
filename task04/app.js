const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/users', (req, res) => {
  res.status(200).render('users', { pageTitle: 'Users' , usersList: homeRoute.users });
})

app.use(homeRoute.router);
app.use(usersRoute);
app.use((req, res) => {
  res.render('404');
})

app.listen(3000);