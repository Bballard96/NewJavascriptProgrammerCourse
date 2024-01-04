
this.x = "x"
function foo(){
  console.log(this.x)
}

function Student(firstName1, lastName1, birthDate1){
    let foo = "foo"
    
    let self = this;
    function doPrivateMethod(){
      console.log("private method " + self.firstName + " " + this.x)
 
    }
    
    this.firstName = firstName1;
    this.lastName = lastName1;
    this.birthDate = birthDate1;
    this.toString = function(){
      doPrivateMethod();
      return `${this.firstName} ${this.lastName} ${this.birthDate} ${foo}` 
    };
}
    

     foo();


let student = new Student("Joe", "Smith", "01/15/1990");


console.log(student.firstName)
console.log(student.lastName)
console.log(student.birthDate)
console.log(student.toString())
console.log(student.foo)
console.log(student.doPrivateMethod);


student = Student("Joe", "Smith", "01/15/1990");


console.log(student.firstName)
console.log(student.lastName)
console.log(student.birthDate)
console.log(student.toString())
console.log(student.foo)
console.log(student.doPrivateMethod);

//////////////////////////////


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
   console.log(littleFoo.f())
   
   let littleFoo2 = new Foo()
   littleFoo2.f = function(){
     return "f from own for lf2"
   }
   
   console.log(littleFoo2.f())
   console.log(littleFoo.f())
   
   
   let littleBar = Object.create(littleFoo)
   console.log(littleBar.f)
   
   /*
   littleBar.f = function(){
     return "f called from littleBar own"
   }
   */
   
   console.log(littleBar.f())

   /////////////////////////
   let words = {}

words["name"] = "Joe"
words["noun"] = 2
console.log(words.name)
console.log(words.noun)
words["compound word"] = "something"
console.log(words["compound word"])

//////////////////////////
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
///////////////////////////////////////
