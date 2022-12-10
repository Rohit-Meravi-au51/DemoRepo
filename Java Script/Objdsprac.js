///////////Object Data Structure //////////////
obj1 = {                                              //Defining Object Data Structure.
    name : "rohit",
    age : 23,
    hometown : "Bhopal",
    occupation : "Student",
    array : [2,33,4,53,645,63,64],                   //After every Key (,) is necessay.
    f1 :() => {                                     //Definig Method(function) as Key or Property in Object.
         console.log(this.age,this.hobby);
    },
    f2 :() =>{                                     //Definig Method(function) as Key or Property in Object.
        console.log(this.name,this.hometown);      
    },
    f3 :(z,x,c,v,b,n) => {
        console.log(z,x,c,v,b,n);
    },
    }
    obj1.name = "Rohan"                        //Updating Key outside the Object.
    console.log(obj1.name,obj1.age);          //Accessing the Key of the Object.                
    console.log(obj1["name"]);
    obj1["hobby"] = "Surfing"               //Inserting Key(hobby) in the Object(obj1).
    obj1.f1()                               //calling function of the Object.
    obj1.f2()
    console.log(obj1.array,this.age,this.hobby,this.name,this.hometown);
    // obj2 = obj1                   //assingning all the Key or Property of obj1 to obj2.
    // obj2.name = "Rohan"           //if we chng the name of Obj1, name of Obj2 will also get changd, becs they share the same memory address.
    //console.log(obj2);


