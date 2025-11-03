const Home = require("../models/home");

exports.indexPage = (req, res, next) => {
  Home.fetchAll((registersHomeList) => {
    res.render("store/index", {
      registeredHomes: registersHomeList,
      pageTitle: "Airbnb",
      currentPage: "airbnb",
    });
  });
};

exports.getHomeList = (req, res, next) => {
  Home.fetchAll((registersHomeList) => {
    res.render("store/home-list", {
      registeredHomes: registersHomeList,
      pageTitle: "Home List",
      currentPage: "home-List",
    });
  });
};

exports.getBooking = (req, res, next) => {
  Home.fetchAll((registersHomeList) => {
    res.render("store/bookings", {
      registeredHomes: registersHomeList,
      pageTitle: "My Booking",
      currentPage: "my-Booking",
    });
  });
};

exports.getFavourityList = (req, res, next) => {
  Home.fetchAll((registersHomeList) => {
    res.render("store/favourite-list", {
      registeredHomes: registersHomeList,
      pageTitle: "My Facourity",
      currentPage: "My-Facourityes",
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  //console.log(req);
  const homeId = req?.params?.homeId;
  
  Home.findById(homeId, homeDetails=> {

    console.log("----------------", homeDetails)

    res.render("store/home-details", {
      registeredHomes: homeDetails,
      pageTitle: "Home Details",
      currentPage: "home-details",
    });
  });
};
