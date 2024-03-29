import Head from "./Head";
import HelperMethods from "../../HelperMethods/HelperMethods.mock";
import * as fs from "fs";

const helperMethods = new HelperMethods(),
    head = new Head(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done");

let readFileSpy;

beforeEach(() => {

    jest.mock("fs");

    readFileSpy = jest.spyOn(fs, "readFile");

    jest.clearAllMocks();

});

describe("Head", () => {

    describe("when asked to execute command with number of lines", () => {

        it("should print the the correct number of lines of file", async () => {

            await head.exec("index.ts", 20);

            const outputData = helpersDoneSpy.mock.calls[0][0],
                stringLines = (outputData.match(/\n/g) || '').length + 1;

            expect(readFileSpy.mock.calls[0][0]).toBe("index.ts");
            expect(typeof outputData).toBe('string');
            expect(stringLines).toEqual(20);

        });

    });

    describe("when asked to execute command as default", () => {

        it("should print the the correct number of lines of file", async () => {

            await head.exec("index.ts", null);

            const outputData = helpersDoneSpy.mock.calls[0][0],
                stringLines = (outputData.match(/\n/g) || '').length + 1;

            expect(readFileSpy.mock.calls[0][0]).toBe("index.ts");
            expect(typeof outputData).toBe('string');
            expect(stringLines).toEqual(10);

        });

    });

    it("should return error when errored", async () => {

        try {

            await head.exec("something incorrect", null);

        } catch(error) {

            expect(error.message).toContain("ENOENT: no such file or directory");

        }

    });

});