const db = require('../database/dbConfig');

module.exports = {
    getOnlyReplies,
    getReplies,
    getRepliesMentors,
    postReplies,
    updateReplies,
    removeReplies
}

function getOnlyReplies() {
    return db('replies')

}

function getReplies(question_id) {
    return db('replies')
        .innerJoin('questions', 'replies.question_id', '=', 'questions.id')
        .select('replies.id', 'replies.reply')
        .where({ question_id })
}

function getRepliesMentors(mentor_id) {
    return db('replies')
        .innerJoin('mentors', 'replies.mentor_id', '=', 'mentors.id')
        .select('replies.id', 'replies.reply')
        .where({ mentor_id })
}

function postReplies(reply) {
    return db('replies').insert(reply);
}
function updateReplies(id, changes) {
    return db('replies')
        .where({ id })
        .update(changes);
}
function removeReplies(id) {
    return db('replies')
        .where('id', id)
        .del();
}