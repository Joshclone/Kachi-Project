// jshint esversion: 6
////require("dotenv").config();

const express = require("express");
const app = express();
//const userController = require("./controllers/loginController");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userRoute = require("./routes/userRoute.js");
const adminRoute = require("./routes/adminRoute.js");
const config = require("config");
const dbConfig = config.get("dbuser.dbConfig.dbName");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(setUser); 
// MIDDLEWARES
app.use("/", userRoute);
app.use("/", adminRoute);
app.get("/", (req, res, next) => {
  return res.status(200).json({ message: "Hello world!" });
  next();
});




function setUser(req, res, next)
{
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}
//IMPORT MONGOOSE-----------------------------------------------------------------

mongoose
  .connect(dbConfig)
  .then(() => console.log(`Connection to Database successful`))
  .catch((e) => console.log(e.message));
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// -----------------------------------------------------------------

