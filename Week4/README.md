
Hour 1
### 0. Pop quiz
### 1. Higher Order Functions
Higher order functions are functions that accept functions as parameters or 
Return functions

```

function countMatches(myArray, matches){
    let count = 0;
    for(let i=0; i < myArray.length; i++){
        if(matches(myArray[i])){
            count++
        }
    }

    return count
}

let matches = function(item){
    return item > 2
}


let count = countMatches([1,2,3,4,5], matches)

console.log(count)

```

another example this time it returns a function

```
function getMathFunction(operatorChar){
    if(operatorChar === '-'){
        return function(a, b){
            return a - b
        }
    }
    if(operatorChar === '+'){
        return function(a, b){
            return a + b
        }
    }
    if(operatorChar === '*'){
        return function(a, b){
            return a * b
        }
    }
    if(operatorChar === '/'){
        return function(a, b){
            return a / b
        }
    }
}

let mathOp = getMathFunction('*')
let result = mathOp(3,4)
console.log(result)


mathOp = getMathFunction('-')
result = mathOp(15,4)
console.log(result)
```
===============================
# Hour 2
### 2. Callbacks - 

There are situations when you can only receive the results from
a function via a call back.  In those times it is not possible to 
wait on the return.  
The reason for that is because some calls are made asynchronously
What is asynchronous vs. synchronous

```
function doSomething(value, onFinish){
  
  if(value % 3 === 0 && value % 5 === 0){
    onFinish("fizzbuzz")
  }
  else if(value % 3 === 0){
    onFinish("fizz")
  }
  else if(value % 5 === 0){
    onFinish("buzz")
  }
  else{
    onFinish("", "neither")
  }
}

let messageCaptured = ""

function onFinish(message, error){
  if(error){
    console.log(`error!!! ${error}`)
  }
  else{
    messageCaptured = message
    console.log(`${message}`)
  }
}

doSomething(3, onFinish)
console.log(messageCaptured)

doSomething(5, onFinish)
console.log(messageCaptured)

doSomething(15, onFinish)
console.log(messageCaptured)

doSomething(2, onFinish)
console.log(messageCaptured)

```
### 3. Arrow functions
arrow functions

1. Are also known in some languages as lambda expressions
2. They provide a shorter way to write functions
3. They are cleaner and clearer and less wordy
4.  Arrow functions also have one advantage over regular functions
   they automatically bind to "this" when declared inside a class object

```
function doSomething(a,b){
    return a + b
}

const doSomething = (a,b) => a + b
const doSomethingAlsao = (a,b) +{
    return a + b
}

//another example
function doSomething(){
    return 10
}

//since there are no parameters we need an empty set of parentheses
const doSomething = () => 10

```


### 4. IIFES

=======================
Hour 3

### 5. Optional parameters 

```
function matches(item, index){

   console.log(item)
   console.log(index)

}

matches(10)

```

### Filter Example

```

function filterX(myArray, matches){

    let newArray = []
    for(let i=0; i < myArray.length; i++){
        if(matches(myArray[i], i)){
            newArray.push(myArray[i])
        }
    }

    return newArray
}

let results = filterX([1,2,3,4,5,6,7], (item) => item % 2 == 0)
console.log(results)

results = filterX([1,2,3,4,5,6,7], (item, index) => index % 2 == 0)
console.log(results)
```



### 6. Default values for parameters

```
function multiply(a, b = 1){
    return a * b
}

console.log(multiply(10))
console.log(multiply(5,6))

```
### 7. Homework