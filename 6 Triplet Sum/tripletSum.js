// Javascript program to find a triplet

// returns true if there is triplet with sum equal
// to 'sum' present in A[]. Also, prints the triplet
function find3Numbers(arr, sum) {
  let l, r;
  let A = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    l = i + 1;
    r = arr.length - 1;
    while (l < r) {
      if (A[i] + A[l] + A[r] == sum) {
        console.log("Triplet is " + A[i] + ", " + A[l] + ", " + A[r]);
        return true;
      } else if (A[i] + A[l] + A[r] < sum) l++;
      else {
        r--;
      }
    }

    return false;
  }
}

console.log(find3Numbers([12, 3, 4, 1, 6, 9], 22));
