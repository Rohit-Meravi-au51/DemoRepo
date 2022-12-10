/////Hoisting//////////
arr = [1,2,3,4,5]
func1(...arr) //In Hoisting Declaration of Function and Variable comes up.
function func1(a,b,c)
{
    console.log(a+b+c);
}
console.log("x", x); //This will give Undefined as output, but declaration is done after.
var x = 4 
// console.log(y); //This will give error Cannot access 'y' before initialization.
// let y = 5
{
    let f;
    console.log("f", f); //This will give Undefined as output, because initialization is  done after.
    f = 33
}
let s;
console.log("s", s);//This will give Undefined as output, because  initialization is  done after.
s = 10
var h;
console.log("h", h); ////This will give Undefined as output, initialization done after.
h = 33
