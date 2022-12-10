/////////Closure//////////
//When we define function inside another function and return that function , it is called Closure.
f1 = ()=>{
    console.log("inside f1");
    f2 = () =>{                     //defining another function.
    console.log("inside f2");
    }
    return f2                       //Returning the function.
}
res = f1()                 //calling  the function and getiing another fuinction in return. we can call in f1()() in this way also.
res()                      //calling the returned function.

////////////////in Closure we can use more than one parameter in the Function //////////////////////////////////
// adder = (d) => {
//     return func = (y) => {      //Returning the function and defining the function at the same time.
//         return (d+y)            
//     }
// }
// res = adder(4)(32)                  //another way of calling function f1()().
// console.log(res);
/////////////////// using the value of one function and using in another function  ///////////////////////////
adder = (d) => {
    return func = (y,j) => {   //using two parameters in single function is Closure.
        return (d+y)*j
    }
}
adder5 = adder(5)       //calling the main function and passing some value.
res1 = adder5(20,4)       //calling the returned function and using the value of main function.
console.log(res1);
res2 = adder5(30,4)
console.log(res2);
res3 = adder5(40,4)
console.log(res3);
res4 = adder5(50,4)
console.log(res4);
res5 = adder5(60,4)
console.log(res5);

