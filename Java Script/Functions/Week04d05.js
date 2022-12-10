x = 50
function func(x){
console.log('x is', x)//This line will print x = 50.
x = 2                                  
console.log('Changed local x to', x) //This line will print the value of x = 2 , because  this x is inside the body of function.
}
func(x) //This line will call the Function func and pass the value of x = 50.
console.log('x is now', x) //This line will print the value of x = 50 , because  this x is outside the body of function.

// Out will be -:

//x is 50
//Changed local x to 2
//x is now 50
