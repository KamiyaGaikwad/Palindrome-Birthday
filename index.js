var bdayInput = document.querySelector("#bday-input");
var showBtn = document.querySelector("#show-btn");
var resultDiv = document.querySelector("#result");

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
                    return [counterOfDays, nextDate];
                    

                }
            }
            nextDate = getNextDate(nextDate);
        }
    }
    


showBtn.addEventListener("click",showResult);

function showResult() {
    var inputByButton = bdayInput.value;
    if(inputByButton !== ''){
        var date = inputByButton.split("-");
        var yyyy = date[0];
        var mm = date[1];
        var dd = date[2];

        var date = {
            day : Number(dd),
            month : Number(mm),
            year : Number(yyyy)

        
        };
        flagOfMain = true;
        var checkedDateList = checkPalindromeForAllDateFormats(date)
        for(let i=0;i<checkedDateList.length;i++){
            if(checkedDateList[i]){
                resultDiv.innerText = "Yay, Your Birthday is a Palindrome";
                flagOfMain = false;
                break;
            }
        }
        if(flagOfMain == true){
        var [counterOfDays,nextDate] = getNextDateAsPalindrome(date);
        var [counterOfDaysPrev,prevDate] = getPrevDateAsPalindrome(date);
        if(counterOfDaysPrev < counterOfDays){
            resultDiv.innerText = `The nearest palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year}, you missed by ${counterOfDaysPrev} days.`;}
        }
        else{
        resultDiv.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${counterOfDays} days.`;}
    }
}

function getPrevDate(date){
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day === 0) {
        month--;
    
        if (month === 0) {
          month = 12;
          day = 31;
          year--;
        }
        else if (month === 2) {
          if (isLeapYear(year)) {
            day = 29;
          }
          else {
            day = 28;
          }
        }
        else {
          day = daysInMonth[month - 1];
        }
      }
    
    return {
        day: day,
        month: month,
        year: year
      }
    }

function getPrevDateAsPalindrome(date){
    var prevDate = getPrevDate(date);
        counterOfDays = 0;

        while(1){
            counterOfDays++;
            var resultList = checkPalindromeForAllDateFormats(prevDate);
            for(var i=0;i<resultList.length;i++){
                if(resultList[i]){
                    return [counterOfDays, prevDate];
                    

                }
            }
            prevDate = getPrevDate(prevDate);
        }
}
