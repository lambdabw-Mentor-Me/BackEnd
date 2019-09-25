exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('questions')
    .truncate()
    .then(function () {
      return knex('questions').insert([
        { id: 1, title: 'Technology Company', question: 'What is the best way to start a technology company?', business_type: "Technology", entrepreneur_id: 1 },
        { id: 2, title: 'My New Store', question: 'How many years does it take to make a profit from a clothing store?', business_type: "Store", entrepreneur_id: 2 },
        { id: 3, title: 'Starting SAAS', question: 'I wanted to start a SAAS business, how can I start and what are some issues I will encounter?', business_type: "Technology", entrepreneur_id: 2 },
        { id: 4, title: 'Investment', question: 'I have a great idea and Im looking for investors, where should I look first?', business_type: "Investment", entrepreneur_id: 1 },
        { id: 5, title: 'Design', question: 'I am a graphic designer and I started a graphic design business, do you think this will succeed?', business_type: "Design", entrepreneur_id: 2 }
      ]);
    });
};