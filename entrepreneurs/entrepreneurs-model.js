const db = require('../database/dbConfig.js');


module.exports = {
    add,
    find,
    findBy,
    findById,
};


function find() {
    return db('entrepreneurs').select('id', 'email', 'password');
}

function findBy(filter) {
    return db('entrepreneurs').where(filter);
}

function add(entrepreneur) {
    return db('entrepreneurs')
        .insert(entrepreneur, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function findById(id) {
    return db('entrepreneurs')
        .where({ id })
        .first();
}
