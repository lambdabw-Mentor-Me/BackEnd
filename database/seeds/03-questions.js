exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('questions')
    .truncate()
    .then(function () {
      return knex('questions').insert([
        { title: 'Help me', question: 'What is the best way?', business_type: "Technology", mentor_id: 1, entrepreneur_id: 1 }
      ]);
    });
};