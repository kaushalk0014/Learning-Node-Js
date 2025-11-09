 
const db = require("../utils/databaseUtils");

module.exports = class Home {
  constructor(houseName, housePrice, location, rating, photoUrl) {
    this.houseName = houseName;
    this.housePrice = housePrice;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registerHome) => {
      if (this.id) {
        registerHome = registerHome.map((home) =>
          String(home.id) === String(this.id) ? this : home
        );
      } else {
        this.id = Math.floor(Math.random() * 10000 + 2).toString();
        registerHome.push(this);
      }
      const homeDataPath = path.join(rootPath, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {
        console.log("File saved successfully " + error);
      });
    });
  }

  static fetchAll() {
    return db.execute("select * from home_details");
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const filterHome = homes?.filter((home) => String(home.id) === homeId);
      callback(filterHome);
    });
  }

  static deleteById(homeId, callBack) {
    this.fetchAll((registersHomeList) => {
      const homes = registersHomeList.filter(
        (home) => String(home.id) !== String(homeId)
      );
      const homeDataPath = path.join(rootPath, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(homes), (error) => {
        console.log("File saved successfully " + error);
      });
      callBack("Home deleted successfully");
    });
  }
};
