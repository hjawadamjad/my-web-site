function isPalindrome(string){


    if(string.length > 10 ){
        document.getElementById('result').innerHTML = "String is More Than 10 Characters";
    }
    else if(string.length == 1 || string.length == 0){
        document.getElementById('result').innerHTML = "Please Enter at least 2 charcters";
    }
    else{
        reverseString = "";
    for(let i=string.length-1;i>=0;i--){
        reverseString = reverseString + string[i];
    }
    
    if(reverseString === string ) {
        
        document.getElementById('result').innerHTML = "String is Palindrome";
    }
    else{
        document.getElementById('result').innerHTML = "String is not Palindrome";
    }
    }



        
    }

    

