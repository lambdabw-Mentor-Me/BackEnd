exports.seed = function (knex) {
  // Deletes ALL existing entries and resets ids
  return knex('entrepreneurs')
    .truncate()
    .then(function () {
      return knex('entrepreneurs').insert([
        { id: 1, email: 'test@test.com', password: '$2a$08$IFF7gxDV3Hz/tupxgDuvzel5O.aZhl.IqKduRWBaqGkJqySHIOdPi' },
        { id: 2, email: 'ent2@ent.com', password: '$2a$08$vZ4W4l921to1UZpNXqtCQujjmXbaPsufV0ERSfafqZtUsNWyksA8W' }
      ]);
    });
};