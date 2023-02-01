/* 
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

Test.assertEquals(mygcd(30,12),6)
Test.assertEquals(mygcd(8,9),1)
Test.assertEquals(mygcd(1,1),1)
*/

function mygcd(x, y) {
  for (let i = Math.min(x, y); i > 0; i--) {
    if (x % i === 0 && y % i === 0) {
      // does 12 go into 30 evenly, if not subtract 1 each time
      return i;
    }
  }
}

function EuclideanAlgorithm(a, b) {
  let remainder;
  while (a % b > 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return b;
}

function recursiveEuclidean(a, b) {
  if (b === 0) return a;
  return recursiveEuclidean(b, a % b);
}
console.log(mygcd(30, 12)); // expects 6
console.log(mygcd(8, 9)); // expects 1
console.log(mygcd(1, 1)); // expects 1

console.log(EuclideanAlgorithm(30, 12)); // expects 6
console.log(EuclideanAlgorithm(8, 9)); // expects 1
console.log(EuclideanAlgorithm(1, 1)); // expects 1

console.log(recursiveEuclidean(30, 12)); // expects 6
console.log(recursiveEuclidean(8, 9)); // expects 1
console.log(recursiveEuclidean(1, 1)); // expects 1
