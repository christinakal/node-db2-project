const express = require("express");
const db = require("../data/dbConfig");
const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "There was an error getting cars" });
    });
});

module.exports = router;
