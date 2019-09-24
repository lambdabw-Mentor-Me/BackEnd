exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('questions')
    .truncate()
    .then(function () {
      return knex('questions').insert([
        { id: 1, title: 'Technology Company', question: 'What is the best way to start a technology company?', business_type: "Technology", entrepreneur_id: 1 },
        { id: 2, title: 'My New Store', question: 'How many years does it take to make a profit from a clothing store?', business_type: "Store", entrepreneur_id: 2 }
      ]);
    });
};