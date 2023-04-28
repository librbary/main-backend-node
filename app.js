var express = require("express");
var app = express();
module.exports = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/test_url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
