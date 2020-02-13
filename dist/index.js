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
const helpers = new HelperMethods_1.default(), historySource = new HistorySource_1.default("history");
process.stdout.write('prompt > ');
process.stdin.on("data", (userInput) => __awaiter(void 0, void 0, void 0, function* () {
    let userInputStr;
    if (userInput.toString('base64') === "G1tB") {
        const history = yield historySource.getHistory();
        userInputStr = history[Object.keys(history)[0]];
        process.stdout.write(userInputStr);
    }
    else {
        userInputStr = userInput.toString().trim();
    }
    try {
        const userCmd = helpers.getCmd(userInputStr).toString(), { path, lineNumber } = helpers.getPath(userInputStr), historySourceNumber = yield historySource.getLastCommand(), { default: command } = yield Promise.resolve().then(() => require(`./src/Commands/${userCmd}/${userCmd}`)), cmdExec = new command(helpers, historySource);
        yield cmdExec.exec(path, lineNumber);
        if (userCmd)
            yield historySource.setHistory({ [historySourceNumber + 1]: userCmd });
    }
    catch (error) {
        console.warn("Looks like there's an issue ..."
            + "in any case take a look at the below error message");
        console.error(error.message);
        process.stdout.write('\nprompt > ');
    }
}));
//# sourceMappingURL=index.js.map