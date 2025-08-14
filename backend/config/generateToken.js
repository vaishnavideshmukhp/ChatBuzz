const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {  //id is basically payload
    expiresIn: "30d",
  });
};

module.exports = generateToken;
