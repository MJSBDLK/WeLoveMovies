const service = require('./reviews.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')


async function list(req, res, next) {
  res.json({ data: await service.list(movieId) });
}

module.exports = {
    list: asyncErrorBoundary(list)
};
