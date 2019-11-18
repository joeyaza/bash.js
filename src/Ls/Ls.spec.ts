import Ls from "./Ls";
import HelperMethods from "../HelperMethods/HelperMethods.mock";
import * as fs from "fs";

const helperMethods = new HelperMethods(),
    ls = new Ls(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done");

let readdirSpy;

beforeEach(() => {

    jest.mock("fs");

    readdirSpy = jest.spyOn(fs, "readdir");

    jest.clearAllMocks();

});

describe("Ls", () => {

    describe("when asked to execute command without a directory", () => {

        it("should print the the correct directory files/ folders", async () => {

            await ls.exec();

            const outputData = helpersDoneSpy.mock.calls[0][0],
                currentDir = process.cwd();

            expect(readdirSpy.mock.calls[0][0]).toBe(currentDir);
            expect(typeof outputData).toBe('string');

        });

    });

    describe("when asked to execute command with a directory", () => {

        it("should print the the correct directory files/ folders", async () => {

            await ls.exec("src");

            const outputData = helpersDoneSpy.mock.calls[0][0];

            expect(readdirSpy.mock.calls[0][0]).toBe("src");
            expect(typeof outputData).toBe('string');

        });

    });

    it("should return error when errored", async () => {

        try {

            await ls.exec("something incorrect");

        } catch(error) {

            expect(error.message).toContain("ENOENT: no such file or directory");

        }

    });

});