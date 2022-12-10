function CB(N1) {
    return function(N) {
         return N1 + N;
    }
  }
  var addSix = CB(6);
Num1 = addSix(10);
Num2 = addSix(21);
console.log(Num1,Num2);
