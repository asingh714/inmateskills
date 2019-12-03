const express = require("express");
const router = express.Router();
const multer = require("multer");

const db = require("../data/dbConfig");
const { docStorage } = require("../config/cloudConfig");
const restricted = require("../config/restricted");
const parser = multer({ storage: docStorage });

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
        error: "The inmate with the specified ID could not be retrieved"
      });
    });
});


router.post("/", restricted, parser.fields([{name: "inmate_image", maxCount: 1}, {name: "resume", maxCount: 1}]), (req, res) => {
  const inmate = req.body;
  inmate.prison_id = req.decodedToken.subject;
  inmate.prison_name = req.decodedToken.name;
  
  if (req.files["inmate_image"]) {
    inmate.inmate_image = req.files["inmate_image"][0].url
  }

  if (req.files["resume"]) {
    inmate.resume = req.files["resume"][0].url
  } 

  if (!inmate.release_date) {
    res
      .status(400)
      .json({ error: "Please provide a release date for this inmate" });
  } else if (!inmate.availability) {
    res
      .status(400)
      .json({
        error:
          "Please provide an availability value if this inmate is available"
      });
  } 
 
    db("inmates")
    .insert(inmate)
    .then(ids => {
      const id = ids[0];
      db("inmates")
        .where({ id })
        .first()
        .then(inmate => {
          res.status(201).json(inmate);
        });
    })
    .catch(error => {
      res.status(500).json({
        error:
          "There was an error while saving the inmate profile to the database."
      });
    });
});

router.put("/:id", restricted, parser.fields([{name: "inmate_image", maxCount: 1}, {name: "resume", maxCount: 1}]), (req, res) => {
  const {id} = req.params;
  const changes = req.body;

  if (req.files["inmate_image"]) {
    changes.inmate_image = req.files["inmate_image"][0].url
  }

  if (req.files["resume"]) {
    changes.resume = req.files["resume"][0].url
  } 

  console.log(changes);
  if (!changes.release_date) {
    res
      .status(400)
      .json({ error: "Please provide a release date for this inmate" });
  } else if (!changes.availability) {
    res
      .status(400)
      .json({
        error:
          "Please provide an availability value if this inmate is available"
      });
  } else {
    db("inmates")
      .where({ id, prison_id: req.decodedToken.subject })
      .update(changes)
      .then(count => {
        if (count > 0) {
          res.status(200).json(count);
        } else {
          res.status(404).json({
            error: "You cannot access the inmate with this specific id."
          });
        }
      })
      .catch(error => {
        res
          .status(500)
          .json({ error: "The inmate profile could not be modified." });
      });
  }
})

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  db("inmates")
    .where({ id, prison_id: req.decodedToken.subject })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json(count);
      } else {
        res.status(404).json({
          error: "You cannot access the inmate with this specific id."
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The inmate could not be removed."
      });
    });
});

module.exports = router;
