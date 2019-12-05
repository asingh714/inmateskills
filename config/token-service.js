const jwt = require("jsonwebtoken")

const secrets = require("../api/secrets");


const generateToken = (prison) => {
  const payload = {
    subject: prison.id,
    username: prison.username,
    name: prison.name
  }

  const secret = secrets.jwtSecret;

  const options = {
    expiresIn: "10d"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = {
  generateToken
}