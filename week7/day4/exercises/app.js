import { persons } from "./data.js";

function avg() {
    let ages = persons.map((p) => p.age);
    ages = ages.reduce((acc, cur) => acc + cur, 0);
    console.log(ages / persons.length);
}
avg();

import { read, write } from "./fileManager.js";

read("./Hello World.txt");
write("./Bye World.txt", "Writing to the file");
