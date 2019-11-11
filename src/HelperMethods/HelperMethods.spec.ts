import HelperMethods from "./HelperMethods";


const helperMethods = new HelperMethods(),
        stdOutSpy = jest.spyOn(process.stdout, "write");

describe("HelperMethods", () => {

    describe("when asked to get command from input", () => {

        it("should return capitalized command", () => {

            const command = helperMethods.getCmd("echo hello world");

            expect(command).toEqual("Echo");

        });

    });

    describe("when asked to output the result of command to the command line", () => {

        it("should output correct result and prompt for next command", () => {

            helperMethods.done("hello world!");

            expect(stdOutSpy).toHaveBeenCalledWith("hello world!");
            expect(stdOutSpy).toHaveBeenCalledWith("\nprompt > ");

        });

    });

});