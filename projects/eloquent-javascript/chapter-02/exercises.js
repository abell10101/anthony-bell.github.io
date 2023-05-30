
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(param) {
  
  if (param > 0){
    for (i = 1; i <= param; i++) {
      tag = []
      times = i
      for (j = times; j > 0; j--) {
        tag.push("#")
        arr = tag.join("")
        
    }
      console.log(arr)
  }
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (i = 1; i <=15; i++){
    if (i % 3 === 0 && i % 5 ===0){
      console.log("fizzbuzz")
    }else if(i % 3 ===0){
      console.log("fizz")
    }else if (i % 5 === 0) {
      console.log("buzz")
    }else{
      console.log(i)
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(param) {
  board = ""
  if (param > 0) {
    for (i= 1; i <= param; i++){
      if (i % 2 ===0){
        for (j = 1; j <= param; j++){
          if (j % 2 === 0){
            board += " "
          }else{
            board += "#"
          }
        }
        board += "\n"
      }else {
        for (k = 1; k <= param; k++){
          if (k % 2 ===0){
            board += "#"
          }else{
            board += " "
          }
        }
        board += "\n"
      }
    }
  }
  console.log(board)
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
