const service = require('./movies.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(req, res, next) {
    const data = await service.list();
    res.json({data});
}

async function read (req, res, next) {
    const {movieId} = req.params;
    const movie = await service.read(movieId);
    if (movie) {
        res.locals.movie = movie;
        return next();
    }
    next({
        status: 404,
        message: `Movie cannot be found.`
    })
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(validateMovieExists), asyncErrorBoundary(read)]
}