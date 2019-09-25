const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const replydb = require('./reply-model.js');
const authenticate = require('../auth/restricted-middleware');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.get('/', authenticate, (req, res) => {

    replydb.
        getOnlyReplies()
        .then(replydb => {
            res.json(replydb);
        })
        .catch(err => res.send(err));
});


server.get('/question/:question_id', authenticate, (req, res) => {
    const { question_id } = req.params;
    replydb.
        getReplies(question_id)
        .then(replydb => {
            res.json(replydb);
        })
        .catch(err => res.send(err));
});

server.get('/ment/:mentor_id', authenticate, (req, res) => {
    const { mentor_id } = req.params;
    replydb.
        getRepliesMentors(mentor_id)
        .then((replydb) => {
            res.status(201).json(replydb)
        }).catch((err) => {
            res.status(500).json({ err, message: "It no working" })
        });
});

server.post('/', authenticate, (req, res) => {
    const replyData = req.body;
    const mentorId = req.body.mentor_id;
    replyData.mentor_id = mentorId;
    replydb.postReplies(replyData)
        .then((replydb) => {
            res.status(200).json(replydb)
        }).catch((err) => {
            res.status(500).json({ message: 'Error adding reply' })
        });
});


server.put('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    replydb.updateReplies(id, changes)
        .then((replydb) => {
            res.status(200).json({ message: `Reply ${id} updated!` })
        }).catch((err) => {
            res.status(500).json({ message: 'Error Updating Reply' })
        });
});

server.delete('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    replydb.removeReplies(id)
        .then(replydb => {
            res.status(204).json({ message: `Reply ${id} Deleted!` })
        }).catch((err) => {
            res.status(500).json({ message: 'Error Deleting Reply' })
        });
});

module.exports = server;


