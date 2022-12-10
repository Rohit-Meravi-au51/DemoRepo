/////////// Binary Search ////////////////
/////////Binary Search applicable only on Sorted array(Ascending or Descending)/////
arr = [1,2,423,42,312,5,6,7,8,12,55]
//idx  0 1 2 3 4 5 6 7  8
low = 0                         //In Beginning Lowest index of the Array will be 0.
high = arr.length-1             //To get highest index of the array.
f1 = 0
func = (arr,target)=>{
    while(low <= high){
    mid =Math.floor((low+high)/2)   //To Find Middle index of the array.

    if(arr[mid] < target){          
        low = mid + 1               //To move low Towards the right of Mid.
    }
    else if (arr[mid] > target){
        high = mid -1               //To move High Towards the left of Mid.
    }
    else {console.log("Found the number at index ", mid);f1 = 1;break}
}
    if(f1 == 0){
    console.log("Number not present in the array")}
}
func(arr,2)











