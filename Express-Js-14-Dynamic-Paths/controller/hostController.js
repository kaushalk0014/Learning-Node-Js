// const getAddHome = (req, res, next) => {
//   res.render("registerHome", {pageTitle:'Register Home', currentPage:'AddHome'});
// };
// exports.getAddHome =getAddHome;

const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/register-home", {
    pageTitle: "Register Home",
    currentPage: "AddHome",
  });
};

exports.saveHome = (req, res, next) => {
  // const home = new Home(req.body.houseName,req.body.housePrice,req.body.location,req.body.rating,req.body.photoUrl)
  const { houseName, housePrice, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, housePrice, location, rating, photoUrl);
  home.save();
  res.render("host/home-add", {
    pageTitle: "Successfully Register Home",
    currentPage: "AddHome",
  });
};

exports.getHostHomeList = (req, res, next) => {
   Home.fetchAll(registersHomeList=>{
      res.render("host/host-home-list", {registeredHomes: registersHomeList, pageTitle:'Host Home List', currentPage:'host-home-list'});
   });
}


exports.getEditHome = (req, res, next)=>{

  const homeId = req.params.homeId;
  const editing = req.query.editing;

  console.log(editing)

  console.log(homeId)

  res.render("host/edit-home", {pageTitle: "Edit home", currentPage: "host-home-list"})
}

exports.updateHome = (req, res, next) =>{
  const data = req.body;
  console.log("data      "+data )
 Home.fetchAll(registersHomeList=>{
      res.render("host/host-home-list", {registeredHomes: registersHomeList, pageTitle:'Host Home List', currentPage:'host-home-list'});
   });

}