//Create a conditonal that checks their age
//If under 16, tell them they can not drive

//If under 18, tell them they can't hate from outside the club, because they can't even get in

//If under 21, tell them they can not drink

//If under 25, tell them they can not rent cars affordably

//If under 30, tell them they can not rent fancy cars affordably

//If under over 30, tell them there is nothing left to look forward too
let age = 25

if (age < 16){
    console.log("they can not drive")
} else if (age < 18) {
    console.log("they can't hate from outside the club, because they can't even get in")
} else if (age < 21) {
    console.log("they can not drink")
} else if (age < 25) {
    console.log("they can not rent cars affordably")
} else if (age < 30) {
    console.log("they can not rent fancy cars affordably")
} else if (age < 30 || age > 30){
    console.log("there is nothing left to look forward too")
} else {
    console.log("Something cool")
}

//--- Harder
//On click of the h1

//Take the value from the input

//Place the result of the conditional in the paragraph


let ageAbove = Number(document.querySelector('input').value)

document.querySelector('h1').addEventListener('click'ageCheck)

let p = document.querySelector('p')

function ageCheck(){
    let ageAvove = Number(document.querySelector('input').value)

    if (ageAbove < 16){
        p.innerText = "they can not drive"
    } else if (ageAbove < 18) {
        p.innerText = "they can't hate from outside the club, because they can't even get in"
    } else if (ageAbove < 21) {
        p.innerText = "they can not drink"
    } else if (ageAbove < 25) {
        p.innerText = "they can not rent cars affordably"
    } else if (ageAbove < 30) {
        p.innerText = "they can not rent fancy cars affordably"
    } else if (ageAbove < 30 || age > 30){
        p.innerText = "there is nothing left to look forward too"
    } else {
        p.innerText = "Something cool"
    }
}