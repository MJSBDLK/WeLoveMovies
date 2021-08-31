function errorHandler(error, request, response, next) {
  const { status = 500, message = 'Whoops - internal server error.' } = error;
  response.status(status).json({ error: message });
}

module.exports = errorHandler;
