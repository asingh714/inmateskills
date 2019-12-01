const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("multer");

const db = require("../data/dbConfig.js");
const restricted = require("../auth/restricted");

const storage = require("../config/cloudConfig");
const parser = multer({ storage: storage });

const tokenService = require("./token-service.js");

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
              password: prison.password,
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
        } else {
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
    const prisons = await db("prisons");
    if (!prisons) {
      res.status(404).json({ error: "There are no prisons." });
    } else {
      res.status(200).json(prisons);
    }
  } catch (error) {
    res.status(500).json({
      error: "There was an error while retrieving prisons."
    });
  }
});

// router.post('/test', parser.single("image"), (req, res) => {
//   console.log(req.file) // to see what is returned to you
//   const image = {};
//   image.url = req.file.url;
//   image.id = req.file.public_id;
//   Image.create(image) // save image information in database
//     .then(newImage => res.json(newImage))
//     .catch(err => console.log(err));
// });

router.put("/:id", parser.single("image"), (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  // const image = {};
  // image.url = req.file.url;
  // image.id = req.file.public_id;
  // let prisonImg = Image.create(image).then(newImage => newImage)
  // prison_image: prisonImg

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
});

router.delete("/:id", (req, res) => {
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
