"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HelperMethods_1 = require("./src/HelperMethods/HelperMethods");
const Echo_1 = require("./src/Commands/Echo/Echo");
const Cat_1 = require("./src/Commands/Cat/Cat");
const Head_1 = require("./src/Commands/Head/Head");
const Tail_1 = require("./src/Commands/Tail/Tail");
const Ls_1 = require("./src/Commands/Ls/Ls");
const cmdMap = {
    Echo: Echo_1.default,
    Cat: Cat_1.default,
    Head: Head_1.default,
    Tail: Tail_1.default,
    Ls: Ls_1.default
};
const helpers = new HelperMethods_1.default();
process.stdout.write('prompt > ');
process.stdin.on('data', (userInput) => __awaiter(void 0, void 0, void 0, function* () {
    const userInputStr = userInput.toString().trim(), userCmd = helpers.getCmd(userInputStr).toString(), { path, lineNumber } = helpers.getPath(userInputStr);
    try {
        const cmdExec = new cmdMap[userCmd](helpers);
        yield cmdExec.exec(path, lineNumber);
    }
    catch (error) {
        console.log(error.message);
        process.stdout.write('\nprompt > ');
    }
}));
//# sourceMappingURL=index.js.map