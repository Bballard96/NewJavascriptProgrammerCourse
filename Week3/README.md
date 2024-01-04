## Hour 1 - Strings

- It is a way for the program to store sequence of chars or bytes that represent chars
- When should I use strings?
  - when the value is not used for math
  - when using it for a key (sorting)
  - when example of number strings
     - ssn
     - driver license number
     - barcodes
     - isbn
  - when to use numbers
    - prices
    - quanities
    - averages
    - math

- Strings are immutable.  Simply means they cannot be changed.  The variables can be reassigned a value but the string cannot be changed.

```
let firstName = 'Joe'
console.log(firstName[1]) //prints 'o'

//because strings are immutable
//this statement fails silently
firstName[1] = 'a'
console.log(firstName[1]) //prints 'o'
```

- Strings behave like an array... sort of

```
let firstName = 'Bart Simpson'

for(let i=0; i<firstName.length; i++){
  console.log(firstName[i])
}
```
There is quite a bit there that we have not covered yet
- square brackets (these => [])
- for loop
- arrays 

### some algorithms require use of ascii table
- in ascii 'A' equals 65 and 'Z' equals 65+25 or 90
- in ascii 'a' equals 97 and 'z' equals 97 + 25 or 122
- the number 0 is 48 and the number 9 is 48 + 9 or 57
-  myString.charCodeAt(index)

### String Interpolation - Remember this?
```
let firstName = "Lisa"
let lastName = "Simpson"
let fullName = firstName + " " + lastName

//better way
let fullName2 = `${firstName} ${lastName}`
```

### Case sensitivity - how to avoid it with upper or lower

```
let firstName = "Homer"
let otherFirstName = "Homer";

console.log(`1. ${firstName} equals ${otherFirstName} is: `, firstName.localeCompare(otherFirstName))

otherFirstName = "homer"
console.log(`2. ${firstName} equals ${otherFirstName} is: `, firstName.localeCompare(otherFirstName))
console.log(`3. ${firstName} equals ${otherFirstName} is: `, otherFirstName.localeCompare(firstName))

let a = firstName.toLowerCase()
let b = otherFirstName.toLowerCase()

console.log(`4. ${a} equals ${b} is: `, a.localeCompare(b))

```

### Finding a substring within a string

- find the word 'apple' in 'When an apple fell on Sir Isaac Newton's head'

- split the string and find the word
- string.includes('appple')
- string.indexOf('apple')
- string.indexOf('apple', 5)
- idxOfApple = string.indexOf('apple')
- idxOfSpace = string.indexOf(' ', idxOfApple)
- let word = string.substring(idxOfApple, idxOfSpace)

### Comparing Strings for equality 
if(string1.localeCompare(string2) == 0)

### Comparing Strings for lexographic order (alphabetical order)
```
if(string1.localeCompare(string2) > 0)
```

---
## Hour 2 - Arrays
---

### basics
- a collection of like objects or types
- each value in the array is called an element
- elements can be accessed by the index
- arrays have a zero based index
- the length of array indicates that the max index is length-1
   - e.g. if array has a length of 10, the last index is 9
   - e.g. if array has a length of 5, the last index i 4 and so forth
   - the first index is always 0, if the array has a length of at least 1
- In JS arrays are a specialized type of object
- Inherits properties from the Array.prototype
- i.e. arrays have methods (we'll cover array methods later)
- a key property of an array is it's length property
- arrays can be created different ways
  - array literals
  ``` 
  let names = ["homer", "bart", 'lisa"]
  let ages = [40, 13, 11]

  ```
  - from variables
  ```
    let age1 =  11
    let age2 = 13
    let ages = [age1, age2]
  ```
  - from push and unshift
  ```
  let ages = []
  ages.push(11)
  ages.push(13)
  console.log(ages)
  ```
  - from spread operator
  ```
    let ages = [1,2,3]
    ages = [...ages]
    ages = [...ages, 4]
    ages = [...ages, ...ages]
    console.log(ages)
  ```
- Arrays are similar to strings becaue they are sequence of "values"
- Typical array has the same data types in the array (in JS they can be mixed)
- Arrays in Javascript keep track of their length (size)
- JavaScript is not bound to the same data type... but 99% you will use it like that

```
let movies = ['The Matrix', 'King Kong', 'Jumanji', 'Secret Life of Pets']
let rankings = [1,5,7,8,10]

console.log(movies[0])   //prints the first movie
console.log(movies[1])   //prints the second movie

console.log(rankings[0])   //prints the first movie
console.log(rankings[1])   //prints the second movie

//...


```
- Arrays in JavaScript have a length property
- So... you can use that to know the right outerlimit
- For example
```
   for(let i=0; i < movies.length; i++){
       console.log(movies[i])
   }
```

### Adding and Removing Items to an array

- push
- pop
- shift
- unshift
- slice
- delete - Do not use this

### Finding Items in an array

- Use a for loop and compare using > < === for numbers or 
  localeCompare for strings
- There is a better way and accepted as best practice
- So don't do that...
- We will cover that when we get to the array methods portion

### Copying an array

- there are several ways
- Method one create a new array and use a for loop with push
- destructuring    
```
let movies = ["The Matrix", "King Kong"]

//Clones the array
let newMovies = [...movies]

//clones the array and adds a new movie at the end
let myLibrary = [...movies, "Bolt"]
```

## passing arrays around

- Arrays can be passed to functions as parameters
- they can also be returned from functions

```
function print(list, header){
    console.log(`*****${header}*****`)
    for(let i=0; i < list.length; i++){
        console.log(list[i])
    }
}

function reverse(stringList){
    let newList = []

    for(let i=stringList.length; i > 0; i--){
        newList.push(stringList[i-1])
    }

    return newList
}

function reverseInPlace(list){
    for(let i=0; i < list.length/2; i++){
        //swap
        let temp = list[i]
        list[i] = list[list.length-(i+1)]
        list[list.length-(i+1)] = temp
    }
}

let movies = ["The Matrix", "King Kong", "Terminator"]
print(movies, "First Print");

movies = reverse(movies)
print(movies, "After Reverse")

reverseInPlace(movies)
print(movies, "After Reverse in Place")
```

- strings are like arrays of other strings except....
- strings have a length property like an array
- strings can be looped throug like an array
- strings elements can't be modified unlike an array

- arrays can hold different types even more arrays

```
let mySoup = [
    "carrots", 
    "water",
    { name: "spices", ingredients: ["salt", "pepper", "paprika"] },
    { name: "mixedVeggies", ingredients: ["carrots", "corn", "green beans"] },
    21
]

console.log("mySoup[0] " + mySoup[0])
console.log("mySoup[1] " + mySoup[1])
console.log("mySoup[2].name " + mySoup[2].name)
console.log("mySoup[2].ingredients[0] " + mySoup[2].ingredients[0])
console.log("mySoup[2].ingredients[1] " + mySoup[2].ingredients[1])
console.log("mySoup[2].ingredients[2] " + mySoup[2].ingredients[2])
console.log("mySoup[4] " + mySoup[4])

```
---
## Hour 3 - Loops
---
- For loop
```
  //example of a loop that prints 1-5
  for(let i=1; i <= 5; i++){
      console.log(i)
  }

  //example of a loop that prints chars in a string
  let name = "Bart Simpson";
  for(let i=0; i < name.length; i++)
  {
      console.log(name[i])
  }

  //example of a loop that prints each number in array
  let nameArray = ['b', 'a', 'r', 't'];
  for(let i=0; i < nameArray.length; i++)
  {
      console.log(nameArray[i])
  }

  //example of loop that doubles each item in array
  let numbers = [1,2,3,4,5];
  for(let i=0; i < numbers.length; i++)
  {
      numbers[i] = numbers[i] * 2;
      console.log(numbers[i])
  }
```
- for loop signature or prototype has 3 parts; initializer, condition, incrementer
for(initializer; condition; incrementer)

- for loop has a body
```
  for(...){
      //this code is inside the body or block
  }
```  
- for loop can have a body with no curly braces
```
  for(...)
     //one liner statement here

  //what will this print
let i = 1
for(; i <= 10; i++)
   console.log(i);
   console.log(i*2)

//common gotcha
var alphabet = ['a', 'b', 'c']
var i = 0;
for(;i<2;i++);
{
    console.log(alphabet[i])
}
```
- While loop
```
let numbers = [2,3,-1,3,10,5,3,1]
let number = numbers[0]
let i = 0
while(number < 5){
    console.log(number)
    number = numbers[i]
    i++
}
```
- Do While Loop
```
let numbers = [2,3,-1,3,10,5,3,1]
let number = numbers[0]
let i = 0
do{
    console.log(number)
    number = numbers[i]
    i++
}
while(number < 5)
```
- For in
- For of