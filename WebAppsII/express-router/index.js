const express = require("express");

const raceRoutes = require("./races/raceRoutes");
const villianRoutes = require("./villians/villianRoutes");

const server = express();

server.use("/races", raceRoutes);
server.use("/villians", villianRoutes);

server.use("/", (req, res) => {
  res.send("API up and running!");
});

server.listen(9000, () => {
  console.log("API running on port 9000");
});
