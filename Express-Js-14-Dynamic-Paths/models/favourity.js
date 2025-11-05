const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/pathUtils");

// below functoin tacking param like
// rootDir: is a path of file where it is
// data: is here folder name
// favourrity.json: is a file name
const favourityData = path.join(rootDir, "data", "favourity.json");

module.exports = class Favourite {
  constructor(id) {
    this.id = id;
  }

  addToFavourity(favourity, callback) {
    //here data is callback value
    Favourite.getFavourityList((data) => {
      const filterFavourity = data?.filter((home) => home.id === favourity.id);
      if (filterFavourity.length === 0) {
        data.push(favourity);
        fs.writeFile(favourityData, JSON.stringify(data), (error) => {
          callback("data save in favourity list");
        });
      }
    });
  }

  static getFavourityList(callback) {
    fs.readFile(favourityData, (err, data) => {
      if (!err) {
        try {
          callback(JSON.parse(data));
        } catch (parseErr) {
          callback([]); // fallback if JSON is invalid
        }
      } else {
        callback([]); // fallback if file read fails
      }
    });
  }
};
