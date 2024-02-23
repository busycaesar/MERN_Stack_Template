const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const { connectMongoDB } = require("./Database");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  console.log("Received GET/ request!");
  res.status(200).json("Hello from backend!");
});

connectMongoDB()
  .then(app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!`)))
  .catch((error) => console.log(`Error while starting the server ${error}`));
