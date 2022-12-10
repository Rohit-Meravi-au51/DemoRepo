/////Recursion function----Even Number /////
fact = (n) =>{
    console.log(n);
    if(n <= 0)
    return;
    else return (n==0 || n%2==0 && fact(n-2))
}
res = fact(22)



