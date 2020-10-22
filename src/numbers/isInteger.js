const isNumeric = require("./isNumeric");

module.exports = n => {
  if (!isNumeric(n)) return false;
  return (n | 0) == n;
};
