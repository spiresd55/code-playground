/*
Find the value of an exponent without using a math class log(n) time
 */

function exponent(base, power) {
  let temp = 1;
  console.log(power);
  if(power <= 0) {
    console.log('MADE IT HERE');
    return 1;
  }
  temp = exponent(base, Math.floor(power / 2));
 // console.log(temp);
  if(power % 2 === 0) {
    return temp * temp;
  } else {
    return base * temp * temp;
  }

}

console.log('SOLVING EXPONENNT');
//console.log(exponent(2, 4));
console.log(exponent(2, 6));