class Response {
  success = (res, code, message, data) => {
    return res.status(code).json({
      message,
      isSuccess: true,
      data,
    });
  };

  error = (res, code, message, data) => {
    return res.status(code).json({
      message,
      isSuccess: false,
      data,
    });
  };
}

module.exports = Response;
