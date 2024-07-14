// Exercise 1 : Comparison

function compareToTen(num) {
    return new Promise(
        (resolve, reject) => {
            if (num <= 10) {
                resolve("success1")
            } else {
                reject("reject")
            }
        }
    )
}

compareToTen(15)
    .then(result => console.log("%c" + result, "color: green;"))
    .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))


//   Exercise 2 : Promises
//   Instructions
//   Create a promise that resolves itself in 4 seconds and returns a “success” string.

let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 4000);
})
prom.then(r => console.log('r', r))

// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
Promise.resolve(3).then(value => console.log('pomise3', value));

Promise.reject('Boo!').catch((rej) => console.error('rej', rej));
