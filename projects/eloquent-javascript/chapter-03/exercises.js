////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  if (num1 === num2){
    return num1
  }else if (num1 > num2) {
    return num2
  }else{
    return num1
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  if (num % 2 === 0) {
    return true
  }else {
    return false
  }

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  let arr = string.split("")
  let count = 0
  for (let num in arr) {
    if (arr[num] === char){
      count += 1
    }else if (num[arr] == char){
      count += 1
    }
  }
  return count

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  let arr = string.split("")
  let arr2 = string.split()
  let count = 0
  for (let num in arr) {
    if (arr[num] === "B"){
      count += 1
    }
  }
  for (let num2 in arr2) {
    if (arr2[num2] === "B"){
      count += 1
    }
  }
  return count

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
