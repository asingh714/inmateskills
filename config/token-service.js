const jwt = require("jsonwebtoken")


const generateToken = (prison) => {
  const payload = {
    subject: prison.id,
    username: prison.username,
    name: prison.name
  }

  const secret = process.env.JWT_SECRET 

  const options = {
    expiresIn: "10d"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = {
  generateToken
}