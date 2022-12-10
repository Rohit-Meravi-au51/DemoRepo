Arr1 = [1,1,1,1,1,2,2,2,3,3,3,4,4,5,5,5,6,6,6,7,7,7,8,8,8]
target = 6
upperbond = (Arr1,target) =>{
    low = 0
    high = Arr1.length - 1
    res = -1
    while(low<=high){
        mid =Math.floor((low+high)/2)
    if(Arr1[mid] < target){
        low = mid + 1
    }
    else if (Arr1[mid] > target){
        high = mid - 1
    }
    else if (Arr1[mid] == target){
        res = mid
        low = mid + 1
    }
    }
    return res
}
lowerbond = (Arr1,target) =>{
    low = 0
    high = Arr1.length - 1
    res = -1
    while(low<=high){
        mid =Math.floor((low+high)/2)
    if(Arr1[mid] < target){
        low = mid + 1
    }
    else if (Arr1[mid] > target){
        high = mid - 1
    }
    else if (Arr1[mid] == target){
        res = mid
        high = mid - 1
    }
    }
    return res
}
func1 = function (Arr1,target){
    lb = lowerbond(Arr1,target)
    ub = upperbond(Arr1,target)
    return(lb,ub)    
}
res = func1(Arr1,target)
console.log(res);