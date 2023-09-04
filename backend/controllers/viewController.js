exports.overview = (req, res) => {
  res.status(200).render("index");
};

exports.login = (req, res) => {
  res.status(200).render("login");
};
