// const getAddHome = (req, res, next) => {
//   res.render("registerHome", {pageTitle:'Register Home', currentPage:'AddHome'});
// };
// exports.getAddHome =getAddHome;

exports.getAddHome = (req, res, next) => {
  res.render("registerHome", {
    pageTitle: "Register Home",
    currentPage: "AddHome",
  });
};

const registerHome = [];
exports.saveHome = (req, res, next) => {
  registerHome.push(req.body);
  res.render("homeAdd", {pageTitle:'Successfully Register Home',currentPage:'AddHome'});
};
