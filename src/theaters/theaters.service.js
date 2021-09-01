const knex = require('../db/connection');

function list(movieId = 0) {
  // console.log(`theaters.service.js - list - running...`)
  if (movieId) {
    return knex('movies_theaters as mt')
      .join('theaters as t', 'mt.theater_id', 't.theater_id')
      .select('t.*', 'mt.*')
      .where({ 'mt.movie_id': movieId });
  }
  return knex('theaters as t')
    .join('movies_theaters as mt', 't.theater_id', 'mt.theater_id')
    .select('t.*')
    .distinct();
}

function listMovies(theaterId) {
  return knex('movies as m')
    .join('movies_theaters as mt', 'm.movie_id', 'mt.movie_id')
    .select('m.*', 'mt.*')
    .where({'mt.theater_id': theaterId});
}

module.exports = {
  list,
  listMovies
};
