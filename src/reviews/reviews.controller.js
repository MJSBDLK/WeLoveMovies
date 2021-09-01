const service = require('./reviews.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(req, res, next) {
  const { movieId } = req.params;
  const reviews = await service.list(movieId);
  for (let review of reviews) {
    review.critic = await service.readCritic(review.critic_id);
    // console.log(review)
  }
  res.json({ data: reviews });
}

async function destroy(req, res, next) {
const {reviewId} = req.params
  const review = await service.readReview(reviewId);
  if (review) {
    await service.delete(reviewId);
    res.sendStatus(204);
  }
  next({
    status: 404,
    message: `n-naw`
  })
}

module.exports = {
  list: asyncErrorBoundary(list),
  delete: asyncErrorBoundary(destroy),
};
