const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  console.log("Received GET/ request!");
  res.status(200).json("Hello from backend!");
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!`));
