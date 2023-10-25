// find the fibonacii series for n = 6, expected answer 0,1,1,2,3,5,8

function fibonaciiSeries(n) {
  var seriesArray = [0, 1];
  for (var i = 2; i <= n; i++) {
    seriesArray[i] = seriesArray[i - 2] + seriesArray[i - 1];
  }
  return seriesArray;
}

console.log(fibonaciiSeries(1));
