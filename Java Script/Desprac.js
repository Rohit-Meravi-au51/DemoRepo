///Destructing of the data/////
let a = 4;                                     //Always put(;) at the end of line.
let b = 7;  
let c;
[a,b] = [b,a]                                 //to swap values of a and b.
console.log(a,b);                            // a= 7, b=4.
let arr = ["Rohit","Rohan","Mohan"];
[a,b,c] = arr                               //Swap on the basis of Serial arrangement of array.
console.log(a);
console.log(c,b,a);
let arr1 = ["Rohit","Rohan","Mohan"];
[a,b,c] = [arr1[2],arr1[0],arr1[1]]         //Swap on the basis of array indexes.
console.log(a);
console.log(a,b,c);