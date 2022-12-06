const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../../config");

class Middleware {
  constructor(response) {
    this.response = response;
  }

  authMiddleware = (req, res, next) => {
    let token = req.headers.token || null;
    try {
      if (!token) {
        this.response.error(res, 401, "Please login first", null);
        return;
      }

      const decoded = jwt.verify(token, JWT_SECRET_KEY);
      req.user = decoded;

      return next();
    } catch (error) {
      return next(error);
    }
  };

  errorHandler = (err, req, res, next) => {
    this.response.error(res, err.statusCode || 500, "Terjadi kesalahan", err);
  };

  notFoundHandler = (req, res, next) => {
    this.response.error(res, 404, "API tidak ditemukan", null);
  };
}

module.exports = Middleware;
