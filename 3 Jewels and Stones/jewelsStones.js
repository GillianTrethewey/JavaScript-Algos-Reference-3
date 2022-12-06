/*
You're given strings jewels representing the types of stones 
that are jewels, and stones representing the stones you have. 
Each character in stones is a type of stone you have. 
You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/

const numJewelsInStones = (jewels, stones) => {
  return stones.split("").filter((e) => jewels.includes(e)).length;
};

const numJewelsInStones1 = (jewels, stones) => {
  const charMap = {};
  let count = 0;
  for (const jewel of jewels) {
    charMap[jewel] = true;
  }
  for (const stone of stones) {
    if (charMap[stone]) {
      count++;
    }
  }
  return count;
};

const numJewelsInStones2 = (jewels, stones) => {
    const charMap = {};
    let count = 0;
    jewels.map(e => charMap(e) = true);
    stones.map(e => charMap(e) ? count++ : null)
    return count;
}
console.log(numJewelsInStones("aA", "aAAbbbb")); // expected 3
console.log(numJewelsInStones("z", "ZZ")); // expected 0
