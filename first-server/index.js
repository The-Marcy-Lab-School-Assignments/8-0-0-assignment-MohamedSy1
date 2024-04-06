const express = require("express");
const app = express();

const serveIndex = (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
};

const serveData = (req, res, next) => {
  const data = [{ Batman: "Bat mobile" }, { SuperMan: "fly" }];
  res.send(data);
};

const dynamicServe = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`Hello ${name}`);
};

app.get("/", serveIndex);
app.get("/hello", dynamicServe);
app.get("/api/data", serveData);

const PORT = 5500;
app.listen(PORT, () => {
  `Hello listening to port: ${PORT}`;
});
