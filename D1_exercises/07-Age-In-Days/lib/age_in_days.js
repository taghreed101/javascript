const ageInDays = (day, month, year) => {
  // TODO: Implement the method and return an integer
  var days = Math.round(((Date.now() - new Date(2000, 0, 1)) / 86400000));
  return days;
};

module.exports = ageInDays; // Do not remove. We need this for the spec to know about your method.
