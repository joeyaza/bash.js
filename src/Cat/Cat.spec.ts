import Cat from "./Cat";
import HelperMethods from "../HelperMethods/HelperMethods.mock";
import * as fs from "fs";

const helperMethods = new HelperMethods(),
    cat = new Cat(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done");

let readFileSpy;

beforeEach(() => {

    jest.mock("fs");

    readFileSpy = jest.spyOn(fs, "readFile");

});

describe("Cat", () => {

    describe("when asked to execute command", () => {

        it("should read required file and pass contents to command line", async () => {

            await cat.exec("index.ts");

            const outputData = readFileSpy.mock.calls[0][0];

            expect(typeof outputData).toBe('string');
            expect(outputData).toEqual("index.ts");
        
        });

        it("should return error when errored", async () => {

            try {

                await cat.exec("something incorrect");

            } catch(error) {

                expect(error.message).toContain("ENOENT: no such file or directory");

            }

        });

    });

});