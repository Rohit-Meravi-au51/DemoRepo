let arr1 = [326,722,422,34,52,53,5334,122,65];
let maxm = arr1[0]
for (val of arr1){
     if (val > maxm)
    maxm = val
    ind = arr1.indexOf(maxm)
    console.log(ind)
    
}