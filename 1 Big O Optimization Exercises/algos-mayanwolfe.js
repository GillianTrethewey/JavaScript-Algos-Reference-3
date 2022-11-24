// Task 1: Write a function, times10, that takes an argument, n, and multiplies n times 10
// a simple multiplication function

const times10 = (n) => n * 10;

console.log("~~~~~~~~~~~~TASK 1 ~~~~~~~~~~~~");
console.log("times10 returns: ", times10(9));

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {}; // global but not best practice since against the notion of encapsulation

const memoTimes10 = (n) => {
  console.log(cache);
  if (n in cache) {
    console.log("value found:", n);
    return cache[n]; // prev calc value in cache
  } else {
    console.log("calculating and storing result");
    let result = times10(n);
    cache[n] = result;
    return result;
  }
};

console.log("~~~~~~~~~~~~TASK 2 ~~~~~~~~~~~~");
console.log("result", memoTimes10(9)); // calculated
console.log("result", memoTimes10(9)); // cached
console.log("result", memoTimes10(8));
console.log("result", memoTimes10(7));
console.log("result", memoTimes10(6));
console.log("result", memoTimes10(8));
console.log("result", memoTimes10(8));
console.log("result", memoTimes10(6));
console.log("result", memoTimes10(9));
/*
{}
calculating and storing result
result 90
{ '9': 90 }
value found: 9
result 90
{ '9': 90 }
calculating and storing result
result 80
{ '8': 80, '9': 90 }
calculating and storing result
result 70
{ '7': 70, '8': 80, '9': 90 }
calculating and storing result
result 60
{ '6': 60, '7': 70, '8': 80, '9': 90 }
value found: 8
result 80
{ '6': 60, '7': 70, '8': 80, '9': 90 }
value found: 8
result 80
{ '6': 60, '7': 70, '8': 80, '9': 90 }
value found: 6
result 60
{ '6': 60, '7': 70, '8': 80, '9': 90 }
value found: 9
result 90
*/

//const times10 = (n) => n * 10;

//Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosure = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = times10(n);
      cache[n] = result;
      console.log(cache);
      return result;
    }
  };
};

// returned function from memoizedAdd
const memoClosureTimes10 = memoizedClosure();
// when memoizedClosure is executed, a function is returned (line 77 on)
// function is assigned to memoClosureTimes10
// which means the memoClosureTimes10 is a child of the function memoizedClosure
// now memoClosureTimes10 has assess to the variables of the parent function (cache)
// initialized cache once, and when called in the future, the cache persists and can be accessed
// each time but is not global
// this is closure!
// does the same thing as the second task but is better practice
// we encapsulate a variable to keep it out of the global scope, in order to avoid accidentally
// overwriting, or renaming variables in the global namespace

console.log("~~~~~~~~~~~~TASK 3 ~~~~~~~~~~~~");
console.log("Task 3 calculated value:", memoClosureTimes10(9)); // calculated
console.log("Task 3 cached value: ", memoClosureTimes10(10)); // cached
console.log(memoClosureTimes10(8));
console.log(memoClosureTimes10(9));
console.log(memoClosureTimes10(10));
console.log(memoClosureTimes10(10));
/*
Calculating result
{ '9': 90 }
Task 3 calculated value: 90
Calculating result
{ '9': 90, '10': 100 }
Task 3 cached value:  100
Calculating result
{ '8': 80, '9': 90, '10': 100 }
80
Fetching from cache: 9
90
Fetching from cache: 10
100
Fetching from cache: 10
100
*/

console.log("~~~~~~~~~~~~TASK 4 ~~~~~~~~~~~~");
// Task 4
// recursion is you don't know how deep you need to go - just call the function
// repeatedly until the condition is met
// this function below will intersperse a string with e

function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];
    console.log(resultSoFar, index);

    if (index === array.length - 1) {
      // base case
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString); // 'se' after first pass
    }
  }
  // so far you have just defined the function
  // next you have to call it

  return recurse(0, ""); // <- Don't forget why this line is here!
}

joinElements(["s", "cr", "t cod", " :) :)"], "e");
/*
s 0
secr 1
secret code 2
secret code :) :) 3
*/
console.log("~~~~~~~~~~~~TASK 5 ~~~~~~~~~~~~");
//Task 5: Implement linear search.

function linearSearch(arr, item) {
  let index = -1;
  arr.forEach((e, i) => {
    if (e == item) {
      index = i;
    }
  });
  return index;
}

console.log(linearSearch([2, 6, 7, 90, 103], 90));
// returns 3
// runs but not best choice at large scale
console.log("~~~~~~~~~~~~TASK 6 ~~~~~~~~~~~~");
// must be SORTED FIRST
function binarySearch(list, item) {
  let min = 0;
  let max = list.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2); // index 2 to begin

    if (list[guess] === item) {
      // list[2] = 7
      return guess;
    } else {
      if (list[guess] < item) {
        min = guess + 1; // resets to index 3 for first round - represents upper half
      } else {
        max = guess - 1;
      }
    }
  }
  return -1;
}
// returns 3
console.log(binarySearch([2, 6, 7, 90, 103], 90));
console.log("~~~~~~~~~~~~TASK 7 ~~~~~~~~~~~~");

//BUBBLESORT

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

//basic implementation
function bubbleSortBasic(array) {
  var countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for (let i = 0; i < array.length; i++) {
    countOuter++;
    for (let j = 1; j < array.length; j++) {
      countInner++;
      if (array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }

  console.log("outer:", countOuter, "inner:", countInner, "swap:", countSwap);
  return array;
}

console.log(bubbleSortBasic([103, 90, 7, 6, 2]));
