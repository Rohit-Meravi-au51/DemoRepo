let num1 = Number(require("prompt-sync")()("Number01 = "));     // Taking Input01 from User.
let num2 = Number(require("prompt-sync")()("Number02 = "));     // Taking Input02 from User.

//Definig Function to check Bigger number with Ternary Operator.
let func1 = ternop => {
    (num1 < num2) ? console.log("Number02 is bigger.") : console.log("Number01 is bigger.");     
}

//If Condition to check both input are Number, then call the function.
{if (String(num1) != "NaN" && String(num2) != "NaN")
func1()
else if 
    (String(num1) == "NaN" && String(num2) == "NaN")
        console.log(" Input is not a Number");
}