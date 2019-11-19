import Tail from "./Tail";
import HelperMethods from "../../HelperMethods/HelperMethods.mock";
import * as fs from "fs";

const helperMethods = new HelperMethods(),
    tail = new Tail(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done");

let readFileSpy;

beforeEach(() => {

    jest.mock("fs");

    readFileSpy = jest.spyOn(fs, "readFile");

    jest.clearAllMocks();

});

describe("Tail", () => {

    describe("when asked to execute command with number of lines", () => {

        it("should print the the correct number of lines of file", async () => {

            await tail.exec("index.ts", 20);

            const outputData = helpersDoneSpy.mock.calls[0][0],
                stringLines = (outputData.match(/\n/g) || '').length + 1;

            expect(typeof outputData).toBe('string');
            expect(stringLines).toEqual(20);

        });

    });

    describe("when asked to execute command as default", () => {

        it("should print the the correct number of lines of file", async () => {

            await tail.exec("index.ts", null);

            const outputData = helpersDoneSpy.mock.calls[0][0],
                stringLines = (outputData.match(/\n/g) || '').length + 1;

            expect(typeof outputData).toBe('string');
            expect(stringLines).toEqual(10);

        });

    });

    it("should return error when errored", async () => {

        try {

            await tail.exec("something incorrect", null);

        } catch(error) {

            expect(error.message).toContain("ENOENT: no such file or directory");

        }

    });

});