//////////OOPS-Inheritance/////////////
class Student{             //Here Student is Parent/base Class.
    constructor(l,k,j){  //we are using Constructor function to use the attributes of  parent class(Student) througout the Class. to Initialize the Attributes value.
    this.name = l        //here this.name is the attribute of parent class(Student).
    this.age = k
    this.array = j
    this.studying("yes")  //Calling the Method inside the Constructor using (This.method).
    }
    studying = (study) => {   //Here Studying is the Method of parent Class(Student).
        if(study == "yes")
        console.log(`${this.name} Student is Studying`);
        else
        console.log(`${this.name} Student is not studying`);
    }
    }
class section extends Student{   //Here we are defining the Child/Sub Class using Extends(keyword) to inheritate from parent class.
    constructor(l,k,c){        //Constructor function to use attributes throughout the class.
    super(l,k)                //use of Super function to pass value to parent(Student) class.
    this.rollno = c
    console.log(`my name is ${this.name}`);
    console.log(`my roll no is ${this.rollno}`);
    console.log(`my age is ${this.age}`);
    }
} 
rohan = new section ("rohan",12,1332)
console.log(rohan.age,rohan.name);
rohit = new Student ("Rohit",23,[2,3,4,52,43,56,32,12])
console.log(rohit.name,rohit.age,rohit.array);