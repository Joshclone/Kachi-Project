const express = require("express");
const router = express.Router();


const loginAnRegisterController = require("../controllers/loginAnRegisterController");
router.post("/register", loginAnRegisterController.register);
router.post("/login", loginAnRegisterController.login);

module.exports = router;