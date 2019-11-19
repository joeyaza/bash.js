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
const Ls_1 = require("./Ls");
const HelperMethods_mock_1 = require("../../HelperMethods/HelperMethods.mock");
const fs = require("fs");
const helperMethods = new HelperMethods_mock_1.default(), ls = new Ls_1.default(helperMethods), helpersDoneSpy = jest.spyOn(helperMethods, "done");
let readdirSpy;
beforeEach(() => {
    jest.mock("fs");
    readdirSpy = jest.spyOn(fs, "readdir");
    jest.clearAllMocks();
});
describe("Ls", () => {
    describe("when asked to execute command without a directory", () => {
        it("should print the the correct directory files/ folders", () => __awaiter(void 0, void 0, void 0, function* () {
            yield ls.exec();
            const outputData = helpersDoneSpy.mock.calls[0][0], currentDir = process.cwd();
            expect(readdirSpy.mock.calls[0][0]).toBe(currentDir);
            expect(typeof outputData).toBe('string');
        }));
    });
    describe("when asked to execute command with a directory", () => {
        it("should print the the correct directory files/ folders", () => __awaiter(void 0, void 0, void 0, function* () {
            yield ls.exec("src");
            const outputData = helpersDoneSpy.mock.calls[0][0];
            expect(readdirSpy.mock.calls[0][0]).toBe("src");
            expect(typeof outputData).toBe('string');
        }));
    });
    it("should return error when errored", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield ls.exec("something incorrect");
        }
        catch (error) {
            expect(error.message).toContain("ENOENT: no such file or directory");
        }
    }));
});
//# sourceMappingURL=Ls.spec.js.map