const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("multer");


const db = require("../data/dbConfig.js");
const { imageStorage } = require("../config/cloudConfig");
const restricted = require("../config/restricted");

const tokenService = require("../config/token-service.js");
const parser = multer({ storage: imageStorage });

router.post("/register", (req, res) => {
  const prison = req.body;
  const { name, username, password } = req.body;

  if (!name) {
    res.status(400).json({
      error: "Please provide a name for your prison."
    });
  } else if (!username || username.length < 6) {
    res.status(400).json({
      error: "Please provide a username that is at least six characters."
    });
  } else if (!password || password.length < 6) {
    res.status(400).json({
      error: "Please provide a password that is at least six characters."
    });
  } else {
    const hash = bcrypt.hashSync(password, 14);
    prison.password = hash;
    db("prisons")
      .insert(prison)
      .returning("id")
      .then(ids => {
        const id = ids[0];
        db("prisons")
          .where({ id })
          .first()
          .then(prison => {
            const token = tokenService.generateToken(prison);
            res.status(201).json({
              id: prison.id,
              username: prison.username,
              name: prison.name,
              token
            });
          })
          .catch(error => {
            res.status(500).json({
              error: "There was an error while retrieving the prison data"
            });
          });
      })
      .catch(error => {
        if (db("prisons").where({ username })) {
          res.status(400).json({
            error: "This username already exists"
          });
        } else if (db("prisons").where({ name })) {
          res.status(400).json({
            error: "This prison name already exists"
          });
        }
      });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    res.status(400).json({
      error: "Please provide a username"
    });
  } else if (!password) {
    res.status(400).json({
      error: "Please provide a password"
    });
  } else {
    db("prisons")
      .returning("id")
      .where({ username })
      .first()
      .then(prison => {
        if (!prison) {
          res.status(401).json({
            error: "This username does not exist"
          });
        } else if (prison && !bcrypt.compareSync(password, prison.password)) {
          res.status(401).json({
            error: "The password is incorrect"
          });
        }
        else {
          const token = tokenService.generateToken(prison);
          res.status(200).json({ username, token });
        }
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while logging in."
        });
      });
  }
});

router.get("/", async (req, res) => {
  try {
    const prisons = await db("prisons")
    if (!prisons) {
      res.status(404).json({ error: "There are no prisons." });
    } else {
      let prisonsWOPasswords = prisons.map(prison => {
        let {id, name, username, address, city, state, zip_code, prison_info, prison_image} = prison
        return {
          id, name, username, address, city, state, zip_code, prison_info, prison_image
        }
      })
      res.status(200).json(prisonsWOPasswords);
    }
  } catch (error) {
    res.status(500).json({
      error: "There was an error while retrieving prisons."
    });
  }
});

router.put("/:id", restricted, parser.single("prison_image"), (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (req.file) {
    db("prisons")
      .where({ id })
      .update({ ...changes, prison_image: req.file.url })
      .then(count => {
        if (count > 0) {
          res.status(200).json(count);
        } else {
          res.status(404).json({
            error: "You cannot access the prison with this specific id."
          });
        }
      })
      .catch(error => {
        res.status(500).json({ error: "The prison could not be modified." });
      });
  } else {
    db("prisons")
      .where({ id })
      .update({ ...changes })
      .then(count => {
        if (count > 0) {
          res.status(200).json(count);
        } else {
          res.status(404).json({
            error: "You cannot access the prison with this specific id."
          });
        }
      })
      .catch(error => {
        res.status(500).json({ error: "The prison could not be modified." });
      });
  }
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  db("prisons")
    .where({ id })
    .first()
    .then(prison => {
      if (prison) {
        db("prisons")
          .where({ id })
          .del()
          .then(count => {
            res.status(200).json(count);
          });
      } else {
        res.status(404).json({
          error: "You cannot access the prison with this specific id."
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The prison profile could not be removed."
      });
    });
});

module.exports = router;
