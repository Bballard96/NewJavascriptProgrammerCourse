/**********SNIPPET 1 */
for(let i = 0; i <= 4; i++){
    console.log(i)
  }
  
  let firstName = "fernando"
  let lastName = "zamora"
  let fullName = `${firstName} ${lastName}`
  
  
  
  console.log(fullName)


/****************Snippet 2 */
function doSomething(x, y){
    return x + y
  }
  
  const doSomethingAlso = function(x, y){
    return x * y
  }
  
  
  function higherOrderFunction(x, y, z){
    return z(x, y)
  }
  
  
  let a = higherOrderFunction(3,4, doSomething)
  let b = higherOrderFunction(3,4, doSomethingAlso)
  console.log(a)
  console.log(b)

  /***********Snippet 4 */
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
    return item % 2 == 0
}


let count = countMatches([1,2,3,4,5,6], matches)

console.log(count)

count = countMatches(["arthur","amy","anne","mary"], function(item){
  return item[0] == "a"
})

console.log(count)

/**********Snippet 5 */
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

/**********Snippet 6 */
//file somelib.js
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
  
  
  //mylib.js -> somelib
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
  
  doSomething(3)
  console.log(messageCaptured)
  
  doSomething(5, onFinish)
  console.log(messageCaptured)
  
  doSomething(15, onFinish)
  console.log(messageCaptured)
  
  doSomething(2, onFinish)
  console.log(messageCaptured)

  /***********Snippet 7 */
  fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch( function(error){
  
  console.log('errors')
  for(let prop of Object.getOwnPropertyNames(error)){
    console.log(`${prop}: ${error[prop]}`)
  }
  
})
;


/**************Snippet 8 */

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

results = filterX([
  {name: "amy", grade: "A"},
  {name: "bob", grade: "A"},
  {name: "anne", grade: "A"} ],
  (student) => student.grade == "B" )
console.log(results)

/**************Snippet 9 */
function multiply(a, c, b=1){
    return a * b * c
}

console.log(multiply(10))
console.log(multiply(5,6))