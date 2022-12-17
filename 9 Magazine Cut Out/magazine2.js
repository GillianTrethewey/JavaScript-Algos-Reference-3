/*Given a magazine of words and a ransom note, 
determine if it’s possible to “cut out” 
and create the ransom note from the magazine words.
*/
function ransomNote(str, magazine) {
  let wordMap = {};
  let matchMap = {};
  let result = [];

  magazine = magazine.replace(/[,.]/g, "");

  magazine.split(" ").forEach((e) => {
    wordMap[e] = wordMap[e] + 1 || 1;
  });

  str.split(" ").forEach((e) => {
    matchMap[e] = matchMap[e] + 1 || 1;
  });

  for (let key in matchMap) {
    result.push(wordMap[key] ? wordMap[key] >= matchMap[key] : false);
  }
  return result.every((e) => e === true);
}

// function ransomNote(note, magazine){
//   const noteWords = note.split(" ")
//   const magazineWords = magazine.split(" ")
//   const magazineHash = {}
//   let possible = true

//   for(word of magazineWords){
//     magazineHash[word] = magazineHash[word] + 1 || 1
//   }

//   for(word of noteWords){
//     if(magazineHash[word]){
//       magazineHash[word]--
//       if(magazineHash[word] < 0) possible = false
//     }else{
//       possible = false
//     }
//   }
//   return possible
// }
const magazine = //"Hello world yes yes no";
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

//console.log(ransomNote("world yes poop", magazine));
// console.log(ransomNote("world yes yes yes", magazine));
console.log(ransomNote("sit ad est sint", magazine)); // expects true
console.log(ransomNote("sit ad est love", magazine)); // expects false
console.log(ransomNote("sit ad est sint in in", magazine)); // expects true
console.log(ransomNote("sit ad est sint in in in in", magazine)); // expects false
