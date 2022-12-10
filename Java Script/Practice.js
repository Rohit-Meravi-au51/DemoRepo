Arr = [12,23,43,564,12,122,12,22,23,33,23,23,434,454,21]
low = 0
high = Arr.length - 1
f1 = 0
func1 = (Arr1,target) =>{
while(low <= high){
mid = Math.floor((low+high)/2)
if(Arr1[mid] > target){
high = mid - 1
}
else if (Arr1[mid] < target){
    low = mid + 1
}
else{ console.log("found number at index ",mid);f1 = 1 ; break}
}
if (f1 ==0){
    console.log("number not present in the array");
}
}
func1(Arr,21212)

// res = Math.ceil((low+high)/2)
// console.log(Arr1[res1]);
// console.log(Arr1[res]);