module.exports = n => {
  if (typeof n === "number") return true;
  return typeof n === "string" && n == +n && n !== "";
};
