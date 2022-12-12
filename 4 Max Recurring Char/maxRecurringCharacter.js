const maxRecurringCharacter = (str) => {
  const charMap = {};

  for (let char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }
  let maxCount = 0;
  let maxChar = null;

  for (let char in charMap) { // iterates over the keys in object
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(maxRecurringCharacter("Hello World!"));
