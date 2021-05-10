
const fill2DimensionsArray = (arr, M, N) => {
    for (let i = 0; i < M; i++) {
        console.log(arr.push([0]));
        for (let j = 0; j < N; j++) {
            console.log(arr[i][j] = prompt("enter element to be inserted in array"));
        }
    }
}

const arr = [];
const M = prompt("Enter no. of rows:");
const N = prompt("Enter no. of columns:");
fill2DimensionsArray(arr, M, N);



