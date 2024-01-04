## Algorithms

### 1. Sorting
```
myarray.sort()
myArray.sort( (a,b) => {

    if( a > b) return 1;
    if( b < a) return -1;

    return 0

})
```

Example to sort the letters in a name

```

let name = "Homer Simpson"
let chars = name.split('')

console.log(chars)

chars = chars.sort()
name = chars.join()

console.log(name)
```

### 2. Random numbers
Use Cases:
Games
Simulations
Scrambling

Games need to have random data (e.g. a slot machine, card game)
Simulation - may need simulation random input

Math.random returns a number between 0 and 1
So to get any number just multiply * 10 
Then add you min if you want numbers between 1-10 (including 10)
```

Math.floor((Math.random() * 10) + 1);

```

Get numbers between 50-60
```
Math.floor((Math.random() * 10) + 1);
```

Example getting numbers and storing them in buckets to 
see their distribution

```
let buckets = [0, 0,0,0,0,0, 0,0,0,0,0]

for(let i=0; i < 100; i++){
  
  let number = Math.floor(Math.random()*10+1);
  buckets[number]++;
}


buckets.forEach( (item, index, bucket) => console.log(`${index} ${item}`))
```

Example to create random phrases



```
let verbs = ['run','walked','hit','turned','touches','revolves around']
let nouns = ['man','woman','planet','earth','mars',]
let subjects = ['hammer','shovel','street']


for(let i=0; i < 10; i++){
  
  let verb = verbs[Math.floor(Math.random()*verbs.length)]
  let noun = nouns[Math.floor(Math.random()*nouns.length)]
  let subject = subjects[Math.floor(Math.random()*subjects.length)]
  
  randomPhrase = `The ${noun} ${verb} the ${subject}`;
  console.log(randomPhrase);
}
```
### 3. Reverse -  Array and String

Reversing an array
```
let numbers = [1,2,3,4,5]
numbers = numbers.reverse()
console.log(numbers)

```

Reverse a string
```

let name = "homer"
let chars = name.split('')
name = chars.reverse().join("")
console.log(name)

```

When you do it as function
```
//as a function
function reverseString(val){
  let name = val
  let chars = name.split('')
  name = chars.reverse().join("")
  return name
}

console.log(reverseString("amy"))
```
### 4. Anagram
We can solve in class

### 5. Palindrome
We can solve in class

### 6. Avg, Median, Sum, Min, Max

```
Math.min(1,2)
Math.min(1,2,3)
```

Get min using array
```
let numbers = [23,1,2,34,4,-10]
console.log(Math.min(...numbers))
```

Math.max -- same as min but finds the highest number
### 7. Distance between 2 points

```
In class
```

### 8. Sets - Intersection, Union, Difference

```
Homework challenges

1. Create a function for each function that returns a new array. Assumbe a and b are non empty integer arrays.

function union(a,b){}
function intersection(a,b){}
funcion difference(a,b){}

```
### 9. Convert an array into a set





### Resources
https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
