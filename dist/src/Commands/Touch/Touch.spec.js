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
const Touch_1 = require("./Touch");
const HelperMethods_mock_1 = require("../../HelperMethods/HelperMethods.mock");
const fs = require("fs");
const helperMethods = new HelperMethods_mock_1.default(), touch = new Touch_1.default(helperMethods), helpersDoneSpy = jest.spyOn(helperMethods, "done");
let writeFileSpy;
beforeEach(() => {
    jest.mock("fs");
    writeFileSpy = jest.spyOn(fs, "writeFile");
    jest.clearAllMocks();
});
describe("Touch", () => {
    describe("when asked to exec command with a number of file names", () => {
        it("should create multiple files", () => __awaiter(void 0, void 0, void 0, function* () {
            yield touch.exec("hi hello");
            const outputData = helpersDoneSpy.mock.calls[0][0];
            expect(writeFileSpy).toHaveBeenCalledTimes(2);
            expect(outputData).toEqual("Files with names hi hello created!");
        }));
    });
    describe("when asked to exec command with a file name", () => {
        it("should create the file", () => __awaiter(void 0, void 0, void 0, function* () {
            yield touch.exec("hi");
            const outputData = helpersDoneSpy.mock.calls[0][0];
            expect(writeFileSpy).toHaveBeenCalledTimes(1);
            expect(outputData).toEqual("File with name hi created!");
        }));
    });
    describe("when an error occurs", () => {
        it("should return error", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.writeFile.mockImplementation((filename, undefined, callback) => {
                callback({ message: "Could not write file!" }, filename);
            });
            try {
                yield touch.exec("wrong command!");
            }
            catch (error) {
                expect(error.message).toEqual("Could not write file!");
            }
        }));
    });
});
//# sourceMappingURL=Touch.spec.js.map