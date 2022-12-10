let N = Number(require("prompt-sync")()("Enter the Number = ")); // Taking Input from User.
let Snum = String(N);                                              // converted User input(number) into String .
let Slent = Snum.length;                                           // to Check the length of the string.

//Function  defining to provide the sum of Input ** input length.
let armnum = function f1(){
    let sum = 0;
    for (i = 0 ; i < Snum.length ; i++)
        sum = Snum[i] ** Slent + sum
        return sum        
}

//Function defining to check Value returned from the previous Function is eqaul to input or not.
let res2 =function f2 (){
    if (res1 == N)
    console.log("Input is Armstrong Number");
else 
    console.log("Input is not a Armstrong Number");
}

// If Condition to check if Input is Number , then call the function.
if (String(N) != "NaN"){
    res1 = armnum()
    res2()
}

//Else if Condition to print input is not number.
else if (String(N) == "NaN")
    console.log(" Input is not a Number");
    







