arr1 = [1,2,3]
var plusOne = function(digits) {
return (BigInt(digits.join(""))+BigInt(1)).toString().split("") 
};
reslt = plusOne(arr1)
console.log(reslt);