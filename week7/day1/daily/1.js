function makeAllCaps(arr){
    return new Promise(
        (resolve, reject) => {
            if(arr.every( s => s.constructor === String)){
                resolve(arr.map( s => s.toUpperCase()))
            } else {
                reject("Not every element is a String")
            }
        }
    )
}

function sortWords(arr){
    return new Promise(
        (resolve, reject) => {
            if(arr.length > 4){
                resolve(arr.sort())
            } else {
                reject("Array length less than 4")
            }
        }
    )
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.error(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.error(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.error(error))
