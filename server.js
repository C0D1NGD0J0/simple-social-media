require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = (process.env.PORT || 3000);
const app = express();

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Database Connection
require('./app/Database');
// Models
require('./app/Models/post');

// Routes
app.use('/api', require('./app/Routes/post'));

// Error Handling


// Initialize Server
app.listen(PORT, (err) =>{
	console.log(`Server is live on port ${PORT}`);
});