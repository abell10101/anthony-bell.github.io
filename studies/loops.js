/**
 * LOOPS:
 * 
 * 0: Loops allow you to automate repetitive tasks iterate over collections 
 * perform calculations and manipulate data dynamically.
 * 
 * 1: While: Executes a block of code as long as a specified condition is true. 
 * The condition is evaluated before each iteration.
 * 
 * 2: For:Executes a block of code for a specified number of iterations with an 
 * initialization condition, and an increment or decrement expression.
 * 
 * 3: For-In:Iterates over the properties of an object. It executes the block of 
 * code for each enumerable property in the object.
 */

// For Loops//
/*
For loops allow us to specify how many times exactly we want to loop through and execute
a certain action
*/

for (var i = 0; i <= 10; i++){
    console.log(i)
}// prints numbers 0 - 10

// While Loops //
/*
If we arent certain how many times we want an action to repeat we can use a while loop 
to keep looping until a certain condition becomes false
*/


while(true){
    console.log("hello")
}// prints hello an ininite number of times until we pass in a condition that is able to resolve to fslse


//For In Loops //
//For in loops are loops specifically for iterating over a collection

var arr = [1, 2, 3]

for (var num in arr){
    console.log(num)
} /*in this syntax 'num' represents the index of each item at the 
given loop so this would print => 0, 1, 2 to the console
*/