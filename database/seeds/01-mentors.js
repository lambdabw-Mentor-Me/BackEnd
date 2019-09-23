exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('mentors')
    .truncate()
    .then(function () {
      return knex('mentors').insert([
        { email: 'test@mentor.com', password: 'testtest' }
      ]);
    });
};