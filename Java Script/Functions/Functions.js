console.log("First Function");
function add(R)
{
if (R==20)
 console.log("number is 20");
else 
    console.log("not");
}
add(20);
console.log("Function Decl With Parameter and Arguments");
function cube(r)
{
console.log(r**2);
}
cube(8);
console.log("Function Decl by Statement");
function Cube(R)
{
let Cube=(R**2);
return Cube
}
let Res=Cube(6)
console.log(Res);
console.log("Function Decl by Expression");
Exprsn=function Cube(R)
{
let Cube=(R**2);
return Cube
}
let Res1=Exprsn(5)
console.log(Res1);
console.log("Using value Returned by Function");
console.log((Res+5));