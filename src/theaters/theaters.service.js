const knex = require('../db/connection');

function list(movieId) {
  // console.log(`theaters.service.js - list - running...`)
    return knex('movies_theaters as mt')
        .join('theaters as t', 'mt.theater_id', 't.theater_id')
        .select('t.*', 'mt.*')
        .where({'mt.movie_id': movieId});
}

module.exports = {
    list
}