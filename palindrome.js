function isPalindrome(string){

    reverseString = "";
    for(let i=string.length-1;i>=0;i--){
        reverseString = reverseString + string[i];
    }
    
    if(reverseString === string ) {
        console.log("String is Palindrome")
    }
    else{
        console.log("String is not Plaindrome")
    }

}


isPalindrome("ABCDCBA");