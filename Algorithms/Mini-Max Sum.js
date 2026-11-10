const arr = [1,2,3,4,5]

let minDepart = arr.reduce((a,b)=> a+b)
let maxDepart = 0


for(let i=0; i<arr.length; i++){
   
    let sommeMin = arr.reduce((acc,num)=>acc+num)-arr[i]
    if(sommeMin<minDepart){minDepart=sommeMin}
    
}

for(let i=0; i<arr.length; i++){

    let sommeMax = arr.reduce((a,b)=>a+b)-arr[i]
    if(sommeMax>maxDepart){maxDepart=sommeMax}
    
}


console.log(`${minDepart} ${maxDepart}`)