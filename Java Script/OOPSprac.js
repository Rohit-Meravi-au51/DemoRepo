//////Class Data Structure//////OOPS-Encapsulation/////////////
class Student{
    constructor(l,k,j){  //we are using Constructor function to use the attributes of class(Student) througout the Class. to Initialize the Attributes value.
    this.name = l        //here this.name is the attribute os class(Student).
    this.age = k
    this.array = j
    this.studying("yes")
    this.spf(...j)      //here we are passing array and Spreding the element of the array.
    this.spf1(1,2,3,4,5,67,8,43,23) //Here Passing the Elements and using Rest operator and Getting ouput in new array.
    } 
    studying = (study) => {   //Here Studying is the Method of Class(Student).
        if(study == "yes")
        console.log(`${this.name} Student is Studying`);
        else
        console.log(`${this.name} Student is not studying`);
    }
        spf = (q,w,e,r,t) => {
        console.log(q,w,e,r,t);    
    }
    spf1 = (q,w,...t) => {
        console.log(q,w,t);    
    }
    }
    rohit = new Student ("Rohit",34,[2,4,6,7,8,3])
    // arr1 =[2,3,5,3,6,4,78,45,34]
    // f4 = (q,w,r,e,t) =>{
    //     console.log(q,w,r,e,t);
    // }
    // f4(...arr1)
    
rohit = new Student ("rohit",23,[1,2,3,4,56,6,7,4])   // Adding new object(rohit) to class(Student) using Constructor.
rohit.studying("yes")                     // Accessing the Method(Studying) of class(Student).
console.log(rohit.age,rohit.array)       //printing Attribute of class for Object(rohit).
// rohan = new Student ("rohan",13,[5,34,2,5,23,52,12])   // Adding new object(rohan) to class(Student) using Constructor.
// rohan.studying("no")                      
// console.log(rohan.age,rohan.array)       //printing Attribute of class for Object(rohan).
