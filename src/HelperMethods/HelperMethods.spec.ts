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

        it("should return path and line numbers when input", () => {

            const path = helperMethods.getPath("cat index.ts 10");

            expect(path).toEqual({
                lineNumber: 10,
                path: "index.ts"
            });

        });

        it("should return path and line numbers as null when not present", () => {

            const path = helperMethods.getPath("cat hello world");

            expect(path).toEqual({
                lineNumber: null,
                path: "hello world"
            });

        });

        it("should return empty object when line numbers and path are not present", () => {

            const path = helperMethods.getPath("ls");

            expect(path).toEqual({});

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