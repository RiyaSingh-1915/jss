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
    console.log("INNER:",a);
}



console.log(a);
// console.log(b);
// console.log(c);

