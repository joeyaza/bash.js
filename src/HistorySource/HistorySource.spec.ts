jest.mock("fs");
import HistorySource from "./HistorySource";
import * as fs from "fs";

const historySource: HistorySource = new HistorySource();

describe("HistorySource", () => {

    describe("when asked to get the last command number", () => {

        describe("when history file does not exist", () => {

            it("should return number 0", async () => {

                (fs.readFileSync as unknown as jest.Mock).mockReturnValue(undefined);

                const lastCommandNumber: number = await historySource.getLastCommand();

                expect(lastCommandNumber).toBe(0);

            });

        });

        describe("when history file exists", () => {

            it("should return number of last command entry", async () => {  

                (fs.readFileSync as unknown as jest.Mock).mockReturnValue(Buffer.from('{"1":"Ls"}'));

                const lastCommandNumber: number = await historySource.getLastCommand();

                expect(lastCommandNumber).toBe(1);

            });

        });

    });

});