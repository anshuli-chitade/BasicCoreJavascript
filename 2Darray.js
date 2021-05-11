
const read = require("readline-sync");
const fill2DimensionsArray = (M, N) => {
    for (let i = 0; i < M; i++) {
        console.log(arr.push([0]));
        for (let j = 0; j < N; j++) {
            console.log("Enter element to be inserted in array");
            arr[i][j] = read.questionInt();
        }
    }
    printing();
}
const printing = () => {
    for (let i = 0; i < M; i++) {
            console.log(arr[i]) 
    }
}

const arr = [];
console.log("Enter no. of rows:")
const M = read.questionInt();
console.log("Enter no. of columns:")
const N = read.questionInt();
fill2DimensionsArray(M, N);





