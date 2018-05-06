
function permAlone(str) {
  var arr = str.split(""), len = arr.length;

  function createPerm(array, n) {
    var total = [], last = n - 1;
    if (n === 1) {
      return [array[0]];
    } else {
      for (let i = 0; i < n - 1; i++) {
        total.push(...createPerm(array, n - 1).map(val => val + array[last]));
        if (n % 2 === 0) {
          let swapEven = array[last];
          array[last] = array[i];
          array[i] = swapEven;
        } else {
          let swapOdd = array[last];
          array[last] = array[0];
          array[0] = swapOdd;
        }
      }
      total.push(...createPerm(array, n - 1).map(val => val + array[last]));
    }
    return total;
  }

  function noRepeat(string) {
    return (!string.match(/(\w)\1+/g));
  }

  return createPerm(arr, len).filter(str => noRepeat(str)).length;
}

console.log(
permAlone("aaabb")
)
