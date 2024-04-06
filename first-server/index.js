const express = require("express");
const app = express();

const serveIndex = (req, res, next) => res.sendFile(__dirname + "/index.html");
const serveAbout = (req, res, next) => {
  res.send("<h1>About</h1>");
};

const serveHello = (req, res, next) => {
  const name = req.query.name || "world";
  res.send(`<h1>Hello ${name}</h1>`);
}

const serveFood = (req, res, next) => {
    const food = [{ food: 'spaghetti', food: 'steak'}]
    res.send(food)
}

const serveFriends = (req, res, next) => {
    const friends = [{ name: 'Bauze', name: 'El' }]
    res.send(friends)
}

app.get('/', serveIndex);
app.get('/about', serveAbout);
app.get('/hello', serveHello);
app.get('/api/food', serveFood);
app.get('/api/friends', serveFriends);

const PORT = 5500;
app.listen(PORT, () => {
  `Hello listening to port: ${PORT}`;
});
