const express = require('express');
const router = express.Router();
const home = require('./home');

router.get('/users', (req, res) => {
  res.status(200).render('users', { pageTitle: 'Users', usersList: home.users, route: '/users' });
})

module.exports = router;