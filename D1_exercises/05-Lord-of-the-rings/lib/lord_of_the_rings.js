const isGood = (soldierType) => {
  // TODO: return `true` if the soldierType is Good.
  // Hint: Hobbits, Elves, Dwarves and Eagles are Good
  var  arrayLord = ["Hobbits", "Elves", "Dwarves" , "Eagles"];
  var belong = false;
  arrayLord.forEach(function(soldier) {
    if (soldier === soldierType) {
      belong =  true;}
  });
  return belong;
};

const buildSoldierMap = (battlefield) => {
  // TODO: Given a battlefield (String), return a Map of forces.
  const beatles = new Map();
  var soldierArray =[];
  var  battlefieldArray = battlefield.split(",");
  battlefieldArray.forEach(function(soldier) {
    soldierArray=soldier.split(":");
    beatles.set(soldierArray[0], parseInt(soldierArray[1]));

  });
  return beatles;
};

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
  var soldierMap = buildSoldierMap(battlefield);
  
  var good = 0;
  var evil = 0;
  soldierMap.forEach((value, key) => {
    if (isGood(key)===true)
    {good = good+ value ;}
    else {evil += value ;}
  });
  if (good > evil) { return "Good";}
  else if (good < evil) {return "Evil";}
  else {return "Tie";}
};

module.exports = { whoWinsTheWar, buildSoldierMap, isGood }; // Do not remove this line
