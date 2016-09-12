/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  // do your work here
  let fibMinusOne = 1;
  let fibMinusTwo = 0;

  for(let i = 1; i <= maxFibValue; i = (fibMinusOne + fibMinusTwo)) {
    console.log(i);
    if(i % 2 === 0) {
      sum += i;
    }
    fibMinusTwo = fibMinusOne;
    fibMinusOne = i;
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};