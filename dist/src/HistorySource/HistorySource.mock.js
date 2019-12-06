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
class HistorySourceMock {
    constructor() { }
    setHistory() {
    }
    getHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve({ '8': 'Ls',
                '9': 'History',
                '10': 'Ls',
                '11': 'History',
                '12': 'Ls'
            });
        });
    }
    getLastCommand() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = HistorySourceMock;
//# sourceMappingURL=HistorySource.mock.js.map