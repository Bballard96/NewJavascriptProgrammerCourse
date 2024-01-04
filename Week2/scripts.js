
function doExample1(){

    let person = {

        firstName: "Joe",
        lastName: "Smith",
        fullName: function(){
            return this.firstName + " " + this.lastName
        }
    }

    person.firstName = "John"; //change name to john
    console.log(person.fullName());

    function handleObject(p){
        console.log("First Name: ", p.firstName)
        console.log("Last Name: ", p.lastName)
    }

    //Call handle object and we can pass the person instance as a parameter
    handleObject(person)

}

function doExample2(){
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
}

doExample1()
doExample2()
