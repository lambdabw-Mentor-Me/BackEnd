const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const session = require('express-session'); // <<<<<<<<<<<<<<<<<<<<<
const KnexSessionStore = require('connect-session-knex')(session); // gotcha
const jwt = require('jsonwebtoken');


const entrepreneurs = require('./entrepreneurs-model.js');
const restricted = require('../auth/restricted-middleware.js');
const dbConnection = require('../database/dbConfig.js');
const secrets = require('../config/secret.js');

const server = express();

const sessionConfig = {
    name: 'mentorme', // would name the cookie sid by default
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
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig)); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


server.post('/register', (req, res) => {
    let { email, password } = req.body;

    const hash = bcrypt.hashSync(password, 8); // it's 2 ^ 8, not 8 rounds

    entrepreneurs.add({ email, password: hash })
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});

// server.post('/login', (req, res) => {
//     let { email, password } = req.body;

//     entrepreneurs.findBy({ email })
//         .first()
//         .then(entrepreneur => {
//             if (entrepreneur && bcrypt.compareSync(password, entrepreneur.password)) {
//                 const token = generateToken(entrepreneur);

//                 req.session.entrepreneur = entrepreneur; // <<<<<<<<<<<<<<<
//                 res.status(200).json({ message: `Welcome ${entrepreneur.email}!`, token });
//             } else {
//                 res.status(401).json({ message: 'You cannot pass!' });
//             }
//         })
//         .catch(error => {
//             res.status(500).json(error);
//         });
// });


server.post('/login', (req, res) => {
    let { email, password } = req.body;

    entrepreneurs.findBy({ email })
        .first()
        .then(entrepreneur => {

            if (entrepreneur && bcrypt.compareSync(password, entrepreneur.password)) {
                const token = getJwt(entrepreneur);
                console.log(getJwt(entrepreneur));
                let id = entrepreneur.id
                res.status(200).json({ message: `Welcome ${entrepreneur.email}!`, token, id });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});



function getJwt(entrepreneur) {
    const payload = {
        subject: entrepreneur.id,
        email: entrepreneur.email,
        jwtid: 1,
    };
    const options = {
        expiresIn: '8h',
    }
    return jwt.sign(payload, secrets.jwtSecret, options);
}


server.get('/all', restricted, (req, res) => {
    entrepreneurs.find()
        .then(entrepreneurs => {
            res.json(entrepreneurs);
        })
        .catch(err => res.send(err));
});

server.get('/hash', (req, res) => {
    const name = req.query.name;

    // hash the name
    const hash = bcrypt.hashSync(name, 8); // use bcryptjs to hash the name
    res.send(`the hash for ${name} is ${hash}`);
});

server.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(error => {
            if (error) {
                res.status(500).json({
                    message:
                        'you can check out anytime you like, but you can never leave',
                });
            } else {
                res.status(200).json({ message: 'Hey, Bye, come back soon!' });
            }
        });
    } else {
        res.status(200).json({ message: 'already logged out' });
    }
});

module.exports = server;


