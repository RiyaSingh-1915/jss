//object literal
const user = {
    username: "riya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
    //     console.log("Got user details from database");
    //    console.log(`Username: ${this.username}`);  //this defines ki which username we r talking about 
    //    console.log(this);    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
//  console.log(this); 
}

// -Constructor function
function User(username, loginCount, issLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = this.isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this    // this is bydefault implicitly
}

const userOne =new User("riya", 8,true);
const userTwo = new User("saurabh",11,false);   //overright hua so to avoid add new 
console.log(userOne.constructor);
// console.log(userOne);
// console.log(userTwo);

//steps for new
// new keyword creates a new object, construction function is called due to new keyword ,this keyword mein the function that is written is injected,miljata in function