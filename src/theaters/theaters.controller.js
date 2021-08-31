const service = require('./theaters.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

// async function validateMovieExists(req, res, next) {}

async function list(req, res, next) {
  const {movieId} = req.params;
  const data = await service.list(movieId);
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
