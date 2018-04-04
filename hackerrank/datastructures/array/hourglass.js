//1 1 1 0 0 0
//0 1 0 0 0 0
//1 1 1 0 0 0
//0 9 2 -4 -4 0
//0 0 0 -2 0 0
//0 0 -1 -2 -4 0

let hourglass = [[]];
hourglass[0] = [1, 1, 1, 0, 0, 0];
hourglass[1] = [0,1,0,0,0,0];
hourglass[2] =[1,1,1,0,0,0];
hourglass[3] =[0,9,2,-4,-4,0];
hourglass[4]=[0,0,0,-2,0,0];
hourglass[5]=[0,0,-1,-2,-4,0];

function array2D(arr) {
    /*
     * Write your code here.
     */
    let max = 0;
    for(let i = 0; i < 4; i++) {
        let sum = 0;
        for(let j = 0; j < 4; j++) {
            sum += arr[i][j] + arr[i][j+1] + arr[i][j + 2]
                        + arr[i+1][j+1]
                  + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2] ;
        }
        max = Math.max(max, sum);
    }

    return max;
}

console.log(array2D(hourglass));