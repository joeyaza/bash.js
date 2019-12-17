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
const fs = require("fs");
class HistorySource {
    constructor() {
        this.fileName = "history";
    }
    setHistory(cmd) {
        fs.exists(this.fileName, (exists) => __awaiter(this, void 0, void 0, function* () {
            let historySourceToSet = JSON.stringify(cmd);
            if (exists) {
                const data = yield this.getHistoryFile(), currentHistorySourceObj = JSON.parse(data);
                currentHistorySourceObj[Object.keys(cmd)[0]] = Object.values(cmd)[0];
                historySourceToSet = JSON.stringify(currentHistorySourceObj);
            }
            yield this.setHistoryFile(historySourceToSet);
        }));
    }
    getHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                fs.exists(this.fileName, (exists) => __awaiter(this, void 0, void 0, function* () {
                    if (exists) {
                        const data = yield this.getHistoryFile(), currentHistorySourceObj = JSON.parse(data);
                        return resolve(currentHistorySourceObj);
                    }
                    resolve(undefined);
                }));
            });
        });
    }
    getLastCommand() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.getHistoryFile(), currentHistorySourceObj = JSON.parse(data), currentHistoryKeys = Object.keys(currentHistorySourceObj);
                return Number(currentHistoryKeys[currentHistoryKeys.length - 1]);
            }
            catch (error) {
                return 0;
            }
        });
    }
    getHistoryFile() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.fileName, (error, data) => __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return reject(error);
                resolve(data.toString());
            }));
        });
    }
    setHistoryFile(cmd) {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.fileName, cmd, (error) => {
                if (error)
                    return reject(error);
                resolve(true);
            });
        });
    }
}
exports.default = HistorySource;
//# sourceMappingURL=HistorySource.js.map