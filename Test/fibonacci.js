
// 0, 1, 1, 2, 3, 5, 8, 13
function fibonacci(n)
{
    var data = [0];
    if( n==1 ){
        data = data;
    }else{
        data = [0, 1];
    }
   
    //console.log(data);
    for( let i = 2; i<n ; i++)
        {
           var result = data[i-1]+data[i-2];
           data.push(result);
        }
        console.log(data);
        //data.pop();
        //console.log(data);
}
fibonacci(1);