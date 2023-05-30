'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: returns input value unchanged
 * @param {Any Value}: Value to be returned  
 * @returns {param}: returns the value inputted
 */

function identity(value) {
    return value
}
module.exports.identity = identity

/**
 * typeOf: returns the type of value as a string
 * @param {Any value}: Any value or data type
 * @return {string}: Returns data type of value
 * 
 */

function typeOf(value) {
    if (Array.isArray(value)) {
        return "array"
    }else if(value === null) {
        return "null"
    }else {
        return typeof value
    }
}

module.exports.typeOf = typeOf

/**
 *first: returns the first number of values in an array
 * @param {Array} array: The array the values will be reurned from
 * @param {Number} number: The number of value to return from the fron of the array
 * @returns(Array): Returns an array with the specified number of values from the front
 */


function first(array, number) {
    var newArr = []
    if (Array.isArray(array) === false || number <= 0) {
        return newArr;
    }else if(Array.isArray(array) === true && number < array.length) {
        for(var i = 0; i < number; i++){
            newArr.push(array[i])
        }
    }else if(number > array.length){
        return array;
    }else if (Array.isArray(array) === true && number === undefined) {
        return array[0]
    }
    return newArr
}

module.exports.first = first

/**
 * last: returns last number of values in an array
 * @param{Array} array: The array to return the specified values from
 * @param{Number} number: The number of items to return from the back
 * @returns{Array}: Returns an array containing only the number of items specified starting from the back
 */

function last(array, number) {
    var newArr = []
    if (Array.isArray(array) === false || number <= 0) {
        return newArr;
    }else if(Array.isArray(array) === true && number < array.length) {
        for(var i = array.length - 1; i >= array.length - number; i--){
            newArr.unshift(array[i])
        }
    }else if(number > array.length){
        return array;
    }else if (Array.isArray(array) === true && number === undefined) {
        return array[array.length - 1]
    }
    return newArr
}

module.exports.last = last

/**
 * indexOf: Finds the first occurence of a given value and return its index
 * @param{Array} array: The array to loop over and find the value
 * @param{Any data type} value: The value which to look for in the array
 * @returns: Returns the index of givien value in array if it exists. Returns -1 if not
 */

function indexOf(array, value) {
    for (var num in array) {
        if (array[num] === value){
            return Number(num)
        }
    }
    return -1
}

module.exports.indexOf = indexOf

/**
 * contains: Loops over an array to find if it contains a given value and resolves to true or false
 * @param {Array} array: The array to loop over to find the given value
 * @param{Any data type} value: The given value to find in the array
 * @returns{Boolean}: Returns a true or false based on whether or not given value is in array
 */

function contains(array, value) {
    let isIn = false
    for (let num in array){
        if (array[num] === value){
            isIn = true
        }
    }
    return isIn
}

module.exports.contains = contains

/**
 * unique: Takes an array and returns an array with all duplicates removed
 * @param{Array} array: The array to remove duplicates from
 * @returns{Array}: Returns a new array with all duplicates removed
 */

function unique(array) {
    let arr = []
    for (var num in array) {
      if (_.indexOf(arr, array[num]) === -1) {
        arr.push(array[num])
      }
    }
    return arr
}

module.exports.unique = unique

/**
 * filter: Loops over an array and applies a function to 
 * each value and returns a new array for all true cases 
 * 
 * @param{Array} array: The array to loop over and apply function to
 * @param{Function} func: The function to pass each element of the array to. resolves to a boolean
 * @returns{Array}: Returns a new array containing only cases function resolved to true for
 */

function filter(array, func) {
    let arr = []
    for (let num in array) {
        if (func(array[num], num, array)){
            arr.push(array[num])
        }
    }
    return arr
}

module.exports.filter = filter

/**
 * reject: Logical inverse of filter. Only a new array of elements that given array failed for
 * @param{Array} array: The array to loop over and test with given function
 * @param{Function} func: The given function to pass each value to. Resolves to a boolean
 * @returns{Array}: Returns an array of values that function resolved to false for 
 */

function reject(array, func) {
    let arr = []
    for (let num in array) {
        if (func(array[num], num, array) === false){
            arr.push(array[num])
        }
    }
    return arr
}

module.exports.reject = reject

/**
 * partition: Takes an array and seperates it into an array of arrays based on whether its conditions
 * resolved to true or false
 * 
 * @param{Array} array: The array to pass to given function
 * @param{Function} func: Function designed to test a condition and seperate to an array inside of the new array
 * @returns{Array}: Returns a new array made of arrays seprated by whether they passed the fucntions condition
 */

function partition(array, func) {
    let arr = [[], []]
    for (let num in array) {
        let result = func(array[num], num, array)
        if (result){
            arr[0].push(array[num])
        }else {
            arr[1].push(array[num])
        }    
    }
    return arr
}

module.exports.partition = partition

/**
 * map: Takes in an array or object and pases each value to a function that changes it in some way
 * and saves the result to an array
 * 
 * @param{Array or Object} collection: The collection to iterate over
 * @param{Function}: The function each value is passed to
 * @returns{Array}: Returns an array of modified values from the collection after passing through the function
 */

function map(collection, func) {
    let newArray = []
    if (Array.isArray(collection)){
        for (let num in collection){
            let result = func(collection[num], num, collection)
            newArray.push(result)
        }
    }else{
        for (let key in collection) {
            let result = func(collection[key], key, collection)
            newArray.push(result)
        }
    }
    return newArray
}

module.exports.map = map

/**
 * pluck: returns an array containing the values of given property from array of objects
 * @param{Array} array: An array of objects
 * @param{Any data type} property: Given property to search through array for
 * @returns{Array}: REturns an array containing every value matching the property from the objects in the array
 */

function pluck(array, prop) {
    return _.map(array, function (e,i,a){return e[prop]});
}

module.exports.pluck = pluck

/**
 * every: Takes an object or array and tests it with a function and returns true  only
 * if every value passes 
 * 
 * @param{Array or Object} collection: The array or object to pass to the function
 * @param{Function} func: The given function to pass the values to 
 * @returns{Boolean}: Returns true if every value passes and false if not
 */

function every(collection, func) {
    if (Array.isArray(collection)) {
        for (let num in collection)  {
            if (func !== undefined && func(collection[num], num, collection) === false){
                return false
            }else if (collection[num] === false){
                return false
            } 
        }
        return true
    }else{
        for (let key in collection) {
            if (func !== undefined && func(collection[key], key, collection) === false) {
                return false
            }else if(collection[key] === false){
                return false
            }
        }
        return true
    }
}

module.exports.every = every

/**
 * some: Takes an array or object and tests with a function. Returns true if
 * even on value passes. Returns false if all values fail
 * 
 * @param{Array or Object} collection: The array or objects to be tested
 * @param{Function} fucn: The function to pass each value of array or object to
 * @returns{Boolean}: Returns true if even one value passes. False otherwise
 */

function some(collection, func) {
    if (Array.isArray(collection)) {
        for (let num in collection)  {
            if (func !== undefined){
                if (func(collection[num], num, collection)){
                return true
                }
            }else if (collection[num]){
                return true
            } 
        }
        return false
    }else{
        for (let key in collection) {
            if (func !== undefined) {
                if (func(collection[key], key, collection)){
                return true
                }
            }else if(collection[key]){
                return true
            }
        }
        return false
    }
}

module.exports.some = some

/**
 * reduce: Takes an array and passes it to a function with a seed 
 * @param{Array} array: The array to be passed to the function
 * @param{Fucntion} func:The function to pass each value of array to
 * @param{Any data type} seed: A value passed to the function as a conditon
 * @returns{Any data type}: Returns a value based on the conditions and changes the function makes
 */

function reduce(array, func, seed) {
    let result
    
     if (seed === undefined){
         result = array[0]
         for (let i = 1; i < array.length; i++){
             result = func(result, array[i], i)
         }
     }else{
         result = seed
         for (let i = 0; i < array.length; i++){
             result = func(result, array[i], i)
         }
     }
     return result
 }

module.exports.reduce = reduce

/**
 * extend: Takes an object and adds sevral other objects to it
 * @param{Object}: The initial object to add others to
 * @param{Array} ...objects: An unspecified amount of objects to add to initial object
 * @returns{Object}: Returns a modified object extended with specified objects
 */

function extend(object, ...objects) {
    for (let key in object) {
        for (let num in objects){
            for (let key2 in objects[num]){
                if (key === key2){
                    object[key] = objects[num][key2]
                }else{
                    object[key2] = objects[num][key2]
                }
            }
        }
    }
    return object
}

module.exports.extend = extend