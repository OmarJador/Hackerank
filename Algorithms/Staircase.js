const n = 6;

let spaces = n-1
let tags = 1;

for(let i=0; i<n; i++){
    
    console.log(' '.repeat(spaces)+"#".repeat(tags))
    spaces--
    tags++
}

