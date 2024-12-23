


function sumnumber(n, target){
    for (let i = 0; i < n.length - 1; i++){
        for (let j = i+1; j < n.length; j++)
          {
            console.log(`n[i]: ${n[i]} \nn[j]: ${n[j]}`);
            console.log(n[i] + n[j]);
            if(n[i] + n[j] == target){
                console.log(n[i] + n[j]);
                //console.log(`The expected numbers are: ${n[i]} & ${n[j]}`);
                return (n[i] , n[j]);
            }else
            console.log('The target is not matched');
          }
    }
  }
  console.log(`The expected numbers are: ${sumnumber([2, 4, 8, 20], 12)}`);

/*function sumnumber(n, target){
    for (let i = 0; i < n.length - 1; i++){
        for (let j = i+1; j < n.length; j++)
          {
            console.log(`n[i]: ${n[i]} \nn[j]: ${n[j]}`);
            console.log(n[i] + n[j]);
            if(n[i] + n[j] == target){
                console.log(n[i] + n[j]);
                console.log(`The expected numbers are: ${n[i]} & ${n[j]}`);
            }else
            console.log('The target is not matched');
          }
    }
  }
sumnumber([2, 4, 8, 20], 12);*/
  