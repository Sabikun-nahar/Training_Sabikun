//5! = 5*4*3*2*1 = 120
//0! = 1

function factorial(n){
  var  result = 1;
  if (n == 0){
    console.log(1);;
  }else
 {
    for (let i = 1; i<=n ; i++)
        var result = result * i;
        console.log(result);
 }
}
factorial(5);
