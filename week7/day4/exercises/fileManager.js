import fs from "node:fs";

export function read(file) {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

export function write(file, text) {
    fs.writeFile(file, text, (err) => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });
}
