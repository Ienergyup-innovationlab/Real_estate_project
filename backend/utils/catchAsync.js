//Instead of using Async functions everywhere, we use this to refactor
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
