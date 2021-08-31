const knex = require('../db/connection');

function list(isShowing) {
  if (isShowing) {
    return knex('movies as m')
      .join('movies_theaters as mt', 'm.movie_id', 'mt.movie_id')
      .select('m.*')
      .where({ 'mt.is_showing': true })
      .distinct();
  }
  return knex('movies').select('*');
}

function read(movieId) {
  console.log(`movies service read running`)
  return knex('movies')
    .select('*')
    .where({ movie_id: movieId })
    .first();
}

module.exports = {
    list,
    read
};
