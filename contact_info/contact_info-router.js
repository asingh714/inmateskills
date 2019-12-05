const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");
const restricted = require("../config/restricted");

router.get("/inmate/:id/contact", restricted, (req, res) => {
  const { id } = req.params;

  db("inmates")
    .where({ id })
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

router.post("/inmate/:id/contact", (req,res) => {
  const { id } = req.params;
  const contactInfo = req.body;

  db("inmates")
    .returning("id")
    .where({ id })
    .first()
    .then(inmate => {
      if (inmate) {
        db("contact_info")
          .insert({...contactInfo, inmate_id: inmate.id})
          .then(ids => {
            const id = ids[0]
            db("contact_info").where({id}).first()
            .then(inmate => {
              res.status(201).json(inmate);
            })
          })
      } else {
        res.status(404).json({
          error:
            "You cannot provide your contact information to this inmate"
        });
      }
    }).catch(error => {
      res.status(500).json({
        error:
          "There was an error while saving the contact information"
      });
    });
})

module.exports = router;
