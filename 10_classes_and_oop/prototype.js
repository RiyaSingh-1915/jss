// let myName = "riya     "
// let myChannel = "wonders    "

// console,log(myName.truelength);

let myHeros = ["thor", "ironman", "spiderman", "hulk"]

let heroPower = {
    thor: "hammer",
    ironman: "suit",
    spiderman: "web",
    hulk: "smash",

    getSpiderManPower: function(){
        console.log(`Spiderman's power is ${this.spiderman}`);
    }
}

Object.prototype.riya = function(){
    console.log(`riya is present in all objects`);

}

Array.prototype.heyriya = function(){
    console.log(`riya says hello`);

}
// heroPower.riya()
// myHeros.riya()
// myHeros.heyriya()
// heroPower.heyriya()

//inheritance
const User={
    name: "riya",
    email:"riya@google.com"
}



const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assigment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode    "

String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.length}`);
    console.log(`True length is ${this.trim().length}`);

}

anotherUsername.truelength()
"riya".truelength()
"icetea".truelength()

