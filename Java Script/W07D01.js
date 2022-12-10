let arr1 = new Array()
n = Number(require("prompt-sync")()("Length = "))
for(i = 0 ; i<n ; i++){
      arr1[i] = Number(require("Prompt-sync")()("Input Element = ",))
      
}
console.log("Original Array",arr1)
res = arr1.slice(2,9);
console.log("elements from index 2 to 8",res);
console.log("Original Array after Slice",arr1);