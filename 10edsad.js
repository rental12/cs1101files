function makemat(r, c) {
    let mat = [];
    for (let i = 0; i < r; i = i + 1) {
        mat[i] = [];
        for (let j = 0; j < c; j = j + 1) {
            mat[i][j] = 0;
        }
    }
    return mat;
}
function dist(x1, x2, y1, y2) {
    let x = math_pow(x1 - x2, 2);
    let y = math_pow(y1 - y2, 2);
    return math_sqrt(x + y);
}
function findmin(arr) {
    let ans = [];
    let min = arr[0];
    let count = 0;
    for (let i = 1; i < array_length(arr); i = i + 1) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    for (let i = 0; i < array_length(arr); i = i + 1) {
        if(arr[i] === min) {
            ans[count] = i;
            count = count + 1;
        }
        
    }
    return ans;
}

function make(mat, arr) {
    let test = mat;
    let hold = [];
    for (let i = 0; i < array_length(mat); i = i + 1) {
        for(let j = 0; j < array_length(mat[0]); j = j + 1) {
            hold = [];
            for (let k = 0; k < array_length(arr); k = k + 1) {
                hold[k] = dist(i, arr[k][0], j, arr[k][1]);
                test[i][j] = hold;
            }
        }
    }
    for (let i = 0; i < array_length(test); i = i + 1) {
        for (let j = 0; j < array_length(test[0]); j = j + 1) {
            if (array_length(findmin(test[i][j])) > 1) {
                test[i][j] = 'x';
            }
            else {
                test[i][j] = findmin(test[i][j])[0];
            }
        }
    }
    return test;
}
let a = makemat(10, 10);
let test1 = [[2,3], [4, 9], [7, 2]];
make(a, test1);



















