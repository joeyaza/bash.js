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
            if (exists) {
                const data = yield this.get(), currentHistorySourceObj = JSON.parse(data.toString());
                currentHistorySourceObj[Object.keys(cmd)[0]] = Object.values(cmd)[0];
                yield this.set(JSON.stringify(currentHistorySourceObj));
                return;
            }
            yield this.set(JSON.stringify(cmd));
        }));
    }
    getHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get(), currentHistorySourceObj = JSON.parse(data.toString());
            return currentHistorySourceObj;
        });
    }
    getLastCommand() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.get(), currentHistorySourceObj = JSON.parse(data.toString()), currentHistoryKeys = Object.keys(currentHistorySourceObj);
                return Number(currentHistoryKeys[currentHistoryKeys.length - 1]);
            }
            catch (_a) {
                return 0;
            }
        });
    }
    get() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.fileName, (error, data) => __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return reject(error);
                resolve(data.toString());
            }));
        });
    }
    set(cmd) {
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