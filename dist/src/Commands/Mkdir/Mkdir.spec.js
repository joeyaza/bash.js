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
const Mkdir_1 = require("./Mkdir");
const HelperMethods_mock_1 = require("../../HelperMethods/HelperMethods.mock");
const fs = require("fs");
const helperMethods = new HelperMethods_mock_1.default(), mkdir = new Mkdir_1.default(helperMethods), helpersDoneSpy = jest.spyOn(helperMethods, "done");
describe("Mkdir", () => {
    describe("when asked to execute command with path", () => {
        it("should create folder", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.mkdir.mockImplementation((filename, callback) => {
                callback(null);
            });
            yield mkdir.exec("test");
            const outputData = helpersDoneSpy.mock.calls[0][0];
            expect(outputData).toEqual("");
        }));
        it("should return error when errored", () => __awaiter(void 0, void 0, void 0, function* () {
            fs.mkdir.mockImplementation((filename, callback) => {
                callback({ message: "error!" });
            });
            try {
                yield mkdir.exec("something  []{][{[}[[???+??   incorrect");
            }
            catch (error) {
                expect(error.message).toContain("error!");
            }
        }));
    });
});
//# sourceMappingURL=Mkdir.spec.js.map