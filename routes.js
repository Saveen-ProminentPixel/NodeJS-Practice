const path = require("path");

const express = require("express");

const controller = require("./controller");

const router = express.Router();

router.get("/", controller.getEmployees);

module.exports = router;
