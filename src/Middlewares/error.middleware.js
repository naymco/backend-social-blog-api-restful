module.exports = (req, res, next) => {
  const httpStatus = error.status || 500;

  return res.status(httpStatus).send({
    status: httpStatus,
    message: error.message || "Internal server error"
  });
};
