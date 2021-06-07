const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

app.use(cors());
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
  console.log("...");
  console.log("...");
  console.log("...");
  console.log("Express server listening on port " + port);
});

const productsRouter = require("./routes/products");

app.use("/products", productsRouter);
