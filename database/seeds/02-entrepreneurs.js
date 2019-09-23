exports.seed = function (knex) {
  // Deletes ALL existing entries and resets ids
  return knex('entrepreneurs')
    .truncate()
    .then(function () {
      return knex('entrepreneurs').insert([
        { email: 'test@ent.com', password: 'testtest' }
      ]);
    });
};