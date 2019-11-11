"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HelperMethods_1 = require("./HelperMethods");
const helperMethods = new HelperMethods_1.default(), stdOutWriteSpy = jest.spyOn(process.stdout, "write");
describe("HelperMethods", () => {
    describe("when asked to get command from input", () => {
        it("should return capitalized command", () => {
            const command = helperMethods.getCmd("echo hello world");
            expect(command).toEqual("Echo");
        });
    });
    describe("when asked to get path from input", () => {
        it("should return path", () => {
            const path = helperMethods.getPath("echo hello world");
            expect(path).toEqual("hello world");
        });
    });
    describe("when asked to output the result of command to the command line", () => {
        it("should output correct result and prompt for next input", () => {
            helperMethods.done("hello world!");
            expect(stdOutWriteSpy).toHaveBeenCalledWith("hello world!");
            expect(stdOutWriteSpy).toHaveBeenCalledWith("\nprompt > ");
        });
    });
});
//# sourceMappingURL=HelperMethods.spec.js.map