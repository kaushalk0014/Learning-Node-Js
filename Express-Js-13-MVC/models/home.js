//core module
const fs = require("fs");
const path = require("path");

//local module
const rootPath = require("../utils/pathUtils");

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
      registerHome.push(this);
      const homeDataPath = path.join(rootPath, "data", "homes.json");

      fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {
        console.log("File saved successfully " + error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootPath, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      console.log("Read File ", err, data);
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback(registerHome);
      }
    });
  }
};
