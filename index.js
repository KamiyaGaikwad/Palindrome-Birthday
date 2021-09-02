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

var date  = { 
    day : 14, 
    month : 9, 
    year : 2020 }

function dateFromNumberToString(date){
    var dateInStr = {day:"", month:"", year:""}

    if(date.day< 10) {
        dateInStr.day = '0' + date.day;
    }
    else{
        dateInStr.day = date.day.toString();
    }
    if(date.month< 10) {
        dateInStr.month = '0' + date.month;
    }
    else{
        dateInStr.month = date.month.toString();
    }
    if(date.year< 10) {
        dateInStr.year = '0' + date.year;
    }
    else{
        dateInStr.year = date.year.toString();
    }
    
    console.log(dateInStr);
}

dateFromNumberToString(date);