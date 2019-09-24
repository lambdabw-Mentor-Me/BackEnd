const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const questionsdb = require('./questions-model.js');
const authenticate = require('../auth/restricted-middleware');

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

server.get('/:entrepreneur_id', authenticate, (req, res) => {
    const { entrepreneur_id } = req.params;
    questionsdb.
        getQaEnt(entrepreneur_id)
        .then((questionsdb) => {
            res.status(201).json(questionsdb)
        }).catch((err) => {
            res.status(500).json({ err, message: "It no working" })
        });
});

server.post('/', authenticate, (req, res) => {
    const questionData = req.body;
    const entrepreneurId = req.entrepreneur.subject
    questionData.entrepreneur_id = entrepreneurId;
    questionsdb.postQa(questionData)
        .then((questionsdb) => {
            res.status(200).json(questionsdb)
        }).catch((err) => {
            res.status(500).json({ message: 'Error adding question' })
        });
});


server.put('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    questionsdb.updateQa(id, changes)
        .then((questionsdb) => {
            res.status(200).json({ message: `Question ${id} updated!` })
        }).catch((err) => {
            res.status(500).json({ message: 'Error Updating Question' })
        });
});

server.delete('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    questionsdb.removeQa(id)
        .then(questionsdb => {
            res.status(204).json({ message: `Question ${id} Deleted!` })
        }).catch((err) => {
            res.status(500).json({ message: 'Error Deleting Question' })
        });
});

module.exports = server;


