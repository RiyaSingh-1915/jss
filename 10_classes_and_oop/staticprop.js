class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){     //static won't allowto give access to anyone
        return '123'
    }
}

const riya = new User("riya")
// console.log(riya.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
}
}

const iphone = new Teacher("iphone","i@phone.com")
    // iphone.logMe()
    console.log(iphone.createId());
