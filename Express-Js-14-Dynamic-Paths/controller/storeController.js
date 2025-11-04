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
  const homeId = req?.params?.homeId;
  Home.findById(homeId, (homeDetails) => {
    if (Array.isArray(homeDetails) && homeDetails.length === 0) {
      res.redirect("/store/home-list");
    } else {
      res.render("store/home-details", {
        home: homeDetails[0],
        pageTitle: "Home Details",
        currentPage: "home-details",
      });
    }
  });
};

exports.saveToFavouritys = (req, res, next) => {
  const { id } = req.body;
  console.log("-----", id)
  res.redirect("/store/home-list");
};
