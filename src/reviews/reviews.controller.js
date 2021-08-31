const service = require('./reviews.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')


async function list(req, res, next) {
  const {movieId} = req.params;
  const reviews = await service.list(movieId);
  for(let review of reviews) {
    review.critic = await service.read(review.critic_id)
    // console.log(review)
  }
  res.json({ data: reviews });
}

module.exports = {
    list: asyncErrorBoundary(list)
};
