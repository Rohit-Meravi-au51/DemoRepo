let arr1 = [56,22,44,34,52,5323,54,122,665];
maxm = arr1[0]
let func1=()=>{
        for(i = 0 ; i < arr1.length ; i++)
        if (arr1[i] > maxm)
                maxm = arr1[i]
                ind = arr1.indexOf(maxm)
        return ind

}
res = func1()
console.log(res);
