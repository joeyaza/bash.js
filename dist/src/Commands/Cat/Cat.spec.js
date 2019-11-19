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
const Cat_1 = require("./Cat");
const HelperMethods_mock_1 = require("../../HelperMethods/HelperMethods.mock");
const fs = require("fs");
const helperMethods = new HelperMethods_mock_1.default(), cat = new Cat_1.default(helperMethods), helpersDoneSpy = jest.spyOn(helperMethods, "done");
let readFileSpy;
beforeEach(() => {
    jest.mock("fs");
    readFileSpy = jest.spyOn(fs, "readFile");
    jest.clearAllMocks();
});
describe("Cat", () => {
    describe("when asked to execute command", () => {
        it("should read required file and pass contents to command line", () => __awaiter(void 0, void 0, void 0, function* () {
            yield cat.exec("index.ts");
            const outputData = readFileSpy.mock.calls[0][0];
            expect(typeof outputData).toBe("string");
            expect(outputData).toEqual("index.ts");
        }));
        it("should return error when errored", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield cat.exec("something incorrect");
            }
            catch (error) {
                expect(error.message).toContain("ENOENT: no such file or directory");
            }
        }));
    });
});
//# sourceMappingURL=Cat.spec.js.map