const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const questionsdb = require('./questions-model.js');
const authenticate = require('../auth/restricted-middleware');
const authenticateQA = require('../auth/restrictedqa-middleware');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.get('/', authenticate, (req, res) => {
    questionsdb.getQas()
        .then(questionsdb => {
            res.json(questionsdb);
        })
        .catch(err => res.send(err));
});

server.get('/:entrepreneur_id', authenticateQA, (req, res) => {
    const { entrepreneur_id } = req.params;
    questionsdb.
        getQaEnt(entrepreneur_id)
        .then((questionsdb) => {
            res.status(201).json(questionsdb)
        }).catch((err) => {
            res.status(500).json({ err, message: "It no working" })
        });
});


module.exports = server;


