"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelperMethods {
    constructor() { }
    getCmd(userInput) {
        const userCmd = userInput.split(" ")[0];
        return userCmd.charAt(0).toUpperCase() + userCmd.slice(1);
    }
    getPath(userInput) {
        return userInput.substr(userInput.indexOf(" ") + 1);
    }
    done(output) {
        process.stdout.write(output);
        process.stdout.write('\nprompt > ');
    }
}
exports.default = HelperMethods;
//# sourceMappingURL=HelperMethods.js.map