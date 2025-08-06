 const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

//new object create
//  const mynewObject = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }



}

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name',{
    // writable: false,
    enumerable: false    //name haath gaya baaki details tha
    //  enumerable: true    name with sab detail aayega
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
for (let[key, value] of Object.entries(chai)) {   //retrite karna hai toh object ko 
   if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
   }
   
    
} 
    

    
