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
const Tail_1 = require("./Tail");
const HelperMethods_mock_1 = require("../HelperMethods/HelperMethods.mock");
const fs = require("fs");
const helperMethods = new HelperMethods_mock_1.default(), tail = new Tail_1.default(helperMethods), helpersDoneSpy = jest.spyOn(helperMethods, "done");
let readFileSpy;
beforeEach(() => {
    jest.mock("fs");
    readFileSpy = jest.spyOn(fs, "readFile");
    jest.clearAllMocks();
});
describe("Tail", () => {
    describe("when asked to execute command with number of lines", () => {
        it("should print the the correct number of lines of file", () => __awaiter(void 0, void 0, void 0, function* () {
            yield tail.exec("index.ts", 20);
            const outputData = helpersDoneSpy.mock.calls[0][0], stringLines = (outputData.match(/\n/g) || '').length + 1;
            expect(typeof outputData).toBe('string');
            expect(stringLines).toEqual(20);
        }));
    });
    describe("when asked to execute command as default", () => {
        it("should print the the correct number of lines of file", () => __awaiter(void 0, void 0, void 0, function* () {
            yield tail.exec("index.ts", null);
            const outputData = helpersDoneSpy.mock.calls[0][0], stringLines = (outputData.match(/\n/g) || '').length + 1;
            expect(typeof outputData).toBe('string');
            expect(stringLines).toEqual(10);
        }));
    });
    it("should return error when errored", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield tail.exec("something incorrect", null);
        }
        catch (error) {
            expect(error.message).toContain("ENOENT: no such file or directory");
        }
    }));
});
//# sourceMappingURL=Tail.spec.js.map