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
const HistorySource_1 = require("./src/HistorySource/HistorySource");
const keypress = require("keypress");
const helpers = new HelperMethods_1.default(), historySource = new HistorySource_1.default();
let keypressChosen = false;
process.stdout.write('prompt > ');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('data', (userInput) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(2, userInput.toString('utf-8'), typeof userInput.toString('utf-8'));
    if (true) {
    }
    const userInputStr = userInput.toString().trim(), userCmd = helpers.getCmd(userInputStr).toString(), { path, lineNumber } = helpers.getPath(userInputStr), historySourceNumber = yield historySource.getLastCommand();
    try {
        const { default: command } = yield Promise.resolve().then(() => require(`./src/Commands/${userCmd}/${userCmd}`)), cmdExec = new command(helpers, historySource);
        yield cmdExec.exec(path, lineNumber);
        if (userCmd)
            yield historySource.setHistory({ [historySourceNumber + 1]: userCmd });
    }
    catch (error) {
        process.stdout.write('\nprompt > ');
    }
}));
//# sourceMappingURL=index.js.map