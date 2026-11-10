const arr = [1,1,0,-1,-2];
const n = arr.length;

let negativesRatio = arr.filter(ele => ele<0).length/n;
let positivesRatio = arr.filter(ele => ele>0).length/n;
let nullsRatio = arr.filter(ele => ele == 0).length/n;

console.log(negativesRatio.toFixed(6));
console.log(positivesRatio.toFixed(6));
console.log(nullsRatio.toFixed(6));