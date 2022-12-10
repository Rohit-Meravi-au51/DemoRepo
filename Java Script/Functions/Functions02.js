function Even_Odd(s){
    if (s%2==0) return "even";
    else return "odd"
}
function Grt_50(n){
    if (n>50) return true;
    else return false;  
}
function f1(x,eo,grt){
    let res_eo = eo(x);
    let res_grrt =grt(x);
    if (res_eo =="even" && res_grrt==true)
        console.log("Number is greater than 50 and Even");
    else
        console.log("not");
}
    let k = 68
    f1(k,Even_Odd,Grt_50);    
    let g = 24
    f1(g,Even_Odd,Grt_50)
    let h = 46
    f1(h,Even_Odd,Grt_50)
