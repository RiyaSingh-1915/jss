//  const tinderUser = new Object()     //singleton object
 const tinderUser = {}     //nonsingleton object

 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false

//  console.log(tinderUser);
 
const regularUser = {
    email: "riya@gmail.com",
    fullname: {
        userfullname:{
            firstname: "riya",
            lastname: "singh",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructure: "riya"
}
//  course.courseInstructure

const {courseInstructure: instructor} = course

// console.log(courseInstructure);
console.log(instructor);

// {
//     "name": "riya",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
// random user me api 
//json formatter to convert api to code ,text etc.