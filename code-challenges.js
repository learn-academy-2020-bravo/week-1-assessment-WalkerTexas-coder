ASSESSMENT 1: Coding practical questions

Please read all questions thoroughly
Psuedo coding is highly recommended

--------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
var temp1 = 35
var temp2 = 350
var temp3 = 212
// declare a function named boilingPoint that takes a numbers (num) as an argument
const boilingPoint = (num) => {
  // declare an if that returns "(num) is below boiling point" if (num) is <= 211
  if (num <= 211) {
    return (num) + " is below boiling point."
    // declare an else if that returns "(num) is at boiling point" if (num) === 212
  } else if (num === 212)  {
      return  (num) + " is at boiling point."
      // declare an else if that returns "(num) is above boiling point" if (num) <=213
}   else if (num >= 213) {
  return (num) + " is above boiling point"
  //declare an else that returns "error: please insert a number"
} else return "error: please insert a number"
}
call function
console.log(boilingPoint(temp1));
console.log(boilingPoint(temp2));
console.log(boilingPoint(temp3));
console.log(boilingPoint("love"));



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

//decalre a function that takes an array as an argument
var myNumbers1 = [3, 7, 0, 6, -9]
const mult5 = (array) => {
  let numsMult5 = []
   for (var i = 0; i < array.length; i++) {
     numsMult5.push (array[i] * 5)
  } return numsMult5
}
console.log(mult5(myNumbers1));


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]
// declare a function mult5two taht takes an arrray as an argument
// declare a local variable array nums2mult5
// map through array and multpile values by 5
// return new values
//call function mult5two




// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// decalre function noVowel that takes an argument
// create a new local variable #let woVowels that
// #split a string into an arrray
// declare a new array #voWels that identifies the strings "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"
// fliter through woVowels array
// return woVowels
// call function




// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

//if var is a string preform previous commans
// else return "variable is not a string"


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [
{name: "Itchy", animal: "mouse"},
{name: "Stimpy", animal: "cat"},
{name: "Daffy", animal: "duck"},
{name: "Scratchy", animal: "cat"},
{name: "Ren", animal: "dog"},
{name: "Felix", animal: "cat"}]

//declare function findAnimal
// create local variable cats that takes ana array and .filters for value "cat"
// return the key array





// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"
