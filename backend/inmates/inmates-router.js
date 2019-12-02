const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");
const restricted = require("../config/restricted");

router.get("/", restricted, (req, res) => {
  db("inmates")
    .where({ prison_id: req.decodedToken.subject })
    .then(inmates => {
      if (!inmates) {
        res.status(404).json({ error: "There are no inmates for this prison" });
      } else {
        res.status(200).json(inmates);
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The inmates for this prison could not be retrieved" });
    });
});

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;

  db("inmates")
    .where({ id, prison_id: req.decodedToken.subject })
    .first()
    .then(inmate => {
      if (inmate) {
        res.status(200).json(inmate);
      } else {
        res.status(404).json({
          error: "You cannot access the inmate with this specific id"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The inmate with the specified ID could not be retrieved."
      });
    });
});

module.exports = router;
