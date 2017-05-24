
function generatePascalsTriangle(rows) {
  let triangle = [];
  triangle[0] = [1];
  triangle[1] = [1,1];
  for(let i = 2; i <= rows; i++) {
    triangle[i] = [1];
    for(let j =0; j < triangle[i-1].length - 1; j++) {
      triangle[i].unshift(triangle[i-1][j] + triangle[i-1][j + 1]);
    }
    triangle[i].unshift(1);
  }

  return triangle;
}

console.log('GENERATING PASCALS TRIANGLE');
console.log(generatePascalsTriangle(10));



// 1 11 121 1331 14641