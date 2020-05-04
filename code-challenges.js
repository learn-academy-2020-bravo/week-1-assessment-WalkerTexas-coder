// ASSESSMENT 1: Coding practical questions
//
// Please read all questions thoroughly
// Psuedo coding is highly recommended
//
// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
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
}   else return "error: please insert a number"
}
// call function
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
const mult5two = (array) => {
  // declare a local variable array nums2mult5
  let nums2mult5 = array.map(value => {
    // map through array and multpile values by 5
      return value * 5
  })
  // return new values
 return nums2mult5
}
//call function mult5two
console.log(mult5two(myNumbers2));



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// declare function noVowel that takes an argument (string)
const noVowel = (string) => {
  // declare a new let array #vowels that identifies the array "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    // create a new local array  "woVowels" that
    let splitString = string.split("")
    // fliter through (array) against #vowels

    let filtered = splitString.filter(letter =>
          // learned about .includes
       !vowels.includes(letter))
      console.log(splitString);
      console.log(filtered);

            // return woVowels.join as an string
        return filtered.join("")
}
// call function
console.log(noVowel(stringWithVowels1));
console.log(noVowel(stringWithVowels2));





// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

// if var is a string preform previous commans
// else return "variable is not a string"

const noNoVowel = (string) => {
  if (typeof string === "string") {

    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

    let splitString = string.split("")

    let filtered = splitString.filter(letter =>

       !vowels.includes(letter))

      console.log(splitString);

      console.log(filtered);

        return filtered.join("")
      } else {
  return " variable is not a string"
  }
}
console.log(noNoVowel(notAString1));

console.log(noNoVowel(notAString2));


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [
{name: "Itchy", animal: "mouse"},
{name: "Stimpy", animal: "cat"},
{name: "Daffy", animal: "duck"},
{name: "Scratchy", animal: "cat"},
{name: "Ren", animal: "dog"},
{name: "Felix", animal: "cat"}]

// declare function findAnimal
const findAnimal = (arrayOfAnimals) => {
  // create local variable cats that takes an a array and .filters for value "cat"

  let cats= arrayOfAnimals.filter(object => object.animal === "cat" )
    return cats
}
console.log(findAnimal(toonimals));
// return the key array





// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"


const findAnimal2 = (arrayOfAnimals) => {

  let notCats= arrayOfAnimals.filter(object => object.animal !== "cat")
  return  notCats.map(value => value.name)



}

console.log(findAnimal2(toonimals));
