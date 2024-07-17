import fs from "fs";

fs.readdir('./', (err, files) => {
    console.log(files);
});
