exports.seed = function (knex) {
  // Deletes ALL existing entries and resets ids
  return knex('entrepreneurs')
    .truncate()
    .then(function () {
      return knex('entrepreneurs').insert([
        { email: 'test@test.com', password: '$2a$08$IFF7gxDV3Hz/tupxgDuvzel5O.aZhl.IqKduRWBaqGkJqySHIOdPi' }
      ]);
    });
};