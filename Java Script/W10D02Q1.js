///////////Reverse String //////////////
str = "Hello"
arr = str.split("")
func = (arr) =>{
    F2(arr,0,arr.length-1)
    return arr
}
F2 = (s,ss,se) =>{
    if(ss > se)
    return;
    else {
        t = s[ss];
        s[ss] = s[se];
        s[se] = t;
        return F2(s, ss + 1 , se - 1) 
    }
}
res = func(arr)
console.log(res.join(""));

