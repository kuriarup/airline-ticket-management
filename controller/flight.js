const _ = require("lodash");
const BookingDetail = require("../models/bookingDetail");
const airportsList = require("../utils/airportsList");
const {
  generateDetails,
  getCity,
  sorting,
} = require("../utils/helperFunctions");