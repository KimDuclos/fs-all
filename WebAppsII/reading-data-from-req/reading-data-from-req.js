import "./db";

const express = require("express");

const port = 5000;

const server = express();
server.use(express.json());

server.get("/hobbits", (req, res) => {
  console.log(req.query);
  // query string parameters get added to req.query
  const sortField = req.query.sortby || "id"; // sort by the query or ID (ex: ?query=name would sort by name)
  const hobbits = [
    {
      id: 1,
      name: "Samwise Gamgee",
      funFart: "a",
    },
    {
      id: 2,
      name: "Frodd Baggins",
      funFart: "z",
    },
    {
      id: 3,
      name: "Bilbo Baggins",
      funFart: "4",
    },
  ];

  // sort
  const response = hobbits.sort((a, b) =>
    a[sortField] < b[sortField] ? -1 : 1
  );
  res.status(200).json(response);
}); // READ

//////////////////////////////////////////////

let hobbits = [
  {
    id: 1,
    name: "Bilbo Baggins",
    age: 111,
  },
  {
    id: 2,
    name: "Frodo Baggins",
    age: 33,
  },
];
let nextId = 3;

server.post("/hobbits", (req, res) => {
  console.log(req.body);
  const hobbit = req.body;
  hobbit.id = nextId++;

  hobbits.push(hobbit);

  res.status(201).json(hobbits);
}); // CREATE

server.put("/hobbits", (req, res) => {
  res.status(200).json({ url: "/hobbits", operation: "PUT" });
}); // UPDATE

server.delete("/hobbits/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  res.status(200).json({
    url: `/hobbits/${id}`, // destructure by ID
    operation: `DELETE for hobbit with id ${id}`,
  });
}); // DELETING


//////// DB.JS GET CHALLENGE ////////

const hobbitData = require("./db.js");

server.get("/hobbits", (req, res) => {
    const hobbits = hobbitData
    .where({ id: Number(id) })
    .first()
    .then(function (row) {
        res.status(200).json(row);
    })
})


server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
