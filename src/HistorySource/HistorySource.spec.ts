import HistorySource from "./HistorySource";
import * as fs from "fs";

jest.mock("fs");

const historySource: HistorySource = new HistorySource(),
      readFileSpy = jest.spyOn(fs, "readFile"),
      fileExistsSpy = jest.spyOn(fs, "exists");

describe("HistorySource", () => {

    describe("when asked to get the last command number", () => {

        describe("when history file exists", () => {

            it("should return number of last command entry", async () => {

                const lastCommandNumber: number = await historySource.getLastCommand();

                expect(lastCommandNumber).toBe(1);

            });

        });

        describe("when history file does not exist", () => {

            it("should return number 0", () => {



            });

        });

    });

});