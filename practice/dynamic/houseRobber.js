/*
 You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

 Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 */

//[2, 3, 5, 7, 10, 12]

console.log('ROBBING A HOUSE');

function robHouses(houses) {
  let lookup = [];
  let n = houses.length;

  lookup[0] = 0;
  if(n > 0) {
    lookup[1] = houses[0];
  }

  for(let i = 2; i <=n; i++) {
    lookup[i] = Math.max(lookup[i - 1], lookup[i-2] + houses[i-1])
  }

  return lookup[n];
}

console.log(robHouses([2, 3, 5, 7, 10, 12]));





















