const service = require('./theaters.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

// async function validateMovieExists(req, res, next) {}

async function list(req, res, next) {
  const { movieId } = req.params;
  if (movieId) {
    const data = await service.list(movieId);
    res.json({ data });
  }
  const theaters = await service.list();
  for(let t of theaters) {
    t.movies = await service.listMovies(t.theater_id)
  }
  // console.log(`theaters.controller.js - theaters: `, theaters)
  res.json({data: theaters});
}

module.exports = {
  list: asyncErrorBoundary(list),
};
