const express = require("express");
const app = express();

/* FEEDBACK: Nice! */
const serveIndex = (req, res, next) => res.sendFile(__dirname + "/index.html");
const serveAbout = (req, res, next) => {
  res.send("<h1>About</h1>");
};

/* FEEDBACK: Cool! */
const serveHello = (req, res, next) => {
  const name = req.query.name || "world";
  res.send(`<h1>Hello ${name}</h1>`);
}

/* FEEDBACK: You're missing curly braces below. The array only has one object
when I think you meant to have two? */
const serveFood = (req, res, next) => {
  const food = [{ food: 'spaghetti', food: 'steak' }]
  res.send(food)
}

/* FEEDBACK: You're missing curly braces below. The array only has one object
when I think you meant to have two? */
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

/* FEEDBACK: use console.log to print the message you wrote */
app.listen(PORT, () => {
  `Hello listening to port: ${PORT}`;
});
