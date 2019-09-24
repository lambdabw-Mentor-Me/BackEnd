
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('mentors', tbl => {
            tbl.increments();
            tbl.string('email', 255).notNullable().unique();
            tbl.varchar('password', 128).notNullable();
        })
        .createTable('entrepreneurs', tbl => {
            tbl.increments();
            tbl.string('email', 255).notNullable().unique();
            tbl.varchar('password', 128).notNullable();
        })
        .createTable('questions', tbl => {
            tbl.increments();
            tbl.string('title', 255).notNullable();
            tbl.string('question', 255).notNullable();
            tbl.string('business_type', 255).notNullable();
            tbl.string('file', 255);
            // Foreign Key
            tbl
                .integer('entrepreneur_id')
                .unsigned()
                .references('id')
                .inTable('entrepreneurs')
                .onDelete('CASCADE') // if the PK record is deleted
                .onUpdate('CASCADE'); // if the PK value updates
        })
        .createTable('replies', tbl => {
            tbl.increments();
            tbl.string('reply', 255);
            // Foreign Key
            tbl
                .integer('question_id')
                .unsigned()
                .references('id')
                .inTable('questions')
                .onDelete('CASCADE') // if the PK record is deleted
                .onUpdate('CASCADE'); // if the PK value updates
        })

};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('questions')
        .dropTableIfExists('replies')
        .dropTableIfExists('entrepreneurs')
        .dropTableIfExists('mentors');
};
