"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelperMethods {
    constructor() { }
    getCmd(userInput) {
        const userCmd = userInput.split(" ")[0];
        return userCmd.charAt(0).toUpperCase() + userCmd.slice(1);
    }
    getPath(userInput) {
        if (userInput.split(" ").length === 1)
            return {};
        const lastItem = userInput.split(" ").pop(), lineNumber = Number.isInteger(Number(lastItem)) ? Number(lastItem) : null, path = (lineNumber) ? userInput.split(" ")[1] : userInput.substr(userInput.indexOf(" ") + 1);
        return {
            path,
            lineNumber
        };
    }
    done(output) {
        process.stdout.write(output);
        process.stdout.write('\nprompt > ');
    }
}
exports.default = HelperMethods;
//# sourceMappingURL=HelperMethods.js.map