function hasTargetSum(array, target) {
  const seen = new Set();
  for (num of array){
    const difference = target - num;
    if (seen.has(difference)) {return true;}
    seen.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  iterate through array
  create new set without current element
  find difference between target and current element
  .has(difference)
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
