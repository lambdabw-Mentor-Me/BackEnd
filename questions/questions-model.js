const db = require('../database/dbConfig');

module.exports = {
    getQas,
    getQaEnt,
    postQa,
    updateQa,
    removeQa
}

function getQas() {
    return db('questions')
}

function getQaEnt(entrepreneur_id) {
    return db('questions')
        .innerJoin('entrepreneurs', 'questions.entrepreneur_id', '=', 'entrepreneurs.id')
        .select('questions.id', 'questions.title', 'questions.question', 'questions.business_type', 'questions.file')
        .where({ entrepreneur_id })
}

function postQa(question) {
    return db('questions').insert(question);
}
function updateQa(id, changes) {
    return db('questions')
        .where({ id })
        .update(changes);
}
function removeQa(id) {
    return db('questions')
        .where('id', id)
        .del();
}