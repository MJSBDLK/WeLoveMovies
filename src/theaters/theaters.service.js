const knex = require('../db/connection');

function list(movieId) {
    return knex('movies_theaters as mt')
        .join('theaters as t', 'mt.movie_id', 't.movie_id')
        .select('t.*', 'mt.*')
        .where({'t.movie_id': movieId});
}

module.exports = {
    list
}