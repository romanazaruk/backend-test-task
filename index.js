const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Main Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Test, OK");
});

// All undefined routes
app.use((req, res) => {
  res.status(404).send("Sorry, route not found :( ");
});

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  console.log(err);

  res.send("500 Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Node server started on port: ${PORT}`);
});
