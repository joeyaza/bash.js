"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helpers {
    constructor() { }
    evalCmd(userInput) {
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
exports.default = Helpers;
//# sourceMappingURL=Helpers.js.map