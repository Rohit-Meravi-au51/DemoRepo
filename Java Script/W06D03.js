let arr1 = [];
let func1 = function inp (){
        let n = require("prompt-sync")()("Enter Input = ");
        arr1.push(n)
}
let func2 = function inp2(){
    let leng = require("prompt-sync")()("Enter the Lenght of the Array = ")
        if (leng != 0 ){
            for ( i = 1 ; leng >= i ; i++ )
            func1()
            console.log(arr1);
            }
        else 
            console.log("Please Provide array Length greater than 0");
            }

func2()
