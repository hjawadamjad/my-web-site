function isPalindrome(string){

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