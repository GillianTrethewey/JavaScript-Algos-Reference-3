const sliding = (str) => {
  let strArr = str.split("");
  let result = [];
  for (let el of strArr) {
    result.push(el);
    if (result.length > 4) {
      result.shift();
    }
    console.log(result);
  }
};
console.log(sliding("fdjskalfjdsakfjlds"));
