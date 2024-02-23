const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  console.log("Received GET/ request!");
  res.status(200).json("Hello from backend!");
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!`));
