## Hour 1
---
## Variables - Primitive Types
- similar to algebra where a variable represents a number
- except that unlike algebra in most cases the value of our variable the value is known... i.e. we are not solving for the value but 
instead holding the value so that we can use it
- variables are how programs store data in a computer program.. i.e. the memory of the program
- variables can hold very little data in size or very large
- in a program a variable can store different data types in memory
- JavaScript has 5 variable types - number, string, boolean,null, undefined - will talk more about this
- you don't tell JS the type to store it knows based on the data (e.g. x = 10 and x = "10" and x = false)
- valid variable names
   - case sensitive
   - must start with letter or underscore
   - characters must be alpha-numeric
   - should describe the data
      - firstName
      - lastName
      - age
      - url
   - do not use reserved words for variable names
      ```
       debugger, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, and with.
      ```
    - avoid future reserved words
      ```
        class, const, enum, export, extends, import, and super

        implements, interface, let, package, private, protected, public, static, and yield
      ```


## Data Types
- JavaScript has 5 different primitive types 
    - number, string, Boolean, null, undefined
    - number examples: 1, 3000, 3.567
    - string examples: 'John', 'This phrase', '3000', "John", "This", "3000", "3.567"
    - boolean: true, false
    - null
    - undefined:  more about this when we get to objects
```
    let firstName = "John"
    let age = 43
    let isOldEnough = true
    let isYoungMan = false

    age = age + 5
    let fullName = firstName + " " + "smith"

```
## Operators
- Basic operators are = + - / * %
- aka assignment addition, subtraction, division, multiplication, modulus
- Boolean and boolean codition operators are && ||, <, <=, >, >=, !=, == 
- and, or, greater than, greater than or equal to, less than, less than or equal to,
  not equal and equal
- all these operators can work on numbers
- the addition operator can work on strings to join strings together
- the assignment operator can work on strings as well to join strings together (concatenate)
- numbers can be in variable format or literal format
- variable example:  

```
 let age = 10
 let firstName = "Joe"
 let sentence  = firstName + " is " + age + " years old."
 // in newer versions of JS
 sentence = `${firstName} is ${age} years old`
```

- the sentence above is an example of variables and literals with the addition
  operator to form a new string
  Notice how the age gets added as string since there is a string (literal) to its left
- variable examples with numbers 
```
 let age = 8
 let ageInMonths = age * 12
 let ageInMonthsRoundedToTen = ageInMonths - (ageInMonths%10)
 let ageInDogYears = age * 7
 console.log("age: ", age)
 console.log("ageInMonths: ", ageInMonths)
 console.log("ageInMonthsRoundToTen: ", ageInMonthsRoundedToTen) 
 console.log("ageInDogYears: ", ageInDogYears)

```
-- Example of boolean operators and operations
```
let t = true
let f = false
let t_and_f = t && f
let t_or_f = t || f
let t_and_t = t && t
let t_or_t = t || t
let gtFalse = 1 > 2
let gtTrue = 2 > 1
let eqFalse = 1 == 2
let eqTrue = 1 == 1
let ltFalse = 2 < 1
let ltTrue = 1 < 2

console.log("t: ", t)
console.log("f: ", f)
console.log("t_and_f: ", t_and_f)
console.log("t_or_f: ", t_or_f)
console.log("t_and_t: ", t_and_t)
console.log("t_or_t: ", t_or_t)
console.log("gtFalse: ", gtFalse)
console.log("gtTrue: ", gtTrue)
console.log("eqFalse: ", eqFalse)
console.log("eqTrue: ", eqTrue)
console.log("ltFalse: ", ltFalse)
console.log("ltTrue: ", ltTrue)
```
--
those boolean conditions are great for booleans and numbers 
but... how do you comapare two strings for equality or lexographic order?
BONUS if you answer this.. we will cover it in the strings lesson

## Hour 2 - Functions
---
- functions are a small block of resuable code
- they are defined one but can be invoked many times
- they also serve as abstractions
    - abstractions are higher level summaries of multiple steps
    - e.g. getIngredients
    - e.g. connectToDatabase
- functions should have verb names (e.g. printReport, translate, filter)
- function may compute a value and return the result
- or the may just do some work
- it is best that a function does either one thing or the other (query, command)
- functions should have a good name that tells you what they do
- a function example
```
//All functions in javascript start with the word function
//they are followed by a name e.g. do something
//they are then followed by curly braces
//let's call the lines in between the opening and closing curly
//the body
//the body is where a function does all the work
//a functiona may have parameters. In this case a and b variables
//this function takes the value of a an b... adds them and returns 
//their sum
function sum(a,b){
    return a + b
}
```
- A function is only executed if it is called
to call the function above we can do this
```
let x = sum(3,4)

let a = 10
let b = 20
let c = sum(a,b)
```

```
**********************************************************

In class assignment - 10 minutes
declare two variables firstName and lastName
assign the values to a new variable called fullName
write the result to the console

also do this assignment
declare two variables val1 and val2 
declare another variable called sum
assign a numeric value to val1 and a different value to val2
place the sum of the two numbers in the sum variable
write the result to the console

**********************************************************
```

- Functions are a way to produce reusable code.... for example 
we can resuse the function doSomething above like this
** doSomething is very generic name and bad for that reason

- function names should be verbs when possible
- variables should be noun

```
let sum1 = sum(5,4)
console.log(sum1)

let sum2 = sum(100,50)
console.log(sum1)

//best to be aware that params should be of a known expected type
//so.. don't do this...
//but JS let's you do it
let fullname = sum("John", "Smith")
console.log(sum2)

```

- in newer JavaScript functions can arrow functions
```
let sum = (a,b) => a + b;
let result = sum(5,6);

```
In the example above the return is implicit because it does not have curly braces ("a body")

```
let sum = (a,b)={
    return a + b
}

let result = sum(5,6);
```
In the example above the sum requires a return explicitly because it has curly braces

## Decisions
- In order for programs to have any inteligence they must be able
  to make decisions
- Javascript has the if,else if, and else statements to make decisions
- The decisions should resolve to a boolean condition
- examples:  age > 43, age === 43, age >= 43, age <= 43, 
- examples with strings;  firstName.compareLocale("john") === 0;

```
    let firstName = "johny"
    let age = 44

    if(age >= 43 && firstName.localeCompare("john") == 0){
        console.log("You're too old for this John!")
    }
    else if(age >= 43 || firstName.localeCompare("steve") == 0){
        console.log(firstName + " you're too old for this!")
    }
    else if(age > 43){
        //Will this ever execute? Under what conditions
        console.log("you met the age requirements!")
    }
    else{
        console.log("not sure what to do here")
    }
```
- boolean operators ==, ===, <, >, >=, <=, 
- Condition Join Operators && (AND), || (OR)
 
## Hour 3 - Objects
---

Javascript is arguably an object oriented language.  

That means that you can create objects.

What is an object?

An object is a user defined type that may have data and behavior.

The data is in the form of properties and methods

Method is a fancy term for a function that belongs to an object.

Example of literal object:

```
let person = {

    firstName: "Joe",
    lastName: "Smith",
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}

person.firstName = "John"; //change name to john
console.log(person.fullName());

```
#OOP - Oh No

The world of object oriented programming is a concept that was
introduced a long time ago and became popular with the introduction of C++.
Since then many languages have been introduced that make use of this paradigm
like Java and C#.
Javascript is object oriented but not in the traditional sense like those
other languages.
One reason for that is that JavaScript uses prototypes rather than classes.
Also, it's dynammic nature prevents it from the wordiness and design patterns
that other languages need to overcome those short comings.

Don't worry too much about OOP, just know that it's there.
OOP is just a big phrase to describe a module of code that contains data and fucntions.

Just like real world objects.  In the real world an object like a car has data
such as number of wheels, color, parts, engine and it also has behavior, like
drive, steer, display.

In OOP objects are intended to make it easier to group and maintain code by
grouping small pieces of responisibilties under one module.

We can the reuse those modules to build other things.

The OOP craft and practice is vast.  Some well known concepts are SOLID, Design patterns, and Domain Driven Design.  Some of those concepts apply 
to JavaScript but not all, since JS is dynamic and really "classful".

Here are some examples of use for objects.

Group records of different types - Student, User, HouseRentals, Grades, etc.
Create life like abstractions for games - Deck of Cards, Player, Reel, 
Services in utility applications - FileCompresser, FileSplitter, ReportPrinter

In Javascript you will need objects usually to transfer data from place to another.
It's easier for us humans to transfer data that is grouped together under an entiry we can recognized.  For example StudentRecord, FaceBookUser,
BlogPost, FaceBookPost.

Can you identify the attributes that a FacebookPost or InstagramPost would have?

Let's try it.


## Homework

### Read the homework.md file in this same folder and follow the instructions