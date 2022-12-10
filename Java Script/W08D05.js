let arr1 = ["Orange","Orange","banana","apple","apple","banana","apple","apple","apple","Orange","Orange","Orange","Orange","banana"]
obj1 = {}
for(ele of arr1){
    if(obj1[ele] == undefined){
        obj1[ele] = 1
        }  
else {
    obj1[ele] +=1
    }
}
console.log(obj1);