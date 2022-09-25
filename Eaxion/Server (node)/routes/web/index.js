var express = require("express");
var MobileDetect = require('mobile-detect');


var router = express.Router();

//TODO : Define the Other Web Routes here

router.get('/', function (req, res) {
    if (new MobileDetect(req.headers['user-agent']).mobile()) {
        // Mobile Redirect
        res.render("mobile_index");
    } 
    else {
        // Desktop Redirect
        res.render("index");
    }
});

router.get('/events', function (req, res) {
    res.render("events");

});

router.get('/aboutus', function (req, res) {
    res.render("contact");

});

router.get('/home', function (req, res) {
    res.render("index");

});





module.exports = router;