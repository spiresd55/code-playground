/*
 TODO:
 You are climbing a stair case. It takes n steps to reach to the top.
 Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */









// n=1 1
// n=2 11 2
// n=3 12 111 21
// n=4 112 22 121 1111 211
// n=5 122 1112 212 1121 221 1211 11111 2111








console.log('CLIMBING THE STAIRS');

function climbStairsRecursive(n) {
  if(n === 1 || n === 0) {
    return 1;
  }
  return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}

console.log(climbStairsRecursive(5));


function climbStairsDynamic(n) {
  let map = [];
  map[0] = 1;
  map[1] = 1;

  for(let i = 2; i <= n; i++) {
    map[i] = (map[i - 1]) + (map[i - 2]);
  }

  return map[n];
}

console.log(climbStairsDynamic(20));