let arr1 =[]
n = Number(require("prompt-sync")()("Length = "))
for(i = 0 ; i<n ; i++){
      arr1[i] = Number(require("Prompt-sync")()("Input Element = ",))
      
}
console.log("Original Array",arr1)
res = arr1.splice(2,7);
console.log("elements from index 2 to 7",res);
console.log("Original Array after Splice",arr1);