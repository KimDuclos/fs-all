const express = require("express");

const port = 5000;

const server = express();
server.use(express.json());

server.get("/hobbits", (req, res) => {
  res.send("Welcome to Hobbiton");
}); // READ data

server.post("/hobbits", (req, res) => {
  res.status(201).json({ url: "/hobbits", operation: "POST" });
}); // CREATE data

server.put("/hobbits", (req, res) => {
  res.status(200).json({ url: "/hobbits", operation: "PUT" });
}); // UPDATE data

server.delete("/hobbits", (req, res) => {
  res.sendStatus(204);
}); // DESTROYING/DELETING data

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
