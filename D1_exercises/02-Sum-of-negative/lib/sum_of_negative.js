const sumOfNegative = (numbers) => {
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
  
  var sum = 0;
 
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
         sum = sum + numbers[i]
        }
    }
    
    return sum ;
};

module.exports = sumOfNegative; // Do not remove.
