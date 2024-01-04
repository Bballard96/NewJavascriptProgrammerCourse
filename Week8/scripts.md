```
let myArray = [4,1,3,2]

myArray.sort( (a,b) => {

    if( a > b) return 1;
    if( b > a) return -1;

    return 0

})

console.log(myArray)


let myArray2 = [{firstName: "John"}, {firstName: "Amy"}]

myArray2.sort( (a,b) => {

    if( a.firstName > b.firstName) return 1;
    if( b.firstName > a.firstName) return -1;

    return 0

})

console.log(myArray2)

```


```

let name = "Homer Simpson"
let chars = name.split('')

console.log(chars)

chars = chars.sort()
name = chars.join("")

console.log(name)
```


```
function isAnagram(word, suspect){
  
  let chars1 = word.split('').sort().join('')
  let chars2 = suspect.split('').sort().join('')


  return chars1 === chars2;
}


function assert(actual, expected, testName){
  if(actual === expected){
    console.log(`${testName} Passed`)
  }
  else{
     console.log(`${testName} Failed expected ${expected} but was ${actual}`)
  }
}


assert(isAnagram('may', 'amy'), true, "Test 1")
assert(isAnagram('may', 'yam'), true, "Test 2")
assert(isAnagram('may', 'mayo'), false, "Test 3")
assert(isAnagram('abcdef', 'fdeabc'), true, "Test 4")
```


```
//////////////HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

  <div id="container">
    
    
  </div>
</body>
</html>

/////////////////////////JS
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => renderData(json))



function renderData(data){
  
  let containerDiv = document.getElementById("container")
  
  data.forEach(todo =>{
    
    let p = document.createElement("p")
    p.innerHTML = `${todo.id}: ${todo.title}`
    containerDiv.appendChild(p)
  })
  
}
```

```
function isPalindrome(word){
  
  let forward = word
  let backwards = word.split('').reverse().join('')
  
  return forward == backwards
}



function assert(actual, expected, testName){
  if(actual === expected){
    console.log(`${testName} Passed`)
  }
  else{
     console.log(`${testName} Failed expected ${expected} but was ${actual}`)
  }
}

assert(isPalindrome('may'), false, "Test 1")
assert(isPalindrome('racecar'), true, "Test 2")
assert(isPalindrome('anitalavalatina'), true, "Test 3")

```


```
console.log(Math.min(20,-3,1,2))

let numbers = [23,1,2,34,4,-10]
console.log(Math.min(...numbers))


let sum = 0
for(let i=0; i < numbers.length; i++){
  sum += numbers[i]
}
console.log(sum)


sum = numbers.reduce( 
   function(val, item){
     console.log(`${val} ${item}`)
     return val + item
   },
   0
)

console.log(sum)
console.log(sum/numbers.length)

let sortedNumbers = numbers.sort()
console.log(sortedNumbers)

let median = 0

if(numbers.length%2==0){
  median = (sortedNumbers[numbers.length/2-1] + sortedNumbers[numbers.length/2])/2
}
else{
  median = sortedNumbers[Math.floor(numbers.length/2)]
}

console.log(median)

```