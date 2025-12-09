// 1. Use join() to combine ["red", "green", "blue"] into "red-green-blue".

var colours = ["red", "green", "blue"];
var joined = colours.join("-");
console.log(joined);

//2. Extract the word "World" from "Hello World" using substring().

var greet = "Hello World";
var greeted = greet.substring(6,11);
console.log(greeted);

//3. Get the first character of "JavaScript" using charAt().

var word = "javascript";
var result = word.charAt(0);
console.log(result);

//4. Convert 123.4567 to a string with 2 decimal places using toFixed().

var number = 123.4567;
var fixed = number.toFixed(2);
console.log(fixed);

//5. Round 5.7 down using Math.floor() and up using Math.ceil().

var number = 5.7;
var Round = Math.floor(number);
console.log(Round);
var rounded = Math.ceil(number);
console.log(rounded);

//6. Convert the string "42.9" to a number using both Number() and parseFloat().

var string = "42.9";
var number = Number(string);
console.log(number);

var str = "42.9";
var floated = parseFloat(str);
console.log(floated);

//7. Find the maximum and minimum values in [10, 55, 32, 90, 7].

var number = [10, 55, 32, 90, 7];
var maximum = number.reduce((x,y) => (Math.max(x,y)));
console.log(maximum);

var number = [10, 55, 32, 90, 7];
var minimum = number.reduce((x,y) => (Math.min(x,y)));
console.log(minimum);

//8. Given the string "I love JavaScript", split it into words and print how many
//words there are.

var string = "I love JavaScript";
var splitted = string.split(" ");
console.log(splitted);
var length = splitted.length
console.log(`it has ${length} words`);

//9. From the array ["apple", "banana", "kiwi", "grape"], remove the first and last elements
var fruits = ["apple", "banana", "kiwi", "grape"];
var shifted = fruits.shift();
var popped = fruits.pop();
console.log(fruits);

//10. Use filter() to get only numbers greater than 50 from [10, 60, 30, 80,45]
var numbers = [10, 60, 30, 80,45];
var filtered = numbers.filter((num) => (num > 50));
console.log(filtered);

//11. Convert the array [100, 200, 300] into a string "100,200,300" and then back into array again
var number = [100, 200, 300];
console.log(number);
var string = number.toString();
console.log(string);
console.log(typeof(string));
var splitted = string.split(",");
console.log(splitted);

//12. Combine two arrays ["a", "b"] and ["c", "d"] into one.
var array1 = ["a", "b"];
var array2 = ["c", "d"];
let combined = array1.concat(array2);
console.log(combined);

//13. Use slice() to extract [3, 4, 5] from [1, 2, 3, 4, 5, 6].
var numbers = [1, 2, 3, 4, 5, 6];
let sliced = numbers.slice(2,5);
console.log(sliced);

//14. Use substr() or substring() to get the last 4 characters of "Programming".
var word = "Programming";
var worded = word.substring(7,11);
console.log(worded);

var anotherword = "Programming";
var result = anotherword.substr(7,4);
console.log(result);

//15.  Write a function countVowels(str) that counts vowels (a, e, i, o, u) in a given string
 function countVowels(str){
    var count = 0;
    var vowels = "aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count=count+1;
        }
    }
    console.log(count);
 };
 var input = "immediate";
 console.log(countVowels(input));

//16. Write a function that takes a sentence and returns each word’s first letter capitalized.
// Example: "hello world" → "Hello World"

function capitalized(sentence){
    var splitted = sentence.split(" ");
    var len = splitted.length;
    var joined;
    for(let i=0;i<len;i++){
        splitted[i]=splitted[i][0].toUpperCase()+splitted[i].slice(1);
        joined = splitted.join(" ");
    }
    return joined;
};
let input = "hello good morning";
console.log(capitalized(input));

//17. Write a function findAverage(arr) that returns the average of numbers in an array

function findAverage(arr){
    var average = arr.reduce((acc,num) => (acc+num));
    var result = average/arr.length;
    return result;
};
let number = [1,2,3,4,5];
console.log(findAverage(number));

//18. Write a function findLongestWord(str) that finds the longest word in a sentence.
function findLongestWord(str){
    var splitted = str.split(" ");
    var longestword = splitted[0];
    for(let i=1;i<splitted.length;i++){
        if(splitted[i].length>longestword.length){
            longestword = splitted[i];
        }
    }
    return longestword;
};
let sentence = "today im planning to visit disney land";
console.log(findLongestWord(sentence));

//19. Given a list of prices [23.567, 45.99, 12.1], format all values to 2 decimal
// places and return a new array

var array = [23.567, 45.99, 12.1];
for(let i=0;i<array.length;i++){
    array[i]=array[i].toFixed(2);
};
console.log(array);

//20. Write a function that converts "10,20,30,40" into [10,20,30,40] and returns the sum
function conversion(str){
    var splitted = str.split(",");
    for(let i=0;i<splitted.length;i++){
        splitted[i]=Number(splitted[i]);
    }
    console.log(splitted);
    var reduced = splitted.reduce((acc,num) => (acc+num),0);
    return reduced;
};
let numbers = "10,20,30,40";
console.log(conversion(numbers));

//21. Write a function that checks if a string is a palindrome (same forward and backward)
function palindrome(str){
    var ispalindrome;
    var splitted = str.split("");
    for(let i=0;i<splitted.length/2;i++){
         ispalindrome = true;
        if(splitted[i]!=splitted[splitted.length-1-i]){
            ispalindrome=false;
            break;
        }

           
    }
    if(ispalindrome){
        console.log("it is a palindrome");
    }else{
        console.log("not a palindrome");
    }


};
var word = "malayalam";
console.log(palindrome(word));

//22.  Convert the string "45" into a number using Number().
var string = "45";
console.log(Number(string));

//23. Convert the string "50.67" into a float using parseFloat().
var string = "50.67";
console.log(parseFloat(string));

//24. Convert "60.89" into an integer using parseInt().
var string = "60.89";
console.log(parseInt(string));

//25. Use toFixed(2) to format 12.34567 with only 2 decimal places.
var number = 12.34567;
var fixed = number.toFixed(2);
console.log(fixed);

//26. Round 5.4 using Math.round().
var number = 5.4;
var result = Math.round(number);
console.log(result);

//27. Round 9.1 upward using Math.ceil().
var number = 9.1;
var rounded = Math.ceil(number);
console.log(rounded);

//28. Round 9.9 downward using Math.floor().
var number = 9.9;
var rounded = Math.floor(number);
console.log(rounded);

//29. Convert 99 into a string using toString().
var num = 99;
var str = num.toString();
console.log(str);

//30. Use Math.max() to find the largest number in (10, 45, 32, 99, 4).
var num = [10, 45, 32, 99, 4];
var result = num.reduce((x,y) => (Math.max(x,y)));
console.log(result);

//31. Use Math.min() to find the smallest number in (5, 15, 3, 8, 22).
var num = [5, 15, 3, 8, 22];
var result = Math.min.apply(null,num);
console.log(result);

//32. Convert "25.6789" into a number and format it to 1 decimal place.
var str = "25.6789";
var num = Number(str);
console.log(num);
console.log(num.toFixed(1));

//33. Write code to generate a random number between 1 and 10.
let number = Math.floor(Math.random()*10)+1;
console.log(number);

//34. Use Math.sqrt() to find the square root of 81.
console.log(Math.sqrt(81));

//35. Use Math.pow() to calculate 53.
console.log(Math.pow(5,3));

//36. Use Math.abs() to convert -56 into a positive number.
console.log(Math.abs(-56));

//37. Use Number.isInteger() to check if 3.14 is an integer.
console.log(Number.isInteger(3.14));

//38. Use parseFloat() to extract a number from the string "99.5kg".
console.log(parseFloat("99.5kg"));

//39. Round 15.678 to 2 decimal places, then convert it back to a number (not string).
var number = 15.678;
var fixed = number.toFixed(2);
console.log(fixed);
var result = Number(fixed);
console.log(result);

//40. Generate a random number between 50 and 100 (integer only).
var number = Math.floor(Math.random() * 51) + 50;
console.log(number);

//41. Use Math.trunc() to remove decimals from 45.89.
console.log(Math.trunc(45.89));

