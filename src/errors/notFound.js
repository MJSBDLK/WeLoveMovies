function notFound(req, res, next) {
  next({ status: 404, message: `404 - not found: Path not found: ${req.originalUrl}` });
}

module.exports = notFound;
