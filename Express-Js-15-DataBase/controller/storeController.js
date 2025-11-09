const Home = require("../models/home");

const Favourite = require("../models/favourity");

exports.indexPage = (req, res, next) => {
  Home.fetchAll().then(([registersHomeList]) => {
    res.render("store/index", {
      registeredHomes: registersHomeList,
      pageTitle: "Airbnb",
      currentPage: "airbnb",
    });
  }).catch(err=>{
    console.log("Error occure while getting data from database")
  });
};

exports.getHomeList = (req, res, next) => {
  Home.fetchAll().then(([registersHomeList, fields]) => {
    res.render("store/index", {
      registeredHomes: registersHomeList,
      pageTitle: "Airbnb",
      currentPage: "airbnb",
    });
  });
};

exports.getBooking = (req, res, next) => {
  Home.fetchAll().then(([registersHomeList, fields]) => {
    res.render("store/index", {
      registeredHomes: registersHomeList,
      pageTitle: "Airbnb",
      currentPage: "airbnb",
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
  const favourity = new Favourite(id);
  favourity.addToFavourity(favourity, (resData) => {
    console.log(resData);
  });
  res.redirect("/store/home-list");
};

exports.getFavourityList = (req, res, next) => {
  Favourite.getFavourityList((favourityList) => {
    Home.fetchAll().then(([registersHomeList]) => {
      const favourityIds = favourityList.map((item) => String(item.id));

      const matchedHomes = registersHomeList.filter((home) =>
        favourityIds.includes(String(home.id))
      );

      res.render("store/favourite-list", {
        registeredHomes: matchedHomes,
        pageTitle: "My Facourity",
        currentPage: "My-Facourityes",
      });
    });
  });
};

exports.doUnFavouritys = (req, res, next) => {
  const homeId = req.params?.homeId;

  Favourite.getFavourityList((favourityList) => {
    Home.fetchAll((registersHomeList) => {
      //removing matching by home id
      const updatedFavourityId = favourityList.filter(
        (item) => String(item.id) !== String(homeId)
      );

      Favourite.removedById(updatedFavourityId, (success) => {
        if (success) {
          const favourityIds = updatedFavourityId?.map((item) =>
            String(item.id)
          );

          const matchedHomes = registersHomeList.filter((home) =>
            favourityIds.includes(String(home.id))
          );
          res.render("store/favourite-list", {
            registeredHomes: matchedHomes,
            pageTitle: "My Facourity",
            currentPage: "My-Facourityes",
          });
        }
      });
    });
  });
};
