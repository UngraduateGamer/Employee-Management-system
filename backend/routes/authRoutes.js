const express = require("express");
const router = express.Router();
const {testing} = require("../controllers/authController");

router.get("/testing",testing);

module.exports = router;