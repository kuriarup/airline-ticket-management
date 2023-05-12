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