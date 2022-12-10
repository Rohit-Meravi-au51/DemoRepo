let A = 40;
let B = 5;
let ope = require("prompt-sync")()("Operator = ");
if (ope == "+"){
    console.log("Sum of A and B is =",(A+B));
}    else if (ope == "-") {
    console.log("Difference of A and B is = ",(A-B));
}
    else if (ope == "*") {
        console.log("Product of A and B is = ",(A*B));
}
    else if (ope == "/") {
            console.log("Value of A/B is = ",(A/B));
}
else console.log("Wrong Arithmetic Operator")

