const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ api: 'family secret' });
  // res.json('family secret')
});


module.exports = router;