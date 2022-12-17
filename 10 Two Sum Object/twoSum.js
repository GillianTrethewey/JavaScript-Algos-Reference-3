 // Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function twoSum(arr, sum){
  const pairs = []
  const nums = {}

  for(const num1 of arr){
    const num2 = sum - num1
    if(!nums[num2]){
      nums[num1] = 1
    }else{
      pairs.push([num1,num2])
    }
  }
  return pairs
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);