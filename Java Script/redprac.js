// arr = [2,3,4,5,76,78,8,22,1]
// let f1 = (total,val) =>
// {
//     if(total > val) return total
//     else return val
    
// }
// reslt = arr.reduce(f1)
// console.log(reslt)
///////////////////////////////////////////////////////////////////////////////////////
arr = [2,3,4,5,76,78,8,22,1]
let f1 = (total,val) =>
{
    return(total + val)    
}
reslt = arr.reduce(f1,2)
reslt2 = (reslt % 2)
let f2 = () => {
    if(reslt2 == 0)
    console.log("Even Output");
    else console.log("odd output");
}
f2()