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
jest.mock("fs");
const HistorySource_1 = require("./HistorySource");
const fs = require("fs");
const historySource = new HistorySource_1.default();
describe("HistorySource", () => {
    describe("when asked to get the last command number", () => {
        describe("when history file does not exist", () => {
            it("should return number 0", () => __awaiter(void 0, void 0, void 0, function* () {
                fs.readFileSync.mockReturnValue(undefined);
                const lastCommandNumber = yield historySource.getLastCommand();
                expect(lastCommandNumber).toBe(0);
            }));
        });
        describe("when history file exists", () => {
            it("should return number of last command entry", () => __awaiter(void 0, void 0, void 0, function* () {
                fs.readFileSync.mockReturnValue(Buffer.from('{"1":"Ls"}'));
                const lastCommandNumber = yield historySource.getLastCommand();
                expect(lastCommandNumber).toBe(1);
            }));
        });
    });
});
//# sourceMappingURL=HistorySource.spec.js.map