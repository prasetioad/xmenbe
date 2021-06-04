const express = require("express");
const Route = express.Router();

const hero = require('./hero');
const skill = require('./skill')

Route.use('/hero', hero)
Route.use('/skill', skill)

module.exports = Route