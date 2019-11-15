import HelperMethods from "./HelperMethods";

const helperMethods = new HelperMethods(),
        stdOutWriteSpy = jest.spyOn(process.stdout, "write");

describe("HelperMethods", () => {

    describe("when asked to get command from input", () => {

        it("should return capitalized command", () => {

            const command = helperMethods.getCmd("echo hello world");

            expect(command).toEqual("Echo");

        });

    });

    describe("when asked to get path and line numbers from input", () => {

        it("should return path and line numers", () => {

            const path = helperMethods.getPath("echo hello world");

            expect(path).toEqual({
                lineNumber: null,
                path: "hello world"
            });

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