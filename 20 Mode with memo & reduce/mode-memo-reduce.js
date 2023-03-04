/*
Calculate the Mean and Mode
Create a statsFinder() function that takes in a list of numbers and 
returns a list containing the mean and mode, in that order. 
As a reminder, the mean is the average of the values and the 
mode is the most occurring value. 
If there are multiple modes, return the mode that occurs first. 

For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400].
*/

const statsFinder = (array) => {
  let mean = array.reduce((p, c) => p + c) / array.length;
  let mode,
    charMap = {};
  array.forEach((e) => (charMap[e] = (charMap[e] || 0) + 1));
  mode = array.reduce((a, c) => (charMap[c] > charMap[a] ? c : a));
  return [mean, mode];
};

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]));
