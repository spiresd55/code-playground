/*
  find numbers of combinations for value M with coins C {1, 25, 50, 100}
 */

function findNumWaysToMakeChange(value, coins) {
  let lookup = [];
  coins = coins.split(' ');

  return findWays(value, coins, 0, lookup);
}

function findWays(value, coins, index, lookup) {
  if(value === 0 ) {
    return 1;
  }

  if(index >= coins.length) {
    return 0;
  }

  let amtWithCoin = 0;
  let ways = 0;

  let key = value + '-' + coins[index];

  if(lookup[key]) {
    return lookup[key];
  }

  while(amtWithCoin <= value ) {
    let remaining = value - amtWithCoin;
    ways += findWays(remaining, coins, index + 1, lookup);
    amtWithCoin += parseInt(coins[index]);
  }

  lookup[key] = ways;
  return ways;
}

console.log('Making change');
console.log(findNumWaysToMakeChange(100, '1 25'));


/*
 Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

 The same repeated number may be chosen from C unlimited number of times.
 */

//TODO: FIX THIS

function findCombinationsToMakeTargetNumber(canidates, target) {
  let lookup = [];

  return findCombinations(target, canidates, 0, lookup);
}

function findCombinations(target, canidates, index, lookup) {
  if(target === 0) {
    return 1;
  }

  if(index >= canidates.length) {
    return 0;
  }

  let amtWithCanidates = 0;
  let combos = [];
  let key = target + '-' + canidates[index];

  if(lookup[key]) {
    return lookup[key];
  }

  while(amtWithCanidates < target) {
    let remaining = target - amtWithCanidates;
    combos.push(findCombinations(remaining, canidates, index + 1, lookup));
    amtWithCanidates += canidates[index];
  }

  lookup[key] = combos;
  return combos;
}

console.log('FINDING COMBOS');
console.log(findCombinationsToMakeTargetNumber([5, 2, 1], 10));
