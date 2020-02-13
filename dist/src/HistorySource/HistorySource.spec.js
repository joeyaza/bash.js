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
const historySource = new HistorySource_1.default("historyTest");
describe("HistorySource", () => {
    describe("when asked to get history file", () => {
        it("should return history file when it exists", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.existsSync.mockImplementation((filename) => {
                return true;
            });
            fs.readFile.mockImplementation((filename, callback) => {
                callback(undefined, Buffer.from('{"1":"Ls"}'));
            });
            const historyFile = yield historySource.getHistory();
            expect(historyFile).toEqual({
                "1": "Ls"
            });
        }));
        it("should not return history file when it does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.existsSync.mockImplementation((filename) => {
                return false;
            });
            const historyFile = yield historySource.getHistory();
            expect(historyFile).toEqual(undefined);
        }));
        it("should return error when unable to get history", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.existsSync.mockImplementation((filename) => {
                return true;
            });
            fs.readFile.mockImplementation((filename, callback) => {
                callback(true);
            });
            try {
                yield historySource.getHistory();
            }
            catch (error) {
                expect(error).toBe(true);
            }
        }));
    });
    describe("when asked to get the last command number", () => {
        describe("when history file does not exist", () => {
            it("should return number 0", () => __awaiter(void 0, void 0, void 0, function* () {
                fs.readFile.mockImplementation((filename, callback) => {
                    callback(undefined, "");
                });
                const lastCommandNumber = yield historySource.getLastCommand();
                expect(lastCommandNumber).toBe(0);
            }));
        });
        describe("when history file exists", () => {
            it("should return number of last command entry", () => __awaiter(void 0, void 0, void 0, function* () {
                fs.readFile.mockImplementation((filename, callback) => {
                    callback(undefined, Buffer.from('{"1":"Ls"}'));
                });
                const lastCommandNumber = yield historySource.getLastCommand();
                expect(lastCommandNumber).toBe(1);
            }));
        });
    });
    describe("when asked to set history file", () => {
        it("should add to history file if it exists", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.existsSync.mockImplementation((filename) => {
                return true;
            });
            fs.readFile.mockImplementation((filename, callback) => {
                callback(undefined, Buffer.from('{"1":"Pwd"}'));
            });
            fs.writeFile.mockImplementation((filename, cmd, callback) => {
                callback(false);
            });
            const historySet = yield historySource.setHistory({ '12': 'Ls' });
            expect(historySet).toStrictEqual({
                "1": "Pwd",
                "12": "Ls"
            });
        }));
        it("should create and set history file when file does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.existsSync.mockImplementation((filename) => {
                return false;
            });
            fs.writeFile.mockImplementation((filename, cmd, callback) => {
                callback(false);
            });
            const historySet = yield historySource.setHistory({ '1': 'Echo' });
            expect(historySet).toStrictEqual({
                "1": "Echo"
            });
        }));
        it("should return error when unable to set history", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.writeFile.mockImplementation((filename, cmd, callback) => {
                callback(true);
            });
            try {
                yield historySource.setHistory({ '1': 'Echo' });
            }
            catch (error) {
                expect(error).toBe(true);
            }
        }));
    });
});
//# sourceMappingURL=HistorySource.spec.js.map