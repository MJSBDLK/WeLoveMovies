const knex = require('../db/connection');

function list(movieId) {
  return knex('reviews as r')
    .join('critics as c', 'c.critic_id', 'r.critic_id')
    .select('r.*', 'c.*')
    .where({ 'r.movie_id': movieId });
}

function read(criticId) {
  return knex('critics').select('*').where({critic_id: criticId}).first();
}

module.exports = {
    list,
    read
};
