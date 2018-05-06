
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    let r = earthRadius + arr[i].avgAlt;
    let T = Math.round(2*Math.PI*Math.sqrt(Math.pow(r,3)/GM));
    answer.push({name: arr[i].name, orbitalPeriod: T});
  }
  return answer;
}

console.log(
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
)
