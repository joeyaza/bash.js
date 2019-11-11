"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelperMethods {
    constructor() { }
    getCmd(userInput) {
        let userCmd = userInput.split(" ")[0];
        return this.capitalize(userCmd);
    }
    done(output) {
        process.stdout.write(output);
        process.stdout.write('\nprompt > ');
    }
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
exports.default = HelperMethods;
//# sourceMappingURL=HelperMethods.js.map