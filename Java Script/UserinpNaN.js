
let N = Number(require("prompt-sync")()("Number = "));
if (String(N) !== "NaN"){              
NPrime = true                         
for (let i = 2;i<N;i++){               
if(N%i==0){                             
NPrime = false                          
break
}
}
if(NPrime==false){
console.log(N,"is not a prime number");
}
else{
console.log(N,"is a prime number");
}
}
else if (String(N) == "NaN")
    console.log(" Input is not a Number");
