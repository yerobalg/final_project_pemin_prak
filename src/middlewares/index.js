class Middleware {
  constructor(response) {
    this.response = response;
  }

  // TODO: add authorization middleware

  errorHandler = (err, req, res, next) => {
    this.response.error(
      res,
      err.statusCode || 500,
      "Terjadi kesalahan",
      err || null
    );
  };

  notFoundHandler = (req, res, next) => {
    this.response.error(res, 404, "API tidak ditemukan", null);
  };
}

module.exports = Middleware;
