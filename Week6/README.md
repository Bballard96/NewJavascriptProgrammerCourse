## Hour 1 DOM Manipulation
JavaScript on the dom

- JavaScript DOM API
- [https://www.sitepoint.com/jquery-document-ready-plain-javascript/](https://www.sitepoint.com/jquery-document-ready-plain-javascript/)

Try this snippet to see how to set write to the DOM using JS
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<div id="foobar">
  test
</div>
<div class="classfoobar">
  div2
</div>
<div class="classfoobar">
  div3
</div>

<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
  
  
</body>
</html>

//setup event listener for document loaded
document.addEventListener('DOMContentLoaded', (event) => {
 
  let foobarElement = document.getElementById('foobar');
  
  //notice innerHTML 'HTML' is all upper case
  foobarElement.innerHTML = "This came from javascript"
  
  let divs = document.getElementsByClassName('classfoobar')
  
  for(let i=0; i < divs.length; i++){
    divs[i].innerHTML = `Div ${i+1}`
  }
  
  
  let lis = document.getElementsByTagName('li')
  
  for(let i=0; i < lis.length; i++){
    lis[i].innerHTML = `item ${i+1}`
  }
  
})
```
- getElementById returns one element if found or null otherwise
```
<div id="my-div-id"></div>
```
Element can be anything but it must be unique within the page (DOM)
Naming follows rules for class and ids... any uppper case and lowercase values and dashes.  Dashes are preferred over camel casing

- getElementsByClassName returns an array of elements if found
Since it returns an array you can loop through or get the first element if you know there is only one element
example of class setting
```
<div class="my-class-name"></div>
```
- getElementsByTagName returns an array of elements if found
Tag is the actual name of the tag (e.g. div, li, a, input, ul, etc)

### Element props

```
let element = document.getElementById('some-id')
element.innertHTML = "text or HTML"
let innerHTML = element.innerHTML
```

### Create a form and respond to click event

- HTML
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<form>
  <label for="firstName">First Name:</label>
  <input type="text" name="firstName" id="firstName">
  <br>
  <br>
  <label for="lastName">Last Name:</label>
  <input type="text" name="lastName" id="lastName">
  <br>
  <br>
  
  <label for="ageGroup">Age group:</label>

  <select name="ageGroup" id="ageGroup">
    <option value="child">1-12</option>
    <option value="teen">13-19</option>
    <option value="millenial">20-35</option>
    <option value="genx">35-55</option>
    <option value="boomer">55+</option>
    
  </select>
  
  <br>
  <br>
  <input type="submit" id="submit" value="Submit">
  
</form>  
  
<div id="output">
  
</div>
  
</body>
</html>
```
### JavaScript
```
//setup event listener for document loaded
document.addEventListener('DOMContentLoaded', (event) => {
 
  let submitButton = document.getElementById("submit")
  
  submitButton.addEventListener("click", handleSubmitClick)
  
})

//fucntion to handle logic when submit button is clicked
function handleSubmitClick(e){
  //prevents a submit http request to happen
  e.preventDefault()
  
  let output = document.getElementById('output')
  let firstNameElement = document.getElementById('firstName')
  let lastNameElement = document.getElementById('lastName')
  
  var ageGroupElement = document.getElementById("ageGroup");
  var ageGroup = ageGroupElement.options[ageGroupElement.selectedIndex].value;
  
  output.innerHTML = `<br>First Name: ${firstNameElement.value} <br>Last Name: ${lastNameElement.value} <br>Age Group: ${ageGroup}`   
}
```
### Let's change our code slightly

This time we are going to add full html elements to the DOM

```
<div id="output">
  <ul id="ulOutput">
  </ul>
</div>

function handleSubmitClick(e){
  //prevents a submit http request to happen
  e.preventDefault()
  
  let output = document.getElementById('ulOutput')
  let firstNameElement = document.getElementById('firstName')
  let lastNameElement = document.getElementById('lastName')
  
  var ageGroupElement = document.getElementById("ageGroup");
  var ageGroup = ageGroupElement.options[ageGroupElement.selectedIndex].value;

  let li = document.createElement("li")
  let content = document.createTextNode(`${firstNameElement.value} ${lastNameElement.value} ${ageGroup}`)
  li.appendChild(content)
  output.appendChild(li)
}
```

### Example 3 using array.filter

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<form>
  <label for="firstName">First Name:</label>
  <input type="text" name="firstName" id="firstName">
  <br>
  <br>
  <label for="lastName">Last Name:</label>
  <input type="text" name="lastName" id="lastName">
  <br>
  <br>
  
  <br>
  <br>
  <input type="submit" id="submit" value="Filter">
  
</form>  
  
<div id="output">
  <ul id="ulOutput">
  </ul>
</div>
  
</body>
</html>
let persons = [
  
  {firstName: "Amy", lastName: "Anderson", ageGroup: "Gen X"},
  {firstName: "Anthony", lastName: "Combs", ageGroup: "Gen X"},
  {firstName: "Andy", lastName: "Warhol", ageGroup: "Gen X"},
  {firstName: "Bob", lastName: "Ames", ageGroup: "Boomer"},
  {firstName: "Maria", lastName: "Jones", ageGroup: "Millenial"},
  {firstName: "Mike", lastName: "Smith", ageGroup: "Gen X"},
  {firstName: "Pablo", lastName: "Picasso", ageGroup: "Boomer"},
  {firstName: "Mike", lastName: "smith", ageGroup: "Gen X"},
  {firstName: "Anthony", lastName: "Ames", ageGroup: "Gen X"},
  {firstName: "Bob", lastName: "Combs", ageGroup: "Child"},
  {firstName: "Maria", lastName: "Andrade", ageGroup: "Gen X"},
  
]


//setup event listener for document loaded
document.addEventListener('DOMContentLoaded', (event) => {
 
  let submitButton = document.getElementById("submit")
  
  submitButton.addEventListener("click", handleSubmitClick)
  
  fillUi(persons)
  
})


function fillUi(persons){
  let output = document.getElementById('ulOutput')
  output.innerHTML = ""
  
  for(let i=0; i < persons.length; i++){
    let person = persons[i] 
    let li = document.createElement("li")
     
     let content = document.createTextNode(`${person.firstName} ${person.lastName} ${person.ageGroup}`)
     li.appendChild(content)
     output.appendChild(li)    
  }
}

//fucntion to handle logic when submit button is clicked
function handleSubmitClick(e){
  //prevents a submit http request to happen
  e.preventDefault()
  
  let firstNameElement = document.getElementById('firstName')
  let lastNameElement = document.getElementById('lastName')
  
  let ageGroupElement = document.getElementById("ageGroup");

  let filteredPersons = persons
  if(firstNameElement.value || lastNameElement.value){
    filteredPersons = persons.filter( (p) => 
     {
      let firstNameMatch = false
      let lastNameMatch = false
      if(firstNameElement.value){
        firstNameMatch = p.firstName == firstNameElement.value
      }
      if(lastNameElement.value){
        lastNameMatch = p.lastName == lastNameElement.value
      }

      return firstNameMatch || lastNameMatch
    
    })
  }
  
  fillUi(filteredPersons)
}
```

### In the code above we added an li element tot he UL
That happens each time the button is clicked

## Hour 2 - Array Methods

#### Each
Loop through elements


A for each example

```
let persons = [
  
  {firstName: "Amy", lastName: "Anderson", ageGroup: "Gen X"},
  {firstName: "Anthony", lastName: "Combs", ageGroup: "Gen X"},
  {firstName: "Andy", lastName: "Warhol", ageGroup: "Gen X"},
  {firstName: "Bob", lastName: "Ames", ageGroup: "Boomer"},
  {firstName: "Maria", lastName: "Jones", ageGroup: "Millenial"},
  {firstName: "Mike", lastName: "Smith", ageGroup: "Gen X"},
  {firstName: "Pablo", lastName: "Picasso", ageGroup: "Boomer"},
  {firstName: "Mike", lastName: "smith", ageGroup: "Gen X"},
  {firstName: "Anthony", lastName: "Ames", ageGroup: "Gen X"},
  {firstName: "Bob", lastName: "Combs", ageGroup: "Child"},
  {firstName: "Maria", lastName: "Andrade", ageGroup: "Gen X"},
  
]


console.log("***************** Using Anomymous Functions *************")

persons.forEach(
   function(x){
     
     console.log(`${x.firstName} ${x.lastName} ${x.ageGroup}`)
   }
)

console.log("***************** Using Arrow Functions **************")

persons.forEach(
   x => {
     
     console.log(`${x.firstName} ${x.lastName} ${x.ageGroup}`)
   }
)

```
#### Filter
Filter uses a deferred action to allow developer to customize
the criteria for filtering

```

let persons = [
  
  {firstName: "Amy", lastName: "Anderson", ageGroup: "Gen X"},
  {firstName: "Anthony", lastName: "Combs", ageGroup: "Gen X"},
  {firstName: "Andy", lastName: "Warhol", ageGroup: "Gen X"},
  {firstName: "Bob", lastName: "Ames", ageGroup: "Boomer"},
  {firstName: "Maria", lastName: "Jones", ageGroup: "Millenial"},
  {firstName: "Mike", lastName: "Smith", ageGroup: "Gen X"},
  {firstName: "Pablo", lastName: "Picasso", ageGroup: "Boomer"},
  {firstName: "Mike", lastName: "Anderson", ageGroup: "Gen X"},
  {firstName: "Anthony", lastName: "Ames", ageGroup: "Gen X"},
  {firstName: "Bob", lastName: "Combs", ageGroup: "Child"},
  {firstName: "Maria", lastName: "Andrade", ageGroup: "Gen X"},
  
]


console.log("***************** Using Anomymous Functions *************")

let filtered1 = persons.filter(
   function(x){
     if(x.lastName == "Anderson"){
       return true
     }
     
     return false
   }
)

console.log(filtered1)

console.log("***************** Using Arrow Functions **************")

let filtered2 = persons.filter(x => x.lastName == "Anderson")
console.log(filtered2)

```
#### Some
Some returns either true or false if the criteria is met 
for any item
```
persons.some( x => x.lastName == "Anderson")
```
#### Reduce
```
let numbers = [90, 9, 5, 12]


let sum = numbers.reduce((result, item)=> item+result, 0)
console.log(sum)
```
#### Map
Converts an array of one thing into an array of another thing

In this example we convert an array of numbers to
an array of strings with div elements
```
let numbers = [90, 9, 5, 12]


let elements = numbers.map( 
  (item, index) =>{
     return `<div id="${item}" key=${index}>`   
  }
)
  
elements.forEach( x => console.log(x)) 

```




