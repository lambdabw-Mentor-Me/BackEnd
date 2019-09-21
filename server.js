const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const authenticate = require('../auth/authenticate-middleware.js');
const mentorsRouter = require('../mentors/mentors-router.js');
const entRouter = require('../entrepreneurs/entrepreneurs-router.js');
const questionsRouter = require('../questions/questions-router.js');
const dbConnection = require('../database/dbConfig.js');

const server = express();


const sessionConfig = {
    name: 'abdiwali', // would name the cookie sid by default
    secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe',
    cookie: {
        maxAge: 1000 * 60 * 60, // in milliseconds
        secure: false, // true means only send cookie over https
        httpOnly: true, // true means JS has no access to the cookie
    },
    resave: false,
    saveUninitialized: true, // GDPR compliance
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: 'knexsessions',
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 30, // clean out expired session data
    }),
};


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/mentors', mentorsRouter);
server.use('/api/entrepreneurs', entRouter);
server.use('/api/questions', authenticate, questionsRouter);

module.exports = server;
