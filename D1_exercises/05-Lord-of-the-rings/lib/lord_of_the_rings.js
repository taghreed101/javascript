const isGood = (soldierType) => {
  // TODO: return `true` if the soldierType is Good.
  // Hint: Hobbits, Elves, Dwarves and Eagles are Good
  var  arrayLord = ["Hobbits", "Elves", "Dwarves" , "Eagles"];
  arrayLord.forEach(function(soldier) {
    if (soldier != soldierType) {
      return false;}
  });
  return true;
};

const buildSoldierMap = (battlefield) => {
  // TODO: Given a battlefield (String), return a Map of forces.
};

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
};

module.exports = { whoWinsTheWar, buildSoldierMap, isGood }; // Do not remove this line
