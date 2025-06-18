// Immediately Invoked Function Expressions (IIFE)
// global scope ke polluction can be variables ,declaration ko kaam karne ke liye iife used 

(function chai(){
    console.log(`DB CONNECTED`);         //names iife
})();                //; used to connect two iife

( (name) => {             //parameter passed
    console.log(`DB CONNECTED TWO ${name}`);    //unnamed iife
} )("riya")