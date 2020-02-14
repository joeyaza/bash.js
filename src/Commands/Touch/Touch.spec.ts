import Touch from "./Touch";
import HelperMethods from "../../HelperMethods/HelperMethods.mock";
import * as fs from "fs";

const helperMethods = new HelperMethods(),
    touch = new Touch(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done");

let writeFileSpy;

beforeEach(() => {

    jest.mock("fs");

    writeFileSpy = jest.spyOn(fs, "writeFile");

    jest.clearAllMocks();

});

describe("Touch", () => {

    describe("when asked to exec command with a number of file names", () => {

        it("should create multiple files", async () => {

            await touch.exec("hi hello");

            const outputData = helpersDoneSpy.mock.calls[0][0];

            expect(writeFileSpy).toHaveBeenCalledTimes(2);
            expect(outputData).toEqual("Files with names hi hello created!");

        });

    });

    describe("when asked to exec command with a file name", () => {

        it("should create the file", async () => {

            await touch.exec("hi");

            const outputData = helpersDoneSpy.mock.calls[0][0];

            expect(writeFileSpy).toHaveBeenCalledTimes(1);
            expect(outputData).toEqual("File with name hi created!");

        });

    });

    describe("when an error occurs", () => {

        it("should return error", async () => {

            (fs.writeFile as unknown as jest.Mock).mockImplementation((filename, undefined, callback) => {
                callback({message: "Could not write file!"}, filename);
            });

            try {

                await touch.exec("wrong command!");

            } catch(error) {

                expect(error.message).toEqual("Could not write file!");

            }

        });

    });

});