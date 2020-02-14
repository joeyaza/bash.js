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
const Rm_1 = require("./Rm");
const HelperMethods_mock_1 = require("../../HelperMethods/HelperMethods.mock");
const fs = require("fs");
const helperMethods = new HelperMethods_mock_1.default(), rm = new Rm_1.default(helperMethods), helpersDoneSpy = jest.spyOn(helperMethods, "done");
let unlinkSpy;
beforeEach(() => {
    jest.mock("fs");
    unlinkSpy = jest.spyOn(fs, "unlink");
    jest.clearAllMocks();
});
describe("Rm", () => {
    describe("when asked to exec command with a number of file names", () => {
        it("should delete multiple files", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.unlink.mockImplementation((filename, callback) => {
                callback(undefined, filename);
            });
            yield rm.exec("hi hello");
            const outputData = helpersDoneSpy.mock.calls[0][0];
            expect(unlinkSpy).toHaveBeenCalledTimes(2);
            expect(outputData).toEqual("Files with names hi hello deleted!");
        }));
    });
    describe("when asked to exec command with a file name", () => {
        it("should delete the file", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.unlink.mockImplementation((filename, callback) => {
                callback(undefined, filename);
            });
            yield rm.exec("hi");
            const outputData = helpersDoneSpy.mock.calls[0][0];
            expect(unlinkSpy).toHaveBeenCalledTimes(1);
            expect(outputData).toEqual("File with name hi deleted!");
        }));
    });
    describe("when an error occurs", () => {
        it("should return error", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.unlink.mockImplementation((filename, callback) => {
                callback({ message: "File does not exist!" }, filename);
            });
            try {
                yield rm.exec("file does not exist !");
            }
            catch (error) {
                expect(error.message).toEqual("File does not exist!");
            }
        }));
    });
});
//# sourceMappingURL=Rm.spec.js.map