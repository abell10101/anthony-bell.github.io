/**
 * VARIABLES:
 * 
 * 0: Variables are name containers for data in javascript. We create variables using declarative keywords.
 * 
 * 1: Declaration/Assignment: To create a variable...
 * 
 * 2: Var, let, const: These are keywords used to define a variables scope and mutability
 * 
 * 3: Hoisting: a JavaScript behavior where variable and function declarations are 
 * moved to the top of their respective scopes allowing 
 * them to be accessed before they are actually declared in the code.
 */

//1. Declaration/Assignment //

//Declaration
// At declaration the 'age' variable is undefined and prints so to the console
var age;
console.log(age) // prints => undefined

//Assignment
// To give value to our variable we assign it to a value 
age = 35
console.log(age) //prints => 35

//2. Var, let, const //

//Var is a globally scoped declaration that can be redeclared and reassigned
var name = "AJ"
console.log(name) //prints => 'AJ'

var name = "Frank"
console.log(name) //prints => 'Frank'

//Let is a block scoped declaration that can be reassigned but not redeclared

let num = 1
console.log(num) //prints => 1

let num = 2
console.log(num) //prints => SyntaxError: Identifier 'num' has already been declared

//Const is a block scoped variable that cannot be reassigned or redeclared

const i = "this"
console.log(i) // prints => 'this'

i = 'that'
console.log(i) //prints => TypeError: Assignment to constant variable.

//Hoisting //

/*Hoisting moves declared variables to the top of their scope 
allowing you to access them before they are declared. However they won't carry any value
until they are assigned one
*/
console.log(example)// prints => undefined

var example = "something"

console.log(example) //prints => 'something'