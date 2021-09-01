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
  const { reviewId } = req.params;
  const review = await service.readReview(reviewId);
  if (review) {
    await service.delete(reviewId);
    res.sendStatus(204);
  }
  next({
    status: 404,
    message: `n-naw`,
  });
}

async function update(req, res, next) {
  const {reviewId} = req.params;
  const reviewUpdates = req.body.data;
  // console.log(`reviewUpdates: `, reviewUpdates);
  const foundReview = await service.readReview(reviewId);
  // console.log(`foundReview: `, foundReview);
  if(foundReview) {
    const updatedReview = foundReview;
    // console.log(`req.body.data `, req.body.data);
    // console.log(`typeof reviewUpdates:`, typeof reviewUpdates)
    for(let u in reviewUpdates) {
      foundReview[u] = reviewUpdates[u];
    }
    await service.update(updatedReview);
    updatedReview.critic = await service.readCritic(foundReview.critic_id);
    // console.log(`updatedReview: `, updatedReview);
    res.json({data: updatedReview});
  }
  next({
    status: 404,
    message: `Review ${reviewId} cannot be found.`
  })
}

module.exports = {
  list: asyncErrorBoundary(list),
  delete: asyncErrorBoundary(destroy),
  update: asyncErrorBoundary(update),
};
