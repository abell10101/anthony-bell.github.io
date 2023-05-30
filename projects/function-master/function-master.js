//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = []
    for (key in object) {
        arr.push(object[key])
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = []
    for (key in object) {
        arr.push(key)
    }
    return arr.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = []
    for (key in object) {
        if (typeof object[key] === "string") {
            arr.push(object[key])
        }
    }
    return arr.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) ===  true) {
        return 'array'
    }else {
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var arr = string.split("")
    var char = arr[0].toUpperCase()
    arr.splice(0, 1, char)
    return arr.join("")
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var arr = string.split(" ")
    for (let num in arr) {
        let char = arr[num][0].toUpperCase()
        arr2 = arr[num[0]].split("")
        arr2.splice(0, 1, char)
        let newString = arr2.join("")
        arr.splice(num, 1, newString)
    }
    
    return arr.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //check if first letter on name is already capitalized
    if (object.name[0] !== object.name[0].toUpperCase()){
        //capitalize the first letter 
        var nameFirstLetter = object.name.split("")
        var nameCap = nameFirstLetter[0].toUpperCase()
        nameFirstLetter.splice(0, 1, nameCap)
        var newName = nameFirstLetter.join("")
        return "Welcome " + newName + "!"
    }else {
        return "Welcome " + object.name + "!"
    }

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = object.name
    var newName = name.charAt(0).toUpperCase() + name.slice(1)
    var species = object.species
    var newSpecies = species.charAt(0).toUpperCase() + species.slice(1)
    return newName + " is a " + newSpecies

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises && object.noises.length) {
        return object.noises.join(" ")
    }else{
        return "there are no noises"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    arr = string.split(" ")
    var isIn = false
    for (num in arr) {
        if (word === arr[num]) {
            isIn = true
        }
    }
    return isIn
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name)
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, list) {
    var nameArr = false
    if (list.friends) {
        for (names in list.friends){
          console.log(names)
        if (name === list.friends[names]) {
          console.log(list.friends[names])
            nameArr = true
        }else {
            nameArr = false
        }
    }
}
return nameArr
    }
    




//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var nameArr = []
    var notFriends = []
    for (num in array) {
      if (array[num].name === name) {
        var friends = array[num].friends
      }
      if (array[num].name !== name) {
        nameArr.push(array[num].name)
      }
      
    }
  
  var FinalArray = [];
  
  for (var i = 0; i < nameArr.length; ++i) {
      var temp = nameArr[i].split(".");
      var found = false;
      
      for (var j = 0; j < friends.length; ++j) {
          if (friends[j] === temp[0]) {
              found = true;
              break;
          }
      }
      
      if (!found) {
          FinalArray.push(nameArr[i]);
      }
  }
  
  return FinalArray;
      }




//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (num in array) {
    delete object[array[num]]
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
let uniqueChars = [...new Set(array)];

return uniqueChars;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}