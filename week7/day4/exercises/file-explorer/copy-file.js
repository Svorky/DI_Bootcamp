import { error } from "console";
import fs from "fs";

fs.readFile("./source.txt", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    fs.writeFile("./destination.txt", data, (err) => console.error(err));
});
