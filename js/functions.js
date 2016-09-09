// Design the following

function multiply(a, b) {
    return a * b;
}

multiply(1, 2); // THis is how we use functions we "define" or "create"
/// 1) a function that adds up two numbers; a function that takes in 
// 2 inputs
function add(a, b) {
    return a + b;
}
add(4, 4)

// 2) a function we can use to greet a human with 
// (it takes in the name and spills out the greeting)
console.log("HI there Deborah"); // hints: in  your solution use "concatenation"


function sayHello(name) {
    var greeting = "Hi there " + name;
    return greeting;
}
console.log(sayHello("Deborah"))
// More challenging functions (introduced in CS)
// a) Factorial function
/*

Given a number, we multiply all its previous terms to get us a final 
result. e.g.
3 factorial gives: 3 x 2 x 1 x 0 factorial (when zero is reached 
replace with a one)

3 x 2 x 1 x 1 => 6
*/
