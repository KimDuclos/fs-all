const express = require("express");
const path = require("path");

const server = express();

server.get("/download", (req, res, next) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath, (err) => {
    // if there is an error the callback function will get an error as it's first argument
    if (err) {
      // we could handle the error here or pass it down to error-handling middleware like so:
      next(err); // call the next error-handling middleware in the queue
    } else {
      console.log("File sent successfully");
    }
  });
});

server.use((err, req, res, next) => {
  // err handling middle ware, takes in ERROR - error object from send will become arg here
  console.error(err);
  res
    .status(500)
    .json({ message: "There was an error performing the required operation" });
});

server.listen(5000, () => {
  console.log("server listening on 5000");
});
