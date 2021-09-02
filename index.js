function reverseString(checkString){
var str = checkString;

var charList = str.split('');

var reversedList = charList.reverse();

var reversedStr = reversedList.join('');

return reversedStr;
}

function isPalindrome(checkString){
var reversedString = reverseString(checkString);

if(reversedString == checkString){
    console.log(true);
}
else{
    console.log(false);
}
}

isPalindrome('racecar');