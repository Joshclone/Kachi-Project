const express = require("express");
const router = express.Router();


const admin = require ("../controllers/userController");

router.get("/admin/users", admin.getAllUser);
router.get("/admin/:id",  admin.getUserbyId);
module.exports = router;