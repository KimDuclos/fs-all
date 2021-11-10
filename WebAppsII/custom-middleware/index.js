const express = require("express");

const port = 9000;

const server = express();
server.use(express.json());

function atGate(req, res, next) {
  console.log("At the gate, about to be eaten");

  next();
}

server.use(atGate);

function auth(req, res, next) {
  if (req.url === "/mellon") {
    next();
  } else {
    res.send("You shall not pass!");
  }
}

server.get("/mellon", auth, (req, res) => {
  console.log("Gate opening...");
  console.log("Inside and safe");
  res.send("Welcome Traveler!");
});

//////// CHALLENGE ////////

function auth(req, res, next) {
  if (req.url === "/balance") {
    next();
  } else {
    res.send(403);
  }
}

server.get("/balance", auth, (req, res) => {
  res.send("Balance is key; making things even is the secret to success.");
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
