 
const db = require("../utils/databaseUtils");

module.exports = class Home {
  constructor(houseName, housePrice, location, rating, photoUrl, description, id) {
    this.id = id;
    this.houseName = houseName;
    this.housePrice = housePrice;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  save() {
    // return db.execute(`insert into home_details  (houseName, housePrice, location, rating, photoUrl, description) 
    //   values('${this.houseName}', ${this.housePrice}, '${this.location}', ${this.rating}, '${this.photoUrl}', '${this.description}')`);

    return db.execute(`insert into home_details  (houseName, housePrice, location, rating, photoUrl, description) 
      values(?, ?, ?, ?, ?, ?)`, [this.houseName, this.housePrice, this.location, this.rating, this.photoUrl, this.description]); 
  }

  static fetchAll() {
    return db.execute("select * from home_details");
  }

  static findById(homeId) {
    return db.execute("select * from home_details where id= ?", [homeId]);
  }

  static deleteById(homeId) {
    return db.execute("delete from home_details where id = ?", [homeId]);

  }
};
