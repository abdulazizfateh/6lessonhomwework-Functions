// LESSON 5 using functions |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// TASK 1 ||||||||||||||||||||||||||||| Yozuv ichidagi sonlarni yeg'indisini chiqarish 

// let id = 'a1b2d3u4l5a6z7i8z9'; // id has a length of 18 and its indexes are (0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17)

// function sumOfNumbers(string) {
//     let sum = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (!isNaN(string[i])) {
//             sum += Number(string[i]);
//         }
//     }
//     return sum;
// }

// let result = sumOfNumbers(id);
// console.log(result);






// TASK 2 ||||||||||||||||||||||||||||| Yozuvlarni aloxida raqamlarni aloxida qilish

// let id = "a1b2d3u4l5a6z7i8z9";

// function seperateTheCharacters(string) {
//     let numbers = '';
//     let letters = '';
//     for (let i = 0; i < string.length; i++) {
//         if (!isNaN(string[i])) {
//             numbers += (string[i]);
//         } else {
//             letters += string[i];
//         }
//     }
//     return { numbers, letters };
// }

// let result = seperateTheCharacters(id);
// console.log(result);




// TASK 3 ||||||||||||||||||||||||||||| Yozuv ichidagi juft raqamlarni topish 

// let id = "a1b2d3u4l5a6z7i8z9";

// function seperateTheCharacters(string) {
//     let numbers = '';
//     for (let i = 0; i < string.length; i++) {
//         if (!isNaN(string[i])) {
//             if (string[i] % 2 == 0)
//                 numbers += (string[i]);
//         }
//     }
//     return { numbers };
// }

// let result = seperateTheCharacters(id);
// console.log(result);





















// Boolean tasks using function
// TASK 1 ||||||||||||||||||||||||||||

// let a = 123;

// function threeDigitOddNumber(num) {
//     if (num > 99 && num < 1000 && num % 2 != 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(threeDigitOddNumber(a)); // bu yerdagi argument tepada e'lon qilingan "a" dan qiymatni olib funksiyaning parametiriga o'zlashtiryapdi 


// TASK 1 wrong version.
// let a = 123;
// function threeDigitOddNumber (){
//     if (a > 99 && a < 1000 && a % 2 != 0){
//         return true;
//     }
// }
// console.log(threeDigitOddNumber());




// TASK 2 ||||||||||||||||||||||||||||

// let a = 1;
// let b = 12;
// let c = 12;

// function TwoNumbersEqual(num1, num2, num3) {
//     if (num1 == num2 || num2 == num3 || num1 == num3) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(TwoNumbersEqual(a, b, c));



// TASK 3 ||||||||||||||||||||||||||||

// let a = 30;
// let b = -10;
// let c = 10;

// let result = 0;

// function OppositeNumbers(num1, num2, num3){
//     if (num1 === -num2 || num2 === -num1 || num1 === -num3 || num3 === -num1 || num2 === -num3 || num3 === -num2){
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }

// console.log(OppositeNumbers(a, b, c));



// TASK 4 ||||||||||||||||||||||||||||

// let a = 12;
// let first = parseInt(a / 100);
// let last = (a % 100) % 10;
// let middle = ((a % 100) - last) / 10;

// let result;

// function differentThreeDigitNumber(num, hun, dec, one) {
//     if (num > 99 && num < 1000 && hun != dec && dec != one && hun != one) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }

// console.log(differentThreeDigitNumber(a, first, middle, last));



// TASK 5 ||||||||||||||||||||||||||||

// let a = 123;

// let first = Math.round(a / 100); 
// let last = a % 10; 
// let middle = ((a % 100) - last) / 10;

// let result;

// function increasingDigits(num, hun, dec, one) {
//     if (num > 99 && num < 1000 && hun < dec && dec < one) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }

// console.log(increasingDigits(a, first, middle, last));




// TASK 6 ||||||||||||||||||||||||||||

// let a = 987;

// let first = Math.floor(a / 100);
// let last = a % 10;
// let middle = ((a % 100) - last) / 10;

// let result;

// function increasingOrDecreasingDigits(num, hun, dec, one) {
//     if (num > 99 && num < 1000) {
//         if (hun < dec && dec < one || hun > dec && dec > one) {
//             result = true;
//         } else {
//             result = false;
//         }
//         return result;
//     } else {
//         result = false;
//     }
//     return result;
// }

// console.log(increasingOrDecreasingDigits(a, first, middle, last));



// TASK 7 ||||||||||||||||||||||||||||

// let a = 929;

// let first = Math.floor(a / 100); // first = 9;
// let last = a % 10; // last = 9;

// function palindromeNum(num, hun, one) {
//     if (num > 99 && num < 1000) {
//         if (hun == one) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }

// console.log(palindromeNum(a, first, last));