// GCD(hcf) of two no 'a' and 'b' suppuse here a = 28, and b = 24

function gcdOfTwoNumber(a, b) {
  if (a <= b) {
    var currentDivisor = a;
    var currentDivident = b;
    while (currentDivisor !== 0) {
      var temp = currentDivisor;
      currentDivisor = currentDivident % currentDivisor;
      currentDivident = temp;
    }
    return currentDivident;
  } else {
    var currentDivisor = b;
    var currentDivident = a;
    while (currentDivisor !== 0) {
      var temp = currentDivisor;
      currentDivisor = currentDivident % currentDivisor;
      currentDivident = temp;
    }
    return currentDivident;
  }
}

// better Approach: gcd will the no which can devide both a and b, by default thatvalue is 1,
// but we will try to find the bigger value which can divide both a and b

function gcdOfTwoNumberOptimized(a, b) {
  let ans = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  return ans;
}

console.log(gcdOfTwoNumber(77, 11));
console.log(gcdOfTwoNumberOptimized(77, 11));
