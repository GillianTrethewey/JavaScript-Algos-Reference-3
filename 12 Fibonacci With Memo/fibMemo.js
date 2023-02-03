const memo = {};
function fib(n) {
  if (n <= 1) {
    return n;
  } else if (memo[n]) {
    return memo[n];
  } else {
    let result = fib(n - 1) + fib(n - 2);
    memo[n] = result;
    return result;
  }
}

//Alternatively:
/*
function fib(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
  }
  prevValues[n] = result;
  return result;
}
*/
console.log(fib(6)); // expects 8
