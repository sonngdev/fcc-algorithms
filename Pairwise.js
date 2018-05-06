
function pairwise(arr, arg) {
  var checkArr = []; // an array storing INDICES of removed numbers in arr, not the removed number itself
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ( j !== i && arr[i] + arr[j] === arg && checkArr.indexOf(i) === -1 && checkArr.indexOf(j) === -1) {
        checkArr.push(i,j);
      }
    }
  }
  return checkArr.reduce((a,b) => a+b, 0);
}

console.log(
pairwise([0, 0, 0, 0, 1, 1], 1)
)
