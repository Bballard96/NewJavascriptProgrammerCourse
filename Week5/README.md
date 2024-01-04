## Week 5 - Objects Revisited
## Hour 1
### 0. Pop quiz
### 1. Literal Objects
By this we should all already know that a literal object looks like this
```
let student = {
    firstName: "Joe",
    lastName: "Smith",
    birthDate: "01/15/1990",
    toString: function(){
       return `${this.firstName} ${this.lastName} ${this.birthDate}` 
    }
}


console.log(student.firstName)
console.log(student.lastName)
console.log(student.birthDate)
console.log(student.toString())

```
### 2. Constructor functions

There is another way to construct an object.  That is using constructor functions

```
function Student(firstName, lastName, birthDate){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.toString = function(){
       return `${this.firstName} ${this.lastName} ${this.birthDate}` 
    };
}
    


let student = new Student("Joe", "Smith", "01/15/1990");


console.log(student.firstName)
console.log(student.lastName)
console.log(student.birthDate)
console.log(student.toString())

```
### 3. Classes

## Hour 2
### 4. Properties, Dynamic Properties
We can assign properties dynamically to objects (this is one aspect of being dynamic)
```
let student = {}

console.log(student)

student.firstName = "Joe"
student.lastName = "Smith"

console.log(student)

```

Properties can also be assigned using brackets
```

let words = {}

words["name"] = "Joe"
words["noun"] = 2
console.log(words.name)
console.log(words.noun)
```
Let's examine an example where an object can be used as a map aka a dictionary

```
let words = {}

let phrase = [
  "Two roads diverged in a yellow wood,",
  "And sorry I could not travel both",
  "And be one traveler, long I stood",
  "And looked down one as far as I could",
  "To where it bent in the undergrowth;"
];

//loop through the lines
for(let lineIndex = 0; lineIndex < phrase.length; lineIndex++){
  let currentLine = phrase[lineIndex]
  
  //split the current line into individual words 
  //i.e. whereever a space is found between two elements
  let currentWords = currentLine.split(" ")
  
  //loop through all the current words
  //and count them
  for(let currentWordIndex = 0; 
      currentWordIndex < currentWords.length; currentWordIndex++){
    let currentWord = currentWords[currentWordIndex]
    if(words[currentWord]){
      let total = words[currentWord]
      total += 1
      words[currentWord] = total
    }
    else{
      words[currentWord] = 1
    }
  }  
}

//display the words
console.log(words)
```

### 5. Prototypical Chain
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#:~:text=Each%20object%20has%20a%20private,with%20null%20as%20its%20prototype.&text=Nearly%20all%20objects%20in%20JavaScript,top%20of%20a%20prototype%20chain.


```
let foo = {
  a: "a set as foo own",
  b: "b set as foo own"
}

function Foo(){
 this.a = "a set as Foo own"
 this.b = "b set as Foo own"
 this.f = function(){
   return "f called from Foo own"
 }
}


let littleFoo = new Foo()

Foo.prototype.a = "a set in proto"
Foo.prototype.b = "b set in proto"
Foo.prototype.f = function()
{
  return "f called from proto"
}

console.log(littleFoo.a)
console.log(littleFoo.a)
console.log(littleFoo.f)

let littleBar = Object.create(littleFoo)
console.log(littleBar.f)

littleBar.f = function(){
  return "f called from littleBar own"
}

console.log(littleBar.f)
```
Another way to think of own vs. prototype members is the
way it works in static languages.... 
Instance vs. Static Properties Methods
But that analogy breaks down using inheritance.
In static langugages statick methods cannot be inherited.


## Hour 3
### 7. Enhanced objects

### 8. Object destructuring

### 9. the mystery of this
https://medium.com/javascript-in-plain-english/hello-javascript-this-bb97c54f0823

### 10. Homework