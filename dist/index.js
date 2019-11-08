"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = require("./src/Helpers");
const Echo_1 = require("./src/Echo/Echo");
const cmdMap = {
    Echo: Echo_1.default
};
const helpers = new Helpers_1.default();
process.stdout.write('prompt > ');
process.stdin.on('data', (userInput) => {
    const userInputStr = userInput.toString().trim(), userCmd = helpers.evalCmd(userInputStr).toString(), cmdExec = new cmdMap[userCmd](helpers);
    console.log(userInputStr.split(" "));
    cmdExec.exec(userInputStr);
});
//# sourceMappingURL=index.js.map