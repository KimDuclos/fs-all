const express = require("express");

const port = 5000;

const server = express();
server.use(express.json());

server.get("/hobbits", (req, res) => {
  // read
  res.send("Welcome to Hobbiton");
});

server.post("/hobbits", (req, res) => {
  res.status(201).json({ url: "/hobbits", operation: "POST" });
}); // create

server.put("/hobbits", (req, res) => {
  res.status(200).json({ url: "/hobbits", operation: "PUT" });
}); // update/change data

server.delete("/hobbits", (req, res) => {
  res.status(204);
}); // destroy/remove data

// USERS

server.post("/users", (req, res) => {
  res.status(201).json({ url: "/users", operation: "POST" });
});

server.put("/users", (req, res) => {
  res.status(200).json({ url: "/users", operation: "PUT" });
});

server.delete("/users", (req, res) => {
  res.status(204);
});



server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
