/*Given a magazine of words and a ransom note, 
determine if it’s possible to “cut out” 
and create the ransom note from the magazine words.
*/
function ransomNote(str, magazine) {
  let slidingWindow = [];
  let strArr = str.split(" ");
  let magArr = magazine.replace(/[,.]/g, "").split(" ");

  for (let i = 0; i < magArr.length; i++) {
    slidingWindow.push(magArr[i]);

    if (slidingWindow.length === strArr.length) {
      let slidingWindowStr = slidingWindow.join(" ");
      if (str === slidingWindowStr) {
        return true;
      }
    }
    if (slidingWindow.length > strArr.length) {
      slidingWindow.shift();
      let slidingWindowStr = slidingWindow.join(" ");

      if (str === slidingWindowStr) {
        return true;
      }
    }
  }
  return false;
}

const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(ransomNote("Lorem ipsum dolor sit", magazine)); // expects true
console.log(
  ransomNote("sed do eiusmod tempor incididunt ut labore et dolore", magazine)
); // expects true
console.log(
  ransomNote(
    "sed do eiusmod tempor incididunt ut labore et dolore Lyle",
    magazine
  )
); // expects false
console.log(ransomNote("Lorem ipsum", magazine)); // expects true
