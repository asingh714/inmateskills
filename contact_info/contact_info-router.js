const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");
const restricted = require("../config/restricted");

router.get("/:prisonId/inmate/:inmateId/contact", restricted, (req, res) => {
  const { prisonId, inmateId } = req.params;

  db("contact_info")
    .where({ prison_id: prisonId, inmate_id: inmateId })
    .then(response => {
      if (!response) {
        res
          .status(404)
          .json({ error: "There is no contact information for this inmate" });
      } else {
        res.status(200).json(response);
      }
    })

    .catch(error => {
      res.status(500).json({
        error: "The inmate with the specified ID could not be retrieved"
      });
    });
});

router.post("/:prisonId/inmate/:inmateId/contact", (req, res) => {
  const { prisonId, inmateId } = req.params;
  const contactInfo = req.body;

  db("inmates")
    .where({ prison_id: prisonId, id: inmateId })
    .first()
    .then(inmate => {
      if (inmate) {
        db("contact_info")
          .insert({ ...contactInfo, inmate_id: inmate.id, prison_id: inmate.prison_id })
          .returning("id")
          .then(ids => {
            const id = ids[0];
            db("contact_info")
              .where({ id })
              .first()
              .then(contactor => {
                res.status(201).json(contactor);
              });
          });
      } else {
        res.status(404).json({
          error: "You cannot provide your contact information to this inmate"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error while saving the contact information"
      });
    });
});

module.exports = router;
