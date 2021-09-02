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
    return true;
}
else{
    return false;
}
}

var date  = { 
    day : 10, 
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
    
    return dateInStr;
}

function datesInAllFormats(){
    var dateInString = dateFromNumberToString(date);
    var dateDDMMYYYY = dateInString.day + dateInString.month + dateInString.year;
    var dateMMDDYYYY = dateInString.month + dateInString.day + dateInString.year;
    var dateYYYYMMDD = dateInString.year + dateInString.month + dateInString.day;
    var dateDDMMYY = dateInString.day + dateInString.month + dateInString.year.slice(-2);
    var dateMMDDYY = dateInString.month + dateInString.day + dateInString.year.slice(-2);
    var dateYYMMDD = dateInString.year.slice(-2) + dateInString.month + dateInString.day;

    return [dateDDMMYYYY, dateMMDDYYYY, dateYYYYMMDD, dateDDMMYY, dateMMDDYY, dateYYMMDD];
}

function checkPalindromeForAllDateFormats(){
    var dateFormatList = datesInAllFormats(date);
    var checker = [];
    
    for(var i=0;i<dateFormatList.length;i++){
        if(isPalindrome(dateFormatList[i])){
            checker.push(true);
        }
        else{
            checker.push(false);
        }
    }
    console.log(checker);
}

checkPalindromeForAllDateFormats();
