const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const UserRoutes = require("./routes/UserRoutes");

let bodyParser = require("body-parser");

const app = express();

dotenv.config();
mongoose.connect(
  process.env.MONGODB_CONFIG,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected!!!");
  }
);

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use("/user", UserRoutes);

app.listen(PORT, () => {
  console.log(`Connect success on ${PORT} !!!`);
});
