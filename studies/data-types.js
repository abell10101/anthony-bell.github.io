/**
 * DATA TYPES:
 * 
 * 0: Data types in JavaScript are classifications of values 
 * that can be assigned to variables. 
 * 
 * 1: Number: A literal number that can have mathematical operators performed on it
 * 
 * 2: String: A string is any piece of data surrounded by quotation marks 
 * and is treated as text
 * 
 * 3: Boolean: A boolean is a true or false keyword representing the result 
 * of a statement or function
 * 
 * 4: Array: An array is a container for several pieces of data in a list 
 * format surrounded by brackets
 * 
 * 5: Object: An object is also a container for pieces of data but in a 
 * dictionary format using key value pairs surrounded by curly braces
 * 
 * 6: Function: a function is a reusable block of code that can be defined 
 * and called to perform a specific task or calculate a value
 * 
 * 7: Undefined: A value that represents the absence of a value
 * 
 * 8: Null: A deliberate assignment to denote the absence of a value
 * 
 * 9: NaN: Stands for 'Not a Number' and usually the result of an invalid operation
 * 
 * 10: Infinity/-Infinity: Used to represent the concept of infinity in mathematical operations
 * like dividing by zero
 * 
 * 11: Simple/Complex Data: Simple data types are single, immutable values whereas complex
 * data types are mutable and typically hold multiple values
 * 
 * 12: Copy/Reference: Ways of copying values from one variable to another
*/

////////// SIMPLE DATA TYPES ///////////
/*
Simple data types like numbers, strings or booleans are 
simple pieces of data that only hold a single value and are immutable
*/

// Number //

//Numbers are literal numbers in javascript that hold a quantifiable value that can be manipulated

console.log(1 + 1); //prints => 2

// String //
//Strings are treated as text in javascripts and must be surrounded with single or double quotes

console.log("pan" + "cakes!"); //prints => pancakes!

// Boolean //
//Booleans are true or false values that are usually the result of some logical operation

console.log(1 > 0); //prints => true

////////////// COMPLEX DATA TYPES ///////////////
/*
Complex data types like arrays and objects are mutable pieces 
of data that typically hold multiple values or actions
*/

// Array //
/*
Arrays are complex data types that holds multiple different datatypes in a list format at accessible indexes 
*/

var array = ["hello", 1, true];

// Object //
/*
Objects are collections of data that are stored in key value pairs separated by a colon
while keys must be strings, numbers, or symbols values can be any data type
*/

var object = {
    key: "value", //keys dont neccessarily have to be wrapped in quotes unless it has spaces
    1: ["values", 1, true]
};

// Function //
/*
Like variables functions must be declared but with the function keyword 
and only executes an action once called
*/

function example(){
    console.log("Function!")
};

example() //prints = > Function!

// Undefined //
//Data that has no value carry returns undefined as its value

var name;

console.log(name) // prints => undefined

//Null
//If we want a value to intentionally carry no value we can assign null to it

var info = null

// NaN //
//If we were to log the result of an invalid operation involving a number it would return NaN

console.log(1/"number") //prints => NaN

/*
Since javascript is capable of mathematical operations, Infinity and -Infinity 
are used to denote the concept of unboundedness as it pertains to numbers
*/

console.log(1/0) // prints => Infinity
console.log(-1/0) // prints => -Infinity


// Copy/Reference //

//Copy
/*
When we assign a simple data type to a variable then assign that variable to another variable
a copy of the original data is made therefor changing the new variable will have no effect on 
the original data 
*/

var age = 35;
var newAge = age + 1;

console.log(age) //prints => 35
console.log(newAge) //prints => 36

// Reference
/**
 * When we perform the same actions with a complex data type a reference to the data we
 * originally created instead of a new copy so both variables point to the same underlying data
 */

var arr = [1, 2, 3]
var newArr = arr
newArr.push(4)

console.log(arr) //prints => [1, 2, 3, 4]
console.log(newArr) // prints => [1, 2, 3, 4]
