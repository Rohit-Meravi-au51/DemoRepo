let n = Number(require("prompt-sync")()("Enter Number of Busses = "));
if (String(n) !== "NaN"){
console.log(`There are ${(n%2==0)?"even num of ":"odd num of "} buses`)
}
else 
console.log("Wrong Input");
f1 = () =>{
    if(String(n) !== "NaN"){if(n%2==0)
    console.log("Even Number of Buses");
    else
    console.log("Odd Number of Buses");}
    else
    console.log("Wrong Input");
}
f1()
let  rm1 = 2 // here let has global Scope, means this let variable(rm1) can be used throught the code.
// let rm;
// console.log(rm);
// rm = "rm"
let Func1 = function func(){
    let rm2 = 4 //here let has Functional scope, means this let varaible(rm2) can be used only inside this function (Func1).
        console.log(rm4);
        {
        //console.log(rm3);
        let rm3 = 5 //here let has Block Scope , means this let varaible(rm3) can be used only inside this Block .
        console.log(rm3);
        console.log(rm1);
    }
    {var rm4  = 8   //Var has the Functional level scope.
        console.log(rm4);
    console.log(rm2);
    }
        console.log(rm4 + 5)
}
//Func1()
