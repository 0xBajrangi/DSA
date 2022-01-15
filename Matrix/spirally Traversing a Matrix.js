
// this is the solution for the square matrix in javascript

function spirallyTraversingAMatrix(N, matrix){
    //write code here

    let rowStart = 0;
    let rowEnd = N ;
    let colStart = 0;
    let colEnd = N ;
    let count = 0;
    let ans = [];
    while (count < N * N) {
        for (let i = colStart; i < colEnd; i++){
            ans.push(matrix[rowStart][i]);
            count++;
        }
        rowStart++; 
         
        for (let i = rowStart; i < rowEnd; i++){
            ans.push(matrix[i][colEnd-1]);
            count++;
        }

        colEnd--;
        for (let i = colEnd-1; i >= colStart; i--){
            ans.push(matrix[rowEnd-1][i]);
            count++;
        }
        rowEnd--;
        for (let i = rowEnd-1; i >= rowStart; i--){
            ans.push(matrix[i][colStart]);
            count++;
        }
        colStart++;
    }
    console.log(ans.join(" "));

}

/*


Spirally Traversing a Matrix Ended
Description

Given a matrix of size n by n. Traverse and print the matrix in spiral form.



Input
Input Format

First-line contains n

The next n lines contain the matrix

Constraints

n <= 1000

Ai <= 10000




Output
Print the matrix in a single line traversing it spirally


Sample Input 1 

4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
Sample Output 1

1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2 


*/ 