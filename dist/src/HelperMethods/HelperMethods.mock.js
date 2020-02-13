"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelperMethodsMock {
    constructor() { }
    getCmd(userInput) {
        return userInput;
    }
    getPath(userInput) {
        return {
            path: userInput.substr(userInput.indexOf(" ") + 1),
            lineNumber: 10
        };
    }
    done(output) {
        return output;
    }
}
exports.default = HelperMethodsMock;
//# sourceMappingURL=HelperMethods.mock.js.map