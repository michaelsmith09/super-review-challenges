//--- Easy
//create a variable and assign it a number
let num = 11;

//minus 10 from that number
num = num - 10;

//print that number to the console
console.log(num);


//--- Medium
//create a variable that holds a value from the input
let input = document.querySelector('input').value

//add 25 to that number
input += 25;

//alert that number
alert(input)


//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', addTwoNums)

function addTwoNums(){
    console.log(num + input)
}
