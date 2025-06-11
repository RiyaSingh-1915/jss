//  Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 345635758395450n


// Reference (Non primitive)
// Array, Objects,  Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "riya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) copy , Heap (Non-Primitive) reference
let myYoutubename = "riyasingh.com"

let anothername = myYoutubename
anothername = "panda and dumbo"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "riya@google.com"
console.log(userOne.email);
console.log(userTwo.email);
