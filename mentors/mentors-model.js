const db = require('../database/dbConfig.js');


module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('mentors').select('id', 'email', 'password');
}

function findBy(filter) {
    return db('mentors').where(filter);
}

function add(user) {
    return db('mentors')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function findById(id) {
    return db('mentors')
        .where({ id })
        .first();
}
