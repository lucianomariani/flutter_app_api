const express = require("express");
const port = 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("morgan")("dev"));
app.get("/", (req, res) => {
  res.json({
    message: "api endpoint",
  });
});
app.listen(port, () => {
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("Express server listening on port " + port);
});
