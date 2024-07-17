import fs from "fs";

export function read() {
    fs.readFile("./files/file-data.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}
