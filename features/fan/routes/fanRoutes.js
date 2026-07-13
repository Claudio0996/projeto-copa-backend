const express = require("express");
const router = express.Router();

const fanController = require("../controller/fanController");
router.get("/list", fanController.findAllFans);

module.exports = router;
