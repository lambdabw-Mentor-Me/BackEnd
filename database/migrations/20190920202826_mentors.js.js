exports.up = function (knex) {
    return knex.schema.createTable('mentors', users => {
        mentors.increments();

        mentors
            .string('email', 128)
            .notNullable()
            .unique();
        mentors.string('password', 128).notNullable();
    });

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};