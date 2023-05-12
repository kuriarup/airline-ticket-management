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