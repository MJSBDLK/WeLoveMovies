// const { destroy } = require('../db/connection');
const knex = require('../db/connection');

function list(movieId) {
  return knex('reviews as r')
    .join('critics as c', 'c.critic_id', 'r.critic_id')
    .select('r.*', 'c.*')
    .where({ 'r.movie_id': movieId });
}

function readCritic(criticId) {
  return knex('critics').select('*').where({ critic_id: criticId }).first();
}

function readReview(reviewId) {
  return knex('reviews').select('*').where({ review_id: reviewId }).first();
}

function destroy(reviewId) {
  // add reviewId in the table migration
  return knex('reviews').where({ review_id: reviewId }).del();
}

function update(updatedReview) {
  return knex('reviews')
    .select('*')
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview, '*')
    .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  list,
  readCritic,
  readReview,
  delete: destroy,
  update
};
