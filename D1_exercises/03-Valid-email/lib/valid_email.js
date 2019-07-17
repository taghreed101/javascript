const valid = (email) => {
  // TODO: return true if the `email` string has the right pattern!
  if (email.match(/[a-zA-Z0-9\-#/_]+@[a-zA-Z0-9\-#/_]+\.[a-zA-Z0-9\-.#/_][a-zA-Z0-9\-.#/_]+/i))
  {
    return true;
  } 
  else {
    return false;
  }

};

module.exports = valid; // Do not remove.
