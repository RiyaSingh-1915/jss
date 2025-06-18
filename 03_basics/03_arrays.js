const user = {
    username: "riya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "riya"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "riya"
//     console.log(this.username);
// }

const chai = () => {
    let username = "riya"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2           //{} in this return is written
// }
// const addTwo = (num1, num2) =>  (num1 + num2 )       //()in this no return 

const addTwo = (num1, num2) => ({username:"riya"})
console.log(addTwo(3,4))


// const myArray = [5,6,3,6,7,8]
// myArray.forEach()