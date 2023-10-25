// Given a no X find the sum of it's digit, suppose x = 1234, the answer should be 10
// Also write function to reverse the given digit, suppose x =1223, then the answer should be 3221

function sumOfDigit(a) {
  var sum = 0;
  while (a > 0) {
    sum = sum + (a % 10);
    a = Math.floor(a / 10);
  }
  return sum;
}

function revesreANumber(a) {
  var reversedDigit = 0;
  while (a > 0) {
    reversedDigit = reversedDigit * 10 + (a % 10);
    a = Math.floor(a / 10);
  }
  return reversedDigit;
}

var a = 500234113;
console.log(sumOfDigit(a));
console.log(revesreANumber(a));
