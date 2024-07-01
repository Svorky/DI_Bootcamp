// Daily Challenge: Stars
for (let i = 1; i <= 6; i++) {
    console.log("*".repeat(i));
}

for (let i = 0; i < 6; i++) {
    let line = ""
    for (let j = 0; j <= i; j++) {
        line += "*"
    }
    console.log(line);
}