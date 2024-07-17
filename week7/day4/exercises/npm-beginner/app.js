import chalk from "chalk";

console.log(chalk.blue("Hello world!"));
const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));
