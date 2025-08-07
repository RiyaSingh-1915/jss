class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
get email(){
    return this._email.toUpperCase()
}
   
set email(value){
    this._email = value    // in set we don't return valueswe just set 
}

    
    get password(){            //case ke bhar se koi valuse get karna chate ho 
        // return this._password.toUpperCase() 
        return `${this._password}riya`
    }

    set password(value){       //to set the value 
        // this._password = value.toUpperCase()
        this._password = value
    }

}
// getter and setter are used so that no one can access apart from user

const riya = new User("r@riya.ai", "abc")
console.log(riya.password);
console.log(riya.email);

