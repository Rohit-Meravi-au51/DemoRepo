//////////To Define Matrix/////////
//Matrix is the 2-D form of Array wit Rows and Coloumn////
//cloumn 0,1,2
Matr = [[1,2,3],   //Row 0              Initialization of the Matrix.this matrix is of 2 * 2.Indexing starts from 0.
        [2,3,4],   //Row 1 
        [2,4,6]];  //Row 2
//console.log(Matr);                      //to Print the Whole Matrix in the form of Array.
Matr.push([6,5,7])                      //To insert new Row ay the end into the matrix.
console.log(Matr[3][2]);                //Here [3] is Row number and [2] is Coloumn number
Matr.push([9,8,6,5])                    //To insert new coloumn at the end into the matrix.
console.log(Matr[4][3]);
Matr.unshift([2,3,4]);                  //To Insert New Row at the Begining of the Matrix.
console.log(Matr);          
Matr[0][3] = 5                          //To Insert New Element as per Existing (Row and Coloumn ).
console.log(Matr);