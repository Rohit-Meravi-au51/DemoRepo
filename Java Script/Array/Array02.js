// let  hour = 
// if (hour < 18)
//     console.log("day");
// else
//     console.log("eveng");
    // i=0;
    // text = "";
    // while (i < 10) {
    //     text = "The number is " + i;
    //     i++;
    //     console.log(text);
        
    //   }
    rm = [2,4,5,6,"rohit",true]     // initialize the Array.
        console.log(rm);            //print the whole Array.
let rom = rm.reverse();             //we reverse the array elements.   
        console.log(rom);           //print the array with reversed output.
let rm1 = rm.join(" ");             //we converted the Array into string.
        console.log(rm1);           //printed the sring.
let rm2 = rm1.split(" ");           //we converted the String into Array.
        console.log(rm2);           //printed the Array.
let rm3 = rm2.slice(1,4)            //sliced the array using start and end point.it will give another array with sliced elements.
        console.log(rm3);           //printed the sliced array.
let rm4 = rm2.splice(4,2,12,34,21,6,34,12,5);   //removed the elements from index to howmany and added the new elements at index.
        console.log(rm4);           //printed the array with sliced elements.
        console.log(rm2);           //printed the original array with the updated elements. 
let ind = rm2.indexOf("5");         //***to know the index of the elements , when elements appears first time in the Array.
        console.log(ind);           //print index of elements.
let ind1 = rm2.lastIndexOf(12);     //***to know the index of the elements , when elements appears last time in the Array.
        console.log(ind1);          //print index of elements
    
      
      
      