/**
 * 0: Operators are symbols or keywords used to perform operations on values or variables
 * 
 * 1: Assignment: Assigns values to variables, such as the equals sign =
 * as well as compound assignment operators like +=, -=, *=, /=, which 
 * perform an operation and assign the result
 * 
 * 2: Arithmetic: Performs mathematical calculations such as addition subtraction, etc.
 * using +, -, *, /
 * 
 * 3: Comparison:  Compare values and return a boolean result
 * such as equal to (==), not equal to (!=), greater than (>), or less than (<)
 * 
 * 4: Logical: Combine or manipulate boolean values, such as AND (&&) 
 * OR (||) and NOT (!), to perform logical operations
 * 
 * 5: Urnary: Performs operations on a single operand such as increment (++) decrement (--)
 * 
 * 6: Ternary: a shorthand operator that allows you to write conditional expressions in a compact form
 */

// Assignment //
//Like with variables we are able to assign values and even manipulate that assignment

var num = 1;
console.log(num) // prints => 1
num += 1
console.log(num) // prints => 2

// Arithmetic //
//With numbers we are able to perform mathematical operations

console.log(2 * 4) //prints => 8

// Comparison //
//Using comparison operators to compare values will result in a boolean

console.log(3 > 4) // prints => false

// Logical Operators //
//Logical operators allow us to chain multiple conditions/ comparison operators

if (2 > 4 && 1 === 1){
    console.log("True!")
} // expression prints => True

// Urnay Operator //
//The urnary operator allows us to increment and decrement

var num = 1;
num++
console.log(num) // prints => 2
num--
console.log(num) // prints => 1

// Ternary Operator //
/*
Ternary operators allow us to simplify conditional expressions. The syntax is: 
condition ? value1 : value2. If the condition evaluates to true the expression returns 
value1 otherwise it returns value2
*/

1 === 1 ? console.log("yes") : console.log("no")

