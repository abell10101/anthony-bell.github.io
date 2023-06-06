/**
 * FUNCTIONS:
 * 
 * 0: Functions are reusable blocks of code that perform a specific task 
 * or calculate a value. They allow you to organize and encapsulate logic 
 * making your code modular and easier to maintain.
 * 
 * 1: Declaring: A function declaration assigns a function a name and typically
 * defiines the parameters and body of the function
 * 
 * 2: Calling: A function call is when a previously declared function is called to action
 * the body of the function is called to execute its actions
 * 
 * 3: Assigning: We can assign variables to functions like any other data type.
 * the variable we assign it to acts as its name when we call it
 * 
 * 4: Inputs/Outputs: The inputs we put into a function when we declare it are called its parameters
 * and when we call it they're called arguments. We can specify optional inputs and outputs for 
 * our functions
 * 
 * 5: Scope: Functions have acces to every variable in its parent scope  while the inverse is not true
 * 
 * 6: Closures: A closure is when an inner function still has acces to its parent functions variables 
 * even after the parent fuunction has resolved
 */

// Declaring and Naming //
/*
Declaring a function is similar to a variable. We use the function keyword to definie 
its name and actions
*/

function example(){
    console.log("Here!")
}// does nothing since it hasn'tbeen called

// Calling //
//Calling a fuunction essentially invokes whatever action was defined therein

example() // prints => Here!

// Assigning //
/*
Assigning a function to a variable allows that variable to act as the name and 
container for said function
*/

var example = function(){
    console.log("Hello!")
}

example() // prints => Hello!

// Inputs/Ouputs //
//We can define inputs and optionally return outputs for our functions

function example(name = "Aj"){
    console.log("Hello, " + name)
}

//If we dont pass an argument to the function the default will be our defined parameter

example() // prints => Hello, Aj
example("Frank") // prints => "Hello, Frank"

/*
Similarly we can choose to create an output using the return statement that will give us a 
value we can hold on to
*/

function example(name = "Aj"){
    return "Hello, " + name
}

var greet = example()

console.log(greet) // prints => Hello, Aj

// Scope //
/*
Functions have access to every variable in its parent scope but any variable
declared within the function is not available outside of it
*/

var name = "Aj"

function print(){
    var age = 28
    console.log(name)
}

print() // prints => Aj

console.log(age) // prints => ReferenceError: age is not defined

// Closures //
/*Closure is the phenomena of a function declared within a function still having
access to the information declared in the outer funciton even after its resolved
*/

function outer() {
    var outer = 'outer';
  
    function inner() {
      console.log(outer);
    }
  
    return inner;
  }
  
var closure = outer();

/*
 After we save the result of the outer function into a variable it returns the inner function 
as a result allowing us to treat the variable as another function
*/

closure(); // prints =>  I am from the outer function
  