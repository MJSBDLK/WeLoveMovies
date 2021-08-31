const knex = require('../db/connection');

function list(movieId) {
  return knex('reviews as r')
    .join('critics as c', 'c.critic_id', 'r.critic_id')
    .select('r.*', 'c.*')
    .where({ 'r.movie_id': movieId });
}

module.exports = {
    list
};
