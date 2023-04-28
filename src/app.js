const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    hello: "Hello World!!",
  });
});

app.use(`/.netlify/functions/app`, router);

module.exports = app;
module.exports.handler = serverless(app);
