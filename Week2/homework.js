
/*
    Complete the assignments below.
    They are labeled Assignment 1, Assignment 2 and Assignment 3...
    Run your code by opending the terminal from the VS Code menu
    In the terminal enter -> node homework.js
    That should run your code.

   
    Create all the code below according to the instructions
    Once you are doen copy the output and past it to the bottom of this
    script.
    Add, Commit and Push to push your changes to github

    Modify the code only where it says add your code here
    Your output should look like this
    Test 1.1 PASSED!
    Test 1.2 PASSED!
    Test 1.3 PASSED!
    Test 1.4 PASSED!
    Test 2.1 PASSED!
    ...

    If any of your tests fail keep working at it until all your tests pass

*/

/*
    Assignment 1:
    Task: Fix this function so that it compares a b and c and returns the lowes of 
    the three numbers... you will have to do multiple if statements

    Objective: put your brain to work with logic and the use of boolean operations
*/
function findSmallestOfThreeNumbers(a, b, c){
    
    //Add your code here
}

if( 1 == findSmallestOfThreeNumbers(1,2,3)){
    console.log("Test 1 PASSED!")
}
else{
    console.log("Test 1 FAILED!")
}

if( 2 == findSmallestOfThreeNumbers(110,2,300)){
    console.log("Test 1 PASSED!")
}
else{
    console.log("Test 1 FAILED!")
}

if( 1 == findSmallestOfThreeNumbers(100,2,1)){
    console.log("Test 3 PASSED!")
}
else{
    console.log("Test 3 FAILED!")
}

if( 3 == findSmallestOfThreeNumbers(3,3,3)){
    console.log("Test 4 PASSED!")
}
else{
    console.log("Test 4 FAILED!")
}

/**
 * Assignment 2
 * Task:
 * 
 * Fix this function so that it returns a formmatted name in the format
 * lastName, firstName
 * for example formatName("jane", "doe") returns "doe, jane"
 * 
 * Objective: 
 * The use of logic and using string operations
 * 
 * @param {*} firstName 
 * @param {*} lastName 
 */
function formatName(firstName, lastName){
    //Assignment 1
    //add your code here
    
}

let firstName = "John"
let lastName = "Smith"
let formattedName = formatName(firstName, lastName)

if("Smith, John".localeCompare(formattedName) == 0){
    console.log("Test 2.1 PASSED!")
}
else{
    console.log("Test 2.1 FAILED")
}

/** 
 * Assignment 3
 * 
 * Task: Create an object that has the following attributes and properties
 * Objective: proof you know how to create an object
 * 
 * Attributes:
 * color
 * height
 * weight
 * 
 * Methods
 * category 
 *    if lighter than 2 returns "light", 
 *    heavier than or equal to 2 returns "medium"
 *    Heavier than 4 - Heavy Duty
 * 
*/

//Add your code here to create the object

let vehicle = {}; //change {} to your object

function print(vehicle){

    console.log("======Vehicle==========")
    //these lines check if the property is define... otherwise they print failed
    console.log("Color:   ", vehicle.color || "FAILED!")
    console.log("Weight:  ", vehicle.weight || "FAILED!")
    console.log("Height:  ", vehicle.height || "FAILED!")

    //in this case we check the property but since category is a function we
    //have to check for its presence before we call it
    console.log("Class:   ", (vehicle.category && vehicle.category()) || "FAILED!")
}

print(vehicle);

vehicle.weight = 3
print(vehicle)

vehicle.weight = 6
print(vehicle)

/**
 * Assignement 4
 * 
 * Task:
 * Create a function name IsAWin that accepts three parameters
 * cell1, cell2, and cell 3
 * if cell1, cell2 and cell 3 equal the lower case char 'x' 
 * and then print "X's win!"
 * if cell1, cell2 and cell 3 equal the lower case char 'o' (as in oscar) return true
 * print 'O's win!'
 * if there is no win print...
 * "Not a win!"
 * 
 * Objective: use of boolean conditions
 */

 /**
  * Assignment 5
  * 
  * Task: 
  * 
  * Create function named calculateYearOfBirth
  * It accepts a parameter as age in months
  * It needs to calculate the year of birth from the year Jan 1 2020
  * For example if the age is 14 months the birth year would be 2018
  * Do not do the print in the function... the function should only return
  * the year of birth
  * After you call the fucntion print out the year of birth
  * 
  * Objective: Think like a programmer and use of math operators
  */

/*
    Assignment 5
    Task:
    
    Create a function that prints the following information to the console
    Name: First Name Last Initial
    Hobbie: Favorite Hobby
    Home State:  Home State

    Replace the values with your name, your hobby and your home state
    Call the function to produce the output

    The function does not need any parameters... you can hard code the output

    Objective:
    Easy assignment to do excercise a little creativity
    
*/
