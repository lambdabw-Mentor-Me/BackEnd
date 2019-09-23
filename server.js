const express = require('express');
const helmet = require('helmet');

// const authenticate = require('./auth/restricted-middleware');
const mentorsRouter = require('./mentors/mentors-router.js');
const entRouter = require('./entrepreneurs/entrepreneurs-router.js');
// const questionsRouter = require('./questions/questions-router.js');
// const dbConnection = require('./database/dbConfig');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/ment', mentorsRouter);
server.use('/api/ent', entRouter);
// server.use('/api/questions', authenticate, questionsRouter);

module.exports = server;
