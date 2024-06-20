/*Problem 12:
Problem Statement: Write a function transposeMatrix that takes a 2D array (matrix) as input and returns the transposed matrix using nested loops.
Example: transposeMatrix([[1, 2], [3, 4]]) should return [[1, 3], [2, 4]].


*/

function transposeMatrix(matrix) {
   let rows = matrix.length;
   let cols = matrix[0].length;
   let transposedMatrix = [];

   for ( i=0; i<cols; i++){
    transposedMatrix.push([]);

   }
   for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        transposedMatrix[j][i] = matrix[i][j];
    }
    
}
return transposedMatrix;




}



console.log(transposeMatrix([[1, 2], [3, 4]])); 
  

