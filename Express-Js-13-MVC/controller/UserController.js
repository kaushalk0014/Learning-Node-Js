exports.loadHomePage = (req, res, next) =>{
   res.render("home", {registeredHomes: registerHome, pageTitle:'Home airbnb', currentPage:'Home'});
}