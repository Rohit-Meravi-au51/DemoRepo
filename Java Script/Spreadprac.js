////Spread works on Array only/////////
arr = [2,3,5,7,3,8,32]
console.log(arr); //Normal array print.
console.log(...arr); //Array after spread. It will give output in Non-Array form.
let a;
let b;
var c;
[a,b,c] = [...arr] //spread on the basis of array indexes.
console.log(a,b,c);
function func1(a,b,c)
{
    console.log(a+b+c);
}
func1(...arr) //spread on the basis of array indexes.
f2 = (q,...w) =>{       //Here we are Performing Rest.
    console.log(q,w);   //Here variable(w) will be in Array form.
}
f2(a,b,c)               //Providing values for the Rest.
