/*
Given two or more arrays, write a function that combines their
elements into one array without any repetition.

console.log(removeDups([1, 2, 3, 3, 3], [1, 4, 5, 2])); // should return [1,2,3,4,5]
*/

const removeDups = (...arrays) => {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });
  return [...new Set([...jointArray])];
};
console.log(removeDups([1, 2, 3, 3, 3], [1, 4, 5, 2])); // should return [1,2,3,4,5]
