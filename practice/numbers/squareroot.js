
function squareRoot(num) {
  let low = 0;
  let high = num +1; // 10
  let mid = (low + high)/ 2;
  let val = 0;

  while(mid !== low) {
    val = mid * mid; //25 6.25
    if(val === num) {
      return mid;
    } else if(val < num) {
      low = mid; // 6.25
    } else {
      high = mid; // 5
    }
    mid = (low + high) / 2; // 2.5 5.625
  }
  return low;
}

console.log('FINDING SQUARE ROOT');
console.log(squareRoot(9));