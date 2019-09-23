exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('replies')
    .truncate()
    .then(function () {
      return knex('replies').insert([
        {}
      ]);
    });
};