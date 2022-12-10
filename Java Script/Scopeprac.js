// let num1 = 9 //Global Level Scope
// f1 = () => {
//         let num1 = 6 //Block level Scope
//         var num2 = 7 //Functional Level Scope
//         { let num2 = 8
//         reslt = num1 + 5
//         console.log(num2); //Block Variable
// } 
// console.log(num1); //Fuctional Variable
// }
// f1()
// console.log(num1); //Global Variable
/////////////////////////////////////////////////////////////////////////
let y = 9; //Global Level Scope.
const m = 5; //we can not change the value of const variable and need to assign the initial value to condt variable.
let r;  //we can define let and var variable without initial value.
var t;  //we can define let and var variable without initial value.
f1 = () => {
        let y = 6 //Block level Scope
        var x = 7 //Functional Level Scope
        const m = 66 //Block level Const variable, it is different than global M variable.
        { let x = 8
        reslt = x + 5
        console.log("x",x); //Block Variable
        console.log("m",m);
} 
console.log("y",y); //Fuctional Variable
console.log("x",x); //Fuctional Variable
}
f1()
console.log("global y" ,y); //Global Variable
console.log("Global M", m+24);
