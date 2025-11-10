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
  const { houseName, housePrice, location, rating, photoUrl, description } =
    req.body;
  const home = new Home(
    houseName,
    housePrice,
    location,
    rating,
    photoUrl,
    description
  );

  home.save();
  res.render("host/home-add", {
    pageTitle: "Successfully Register Home",
    currentPage: "AddHome",
  });
};

exports.getHostHomeList = (req, res, next) => {
  Home.fetchAll((registersHomeList) => {
    res.render("host/host-home-list", {
      registeredHomes: registersHomeList,
      pageTitle: "Host Home List",
      currentPage: "host-home-list",
    });
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById().then(([home])=>{
     try {
      //const home = homes[0];
      res.render("host/edit-home", {
        pageTitle: "Edit home",
        currentPage: "host-home-list",
        isEditing: editing,
        registeredHome: home,
      });
    } catch (err) {
      console.log("Home not found using home id: " + homeId);
    }
  }).catch(err=>{   console.log("Home not found using home id: " + err);
  });
};

exports.updateHome = (req, res, next) => {
  const { houseName, housePrice, location, rating, photoUrl, description, id } =
    req.body;
  const home = new Home(
    id,
    houseName,
    housePrice,
    location,
    rating,
    photoUrl,
    description,
    id
  );
  home.id = id;
  home.save();
  res.redirect("/host/home-list");
};

exports.deleteHostHomeById = (req, res) => {
  const { homeId } = req.body;

  Home.deleteById().then(([result])=>{
    console.log("Home deleted successfully by id : ",homeId);
    res.redirect("/host/home-list");
  }).catch(err=>{
    console.log("Error occure while deteleing home id is : ",homeId, err);
  });
};
