exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('mentors')
    .truncate()
    .then(function () {
      return knex('mentors').insert([
        { id: 1, email: 'ment@ment.com', password: '$2a$08$ybEbfqlQBsUGDYtcoX7Udesth5pQxgBi8Nw9lkhrdmsAisBvQxx2u' }, // password: 123456
        { id: 2, email: 'ment2@ment.com', password: '$2a$08$.Wjq57iviL1trqE5HKYBqefk96n224VU7XLogHAyz3i3PV2nHwKue' } // password: 1234567
      ]);
    });
};