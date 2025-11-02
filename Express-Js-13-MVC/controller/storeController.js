
const Home = require("../models/home");
const registerHome = require("./homeController");

exports.loadHomePage = (req, res, next) =>{

    Home.fetchAll(registersHomeList=>{
      res.render("store/home-list", {registeredHomes: registersHomeList, pageTitle:'Home airbnb', currentPage:'Home'});
   });

  // console.log(registersHomeList);
   //console.log("-------------------------------");
}

exports.getBooking =(req, res, next)=>{
   Home.fetchAll(registersHomeList=>{
      res.render("store/bookings", {registeredHomes: registersHomeList, pageTitle:'My Booking', currentPage:'Booking'});
   });
}