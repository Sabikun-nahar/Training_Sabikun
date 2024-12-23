//5! = 5*4*3*2*1 = 120
//0! = 1
//5 * 4 * 3 * 2 * 1
function factorialrecursion(n){
    if (n == 0){
        return 1;
      }
   return n * factorialrecursion(n-1);
  }
  console.log(factorialrecursion(3));
  