const service = require('./movies.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(req, res, next) {
    const isShowing = Boolean(req.query.is_showing)
      const data = await service.list(isShowing);
      res.json({data});
}

async function read (req, res, next) {
    // console.log(`movies.controller.read running...`);
    const {movieId} = req.params;
    // console.log(`movieId: `, movieId);
    const movie = await service.read(movieId);
    if (movie) {
        res.json({data: movie});
    }
    next({
        status: 404,
        message: `Movie cannot be found.`
    })
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: asyncErrorBoundary(read)
}