/**
 * CONTROL FLOW:
 * 
 * 0:Control flow the order in which statements are executed based on 
 * different conditions and decisions. It allows you to control the flow of execution in your code.
 * 
 * 1: If: An if statement is a block of code that allows you to execute something
 * based on the thuthiness of an expression.
 * 
 * 2: Else-IF: The else-if is used in conjunction with the if statement as a backup condition to test
 * and block of code to execute if the original if statements resolves to false. You can 
 * chain as many of these together as you need.
 *  
 * 3: Else:The final block of code to execute if all other conditions fail. Does not need
 * 
 * 4: Switch: A consise alternative to the if-elseif-else chain. 
 * It allows the same functionality with a more streamline syntax
 */


//If-Elseif-Else//
//The if chain allows us to set different actions to take place based on certain conditions

if (1 === 2){
    console.log("Yes!")
}else if(1 > 2){
    console.log("No!")
}else{
    console.log("Done!")
} // entire statement prints => Done!

//Switch //
//The switch statements offers the same functionality with a more concise syntax

switch("hello"){
    case "goodbye":
        console.log("Goodbye!")
        break;
    case "hello":
        console.log("hello")
        break;
    default:
        console.log("welcome")
}// reaches the second case statement resolves to print => hello