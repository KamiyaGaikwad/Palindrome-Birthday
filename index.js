function reverseString(){
var str = 'hello';

var charList = str.split('');

var reversedList = charList.reverse();

var reversedStr = reversedList.join('');

console.log(reversedStr);
}

reverseString();