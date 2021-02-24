const express = require('express');

const hostname = '0.0.0.0';
const port = 3000;

const server = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinode');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

const postRoute = require('./routes/postRoute');
postRoute(server);

const commentRoute = require('./routes/commentRoute');
commentRoute(server);

const userRoute = require('./routes/userRoute');
userRoute(server);

server.listen(port, hostname);