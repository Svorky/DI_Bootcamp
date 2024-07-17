const products = require("./products");

function search(name) {
    let p = products.find((p) => p.name === name);
    console.log("p", p);
}

search("butter");
search("pastrama");
