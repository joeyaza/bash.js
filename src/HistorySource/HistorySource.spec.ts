jest.mock("fs");
import HistorySource from "./HistorySource";
import * as fs from "fs";

const historySource: HistorySource = new HistorySource();

describe("HistorySource", () => {

    describe("when asked to get history file", () => {

        it("should return history file when it exists", async () => {

            (fs.exists as unknown as jest.Mock).mockImplementation((filename, callback) => {
                callback(true);
           });

           (fs.readFile as unknown as jest.Mock).mockImplementation((filename, callback) => {
                callback(undefined, Buffer.from('{"1":"Ls"}'));
           });

           const historyFile = await historySource.getHistory();

           expect(historyFile).toEqual({
               "1": "Ls"
           });

        });

        it("should not return history file when it does not exist", async () => {

            (fs.exists as unknown as jest.Mock).mockImplementation((filename, callback) => {
                 callback(false);
            });
 
            const historyFile = await historySource.getHistory();
 
            expect(historyFile).toEqual(undefined);
 
         });

    });

    describe("when asked to get the last command number", () => {

        describe("when history file does not exist", () => {

            it("should return number 0", async () => {

                (fs.readFile as unknown as jest.Mock).mockImplementation((filename, callback) => {
                    callback(undefined, "")
                });

                const lastCommandNumber: number = await historySource.getLastCommand();

                expect(lastCommandNumber).toBe(0);

            });

        });

        describe("when history file exists", () => {

            it("should return number of last command entry", async () => {  

                (fs.readFile as unknown as jest.Mock).mockImplementation((filename, callback) => {
                    callback(undefined, Buffer.from('{"1":"Ls"}'));
                });

                const lastCommandNumber: number = await historySource.getLastCommand();

                expect(lastCommandNumber).toBe(1);

            });

        });

    });

});