const _ = require("lodash");
const BookingDetail = require("../models/bookingDetail");
const airportsList = require("../utils/airportsList");
const {
  generateDetails,
  getCity,
  sorting,
} = require("../utils/helperFunctions");
// render search for flights page
module.exports.index = (req, res) => {
  const airports = airportsList.airports;
  res.render("flights/index", { airports });
};
// search flights according to the given params
module.exports.findFlights = (req, res) => {
  const { from, to, date, passengerCount, group } = req.body;
  req.session.details = generateDetails(
    from.toUpperCase(),
    to.toUpperCase(),
    date,
    parseInt(passengerCount),
    group
  );
  res.redirect("/search");
};
// display flights according to the given paramters
module.exports.renderSearch = (req, res) => {
    if (!req.session.details) return res.redirect("/");
    let details = req.session.details;
    details = sorting(details, req.query.sortby);
    res.render("flights/search", { details });
  };
  // store sessions according to the given paramters
module.exports.storeFlightDetails = (req, res) => {
  req.session.detail = JSON.parse(req.body.detail);
  res.redirect("/review");
};
// render ticket details review page
module.exports.renderReview = (req, res) => {
    if (!req.session.detail) return res.redirect("/search");
    const detail = req.session.detail;
    res.render("flights/review", { detail });
  };