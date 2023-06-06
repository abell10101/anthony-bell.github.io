/**
 * STRING MANIPULATION:
 * 
 * 0: String manipulation involves manipulating and modifying strings to achieve desired outcomes
 * 
 * 1: Operators: Operators like the concatenation operator (+) or the concatenation assignment operator (+=)
 * allow us to combine strings
 * 
 * 2: Methods: Methods allow us manipulate strings in a variety of ways including
 * removing certain elements, replacing elements, finding the index of elements and
 * changing the case of our text
*/


// Operators //
//We can assign, combine, and access characters in our strings using operators

var string = "Hello" + " world!"
console.log(string) // prints => "Hello world!"

string += " I am here!"
console.log(string) // prints => "Hello World! I am here!"

// Methods //
//Methods allows for a variety of string manipulation

//Split
/*
The split method allows us to split our string into an array
if we leave no space inside of the quotes in our synatax it will return an array with every letter 
at an indexed. If we choose to put a space then it will split every word into an index
*/

var string = "Hello World!"
console.log(string.split("")) // prints => ["Hello", "world!"]

//Slice
/**
 * The slice method allows us to select the starting point at a certain index that we want the 
 * rest of our string to continue from
 */

var string = "Hello!"
console.log(string.slice(1)) //prints => ello!

// toUpperCase / toLowerCase
//These methods allow us to change the case of the text in our string

var string = "Hello"

console.log(string.toUpperCase())// prints => HELLO
console.log(string.toLowerCase()) // prints => hello