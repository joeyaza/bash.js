jest.mock("fs");
import Rm from "./Rm";
import HelperMethods from "../../HelperMethods/HelperMethods.mock";
import * as fs from "fs";

const helperMethods = new HelperMethods(),
    rm = new Rm(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done");

let unlinkSpy;

beforeEach(() => {

    jest.mock("fs");

    unlinkSpy = jest.spyOn(fs, "unlink");

    jest.clearAllMocks();

});

describe("Rm", () => {

    describe("when asked to exec command with a number of file names", () => {

        it("should delete multiple files", async () => {

            (fs.unlink as unknown as jest.Mock).mockImplementation((filename, callback) => {
                callback(undefined, filename);
            });

            await rm.exec("hi hello");

            const outputData = helpersDoneSpy.mock.calls[0][0];

            expect(unlinkSpy).toHaveBeenCalledTimes(2);
            expect(outputData).toEqual("Files with names hi hello deleted!");

        });

    });

    describe("when asked to exec command with a file name", () => {

        it("should delete the file", async () => {

            (fs.unlink as unknown as jest.Mock).mockImplementation((filename, callback) => {
                callback(undefined, filename);
            });

            await rm.exec("hi");

            const outputData = helpersDoneSpy.mock.calls[0][0];

            expect(unlinkSpy).toHaveBeenCalledTimes(1);
            expect(outputData).toEqual("File with name hi deleted!");

        });

    });

    describe("when an error occurs", () => {

        it("should return error", async () => {

            (fs.unlink as unknown as jest.Mock).mockImplementation((filename, callback) => {
                callback({message: "File does not exist!"}, filename);
            });

            try {

                await rm.exec("file does not exist !");

            } catch(error) {

                expect(error.message).toEqual("File does not exist!");

            }

        });

    });

})