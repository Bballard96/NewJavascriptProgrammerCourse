console.log("Hello World!");

function calculator(a, b, operator){
    if(operator == "+"){
        return a + b;
    }
    else if(operator == "-"){
        return a - b;
    }
}

let a = calculator(5,5,"+")
let b = calculator(5,5, "-")

console.log(a)
console.log(b)
b = "Fernando"
console.log(b)