// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "riya",
    "full name": "riya singh",
    [mySym]: "mykey1",
    age: 21,
    location: "mumbai",
    email: "riya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "riya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "riya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");

}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());