
function(){
    callme()  // function ko refer nahi karta hai this ,this refers global EC
}

//in gobalEC  this refers window = {this = window}butif not in window than node = {}

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email,password){
    SetUsername.call(this,username)    //call se refence mil raha hai username ka

    this.email = email
    this.password = password

}

const riya = new createUser("riya","riya@gmil.com","123")
console.log(riya);