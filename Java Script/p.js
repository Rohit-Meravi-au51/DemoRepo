/////Recursion function for ---Factorial /////
fact = (n) =>{
    if(n == 1)
    return 1
    else
    return (n * fact(n-1))
}
res = fact(6)
console.log(res);