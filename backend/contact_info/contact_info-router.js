const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");
const restricted = require("../config/restricted");

router.get("/:id/contact", restricted, (req, res) => {
  const { id } = req.params;

  db("inmates")
    .where({ id, prison_id: req.decodedToken.subject })
    .first()
    .then(inmate => {
      if (inmate) {
        db("contact_info")
          .where({ inmate_id: inmate.id })
          .then(contactInfo => {
            res.status(200).json(contactInfo);
          })
          .catch(error => {
            res
              .status(404)
              .json({
                error:
                  "There was an error while retrieving this employee information"
              });
          });
      } else {
        res.status(404).json({
          error:
            "You cannot access the employee contact information for this employee"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The inmate with the specified ID could not be retrieved"
      });
    });
});

module.exports = router;
