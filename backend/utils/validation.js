const mongoose = require("mongoose");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\S+@\S+\.\S+$/);
};

const validateObjectId = (string) => {
  return mongoose.Types.ObjectId.isValid(string);
};

module.exports = {
  validateEmail,
  validateObjectId,
};
