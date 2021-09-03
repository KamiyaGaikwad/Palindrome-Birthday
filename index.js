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
    day : 5, 
    month : 1, 
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

function datesInAllFormats(date){
    var dateInString = dateFromNumberToString(date);
    var dateDDMMYYYY = dateInString.day + dateInString.month + dateInString.year;
    var dateMMDDYYYY = dateInString.month + dateInString.day + dateInString.year;
    var dateYYYYMMDD = dateInString.year + dateInString.month + dateInString.day;
    var dateDDMMYY = dateInString.day + dateInString.month + dateInString.year.slice(-2);
    var dateMMDDYY = dateInString.month + dateInString.day + dateInString.year.slice(-2);
    var dateYYMMDD = dateInString.year.slice(-2) + dateInString.month + dateInString.day;

    return [dateDDMMYYYY, dateMMDDYYYY, dateYYYYMMDD, dateDDMMYY, dateMMDDYY, dateYYMMDD];
}

function checkPalindromeForAllDateFormats(date){
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
    return checker;
}

function isLeapYear(year){
    if(year%400 === 0){
        return true;
    }
    if(year%100 === 0){
        return false;
    }
    if(year%4 === 0){
        return true;
    }

    return false;
}

function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month == 2){
        if(isLeapYear(year)){
            if(day > 29){
                day = 1;
                month = 3;
            }
            }

        else if(day > 28) {
            day = 1;
            month = 3;
        }
        }

    else if(day > daysInMonth[month-1]){
        day = 1;
        month++;
    }

    if(month>12){
        month = 1;
        year++;
    }
    
    return {
        day: day,
        month: month,
        year: year
      }
    }

    function getNextDateAsPalindrome(date){
        var nextDate = getNextDate(date);
        counterOfDays = 0;

        while(1){
            counterOfDays++;
            var resultList = checkPalindromeForAllDateFormats(nextDate);
            for(var i=0;i<resultList.length;i++){
                if(resultList[i]){
                    console.log([counterOfDays, nextDate]);
                    return [counterOfDays, nextDate];
                    break;

                }
            }
            nextDate = getNextDate(nextDate);
        }
    }
    
getNextDateAsPalindrome(date);