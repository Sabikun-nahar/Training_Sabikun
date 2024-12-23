//123454321
//level

function palindrome(text){
    for(let i=0; i<text.length ; i++){
        let j = text.length -1-i;
        console.log(`text[i]: ${text[i]}\n text[j]: ${text[j]}`);
          if(text[i]!=text[j]){
            return false;
          }
        }
        return true;
     }

function printpalindrome(text, printdata ="NO"){
    
      if(palindrome(text) == true){
       console.log(`${text} is palindrome`);
       printdata == "yes";
       console.log(printdata);
      }else{
       console.log(`${text} is not palindrome`);
       console.log(printdata);
     }
     }


printpalindrome("level");

