let arr = [
    [1,2,3,1],
    [2,3,4,2],
    [3,4,5,6],
    [4,5,6,5]
];

let st = 0;
let ed = arr.length-1

let diag1 = 0;
let diag2 = 0;
 

arr.forEach(() => {
diag1 += arr[st][st]
diag2 += arr[st][ed]
st++
ed--
})

let rslt = Math.abs(diag1 - diag2)

console.log(rslt)

