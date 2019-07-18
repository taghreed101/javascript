const ageInDays = (day, month, year) => {
  // TODO: Implement the method and return an integer
  //var days = Math.round(((Date.now() - new Date(2000, 0, 1)) / 86400000));
  var birth = new Date(year,month-1,day);
  var now = new Date();
  var ageMilliseconds= now - birth;
  var ageSeconds =  ageMilliseconds /1000;
  var ageMinutes =  ageSeconds/60;
  var ageHours = ageMinutes/60;
  var ageDays = Math.floor(ageHours/24);

  return ageDays;
};

module.exports = ageInDays; // Do not remove. We need this for the spec to know about your method.
