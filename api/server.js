const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();


//db config
const db = require('../config/database');

mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.log(err));


server.use(express.json());

// parse application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: false }));

server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
  res.json('family secret')
});

module.exports = server;