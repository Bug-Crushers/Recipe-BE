const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv')
const connectBD = require('./config/database')


// load environment variables
dotenv.config({ path: './config/config.env' })

// connect to database
connectBD()

const server = express();

//Load Routes
const users = require('./routes/user');

const PORT = process.env.PORT || 8000;

server.use(express.json());

// parse application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: false }));

server.use(cors());
server.use(helmet());


//Use Routes
server.use('/users', users);


server.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});

// handle unhandled promise rejections
process.on('UnhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)

  // Close server and exit process
  server.close(() => process.exit(1))
})