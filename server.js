const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to HomePage");
});

app.get("/greeting/:name", function (req, res) {
  res.send("Wow! Hello there " + req.params.name);
});

app.get("/magic/:question", function (req, res) {
  const question = req.params.question;
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  const answer = responses[Math.floor(Math.random() * responses.length)];

  res.send(`<h1>${answer}</h1>`);
});

app.get("/tip/:total/:tipPercentage", function (req, res) {
  const billAmount = parseFloat(req.params.total);
  const tipPercentage = parseFloat(req.params.tipPercentage);
  const result = (billAmount * (tipPercentage / 100)).toFixed(2);
  res.send(`You should tip: ${result}`);
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
