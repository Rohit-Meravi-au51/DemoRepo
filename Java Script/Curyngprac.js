/////////// Currying,Returning function inside function and and in each function using single parameter in each function//////////
f1 = (q) =>{
    return y = (w) => {
    return z = (e) => {
        return (q+w+e)
    }
    }
}
adder = f1(20)   //here value of q in function f1 will be 20 , and adder will become function y.
f2 = adder(30)   //here value of w in function y will be 30 , and f2 will become function z.
res = f2(30)     //here value of e in function z will be 30 , and res will return the value of  function z.
console.log(res);
