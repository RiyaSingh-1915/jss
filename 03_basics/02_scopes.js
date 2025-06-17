// let a = 10
//     const b = 20
    // var c = 30       
     // in function and if else'{}'this is called scope      
var c = 300  //globel scope 
let a = 300
if(true){
    let a = 10
    const b = 20   //block scope
    // var c = 30
    // console.log("INNER:",a);
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "riya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}
// one()

if(true) {
    const username = "riya"
    if (username === "riya"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++ 
 console.log(addOne(5))
function addOne(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){          //variable hold also called hosting
    return num +2
}

