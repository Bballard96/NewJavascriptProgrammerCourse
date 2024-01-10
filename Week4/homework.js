//create a function name myFilter
//that takes an array and filters by conditon
function myFilter(myArray, callBack){

}

let names = ["homer", "bart", "marge", "list"]

let filteredNames = myFilter(names, 
    function(item){
    return item.localeCompare("homer") != 0
})

let ages = [11,13,30,42]

let evenAges = myFilter(ages, function(item){
    item % 2 == 0;
})