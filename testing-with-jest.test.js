// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () => {
  test("given two numbers return sum",  () => {
    expect(addThemUp(2,3)).toEqual(5)
    expect(addThemUp(3,4)).toEqual(7)
    expect(addThemUp(4,5)).toEqual(9)
  })
})




// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (number1, number2) => {
  return number1 + number2
}



// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.





// --------------------2b) See the test fail. THEN write the code to make the test pass.
