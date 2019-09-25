exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('replies')
    .truncate()
    .then(function () {
      return knex('replies').insert([
        { id: 1, reply: 'Reply for question one by mentor 1', question_id: 1, mentor_id: 1 },
        { id: 2, reply: 'Reply for Question 2 by mentor 2', question_id: 2, mentor_id: 2 },
        { id: 3, reply: 'Reply for Question 3 by mentor 1', question_id: 3, mentor_id: 1 },
        { id: 4, reply: 'Reply for Question 4 by mentor 2', question_id: 4, mentor_id: 2 },
        { id: 5, reply: 'Reply for Question 5 by mentor 2', question_id: 5, mentor_id: 2 }
      ]);
    });
};