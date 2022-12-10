 n = 11
isPrime = true
for (let i = 2;i<=10;i++){
if(n%i==0){
    isPrime = false
break
}
}
if(isPrime==false){
console.log("Not a prime number");
}
else{
console.log("it is a prime number");
}

