const express = require('express');
const router = express.Router();
const users = [];

router.get('/', (req, res) => {
  res.status(200).render('home', { pageTitle: 'Home', route: '/' });
})

router.post('/add-user', (req, res) => {
  users.push(req.body.name);
  res.redirect('/');
})

exports.router = router;
exports.users = users;