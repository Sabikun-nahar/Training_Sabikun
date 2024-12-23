//const, var, let
//block scope, data dinamically
//const -> block scope, data dinamically hole kaj korbe nah
//var -> all place e kaj korbe
//let -> only block scope e kaj korbe, for loop, i, j

function test(num1, num2, method)
{ 
    const result = 8;
 if(method == "sum"){
    //result = num1+ num2;
    console.log(result);
 }else if (method == "sub"){
    //result = num1- num2;
    console.log(result);
 }
}

//test(4,6,"sum")