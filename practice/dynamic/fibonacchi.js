console.log('Fibonnachi Numbers');

//F(n) = n - 1 + n - 2
function solveFibonacchi(n) {

  if(n === 0 || n ===1) {
    return n;
  }

  return solveFibonacchi(n-1) + solveFibonacchi(n-2);
}

console.log(solveFibonacchi(5));


let f = [];
f[0] = 0;
f[1] = 1;

function solveFibonacchiDynamically(n) {
  if (f[n] == undefined) {
    f[n] = solveFibonacchiDynamically(n-1) + solveFibonacchiDynamically(n-2)
  }

  return(f[n]);
}

console.log(solveFibonacchiDynamically(100));