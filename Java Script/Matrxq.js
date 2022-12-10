///User input For the Matrix ///////////
rows = Number(require("prompt-sync")()(("Rows = ")))
clms=  Number(require("prompt-sync")()(("Coloums = ")))
matrx = new Array(rows);
for(let i = 0; i < rows; i++){
matrx[i] = new Array(clms);
}
for(let i = 0 ; i < rows; i++){
    for(let w = 0 ; w < clms ; w++){      
    matrx[i][w] = Number(require("prompt-sync")()(("input = ")))
}
}
console.log(matrx);
////////////To Print Matrix/////////
for(g = 0; g < matrx.length; g++){
    for(k = 0; k < matrx.length; k++)
console.log(`index no [${g},${k}] = ${matrx[g][k]}`);
}
