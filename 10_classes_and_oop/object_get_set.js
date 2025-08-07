const User = {
    _email: 'R@RS.com',   // _ defines privte property
    _opassword: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);