jest.mock("fs");
import HistorySource from "./HistorySource";
import * as fs from "fs";

const historySource: HistorySource = new HistorySource("historyTest");

describe("HistorySource", () => {

    describe("when asked to get history file", () => {

        it("should return history file when it exists", async () => {

           (fs.existsSync as unknown as jest.Mock).mockImplementation((filename) => {
                return true;
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

            (fs.existsSync as unknown as jest.Mock).mockImplementation((filename) => {
                return false;
            });
 
            const historyFile = await historySource.getHistory();
 
            expect(historyFile).toEqual(undefined);
 
         });

         it("should return error when unable to get history", async () => {

            (fs.existsSync as unknown as jest.Mock).mockImplementation((filename) => {
                return true;
            });

            (fs.readFile as unknown as jest.Mock).mockImplementation((filename, callback) => {
                callback(true);
            });
 
            try {

                await historySource.getHistory();

            } catch(error) {

                expect(error).toBe(true);

            }             
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

    describe("when asked to set history file", () => {

        it("should add to history file if it exists", async () => {

            (fs.existsSync as unknown as jest.Mock).mockImplementation((filename) => {
                return true;
            });

            (fs.readFile as unknown as jest.Mock).mockImplementation((filename, callback) => {
                callback(undefined, Buffer.from('{"1":"Pwd"}'));
            });

            (fs.writeFile as unknown as jest.Mock).mockImplementation((filename, cmd, callback) => {
                callback(false);
            });
 
            const historySet: boolean = await historySource.setHistory({ '12': 'Ls' });
            
            expect(historySet).toStrictEqual({
                "1": "Pwd",
                "12": "Ls"
            });

        });

        it("should create and set history file when file does not exist", async () => {

            (fs.existsSync as unknown as jest.Mock).mockImplementation((filename) => {
                return false;
            });

            (fs.writeFile as unknown as jest.Mock).mockImplementation((filename, cmd, callback) => {
                callback(false);
            });
 
            const historySet: boolean = await historySource.setHistory({ '1': 'Echo' });
            
            expect(historySet).toStrictEqual({
                "1": "Echo"
            });

        });

        it("should return error when unable to set history", async () => {

            (fs.writeFile as unknown as jest.Mock).mockImplementation((filename, cmd, callback) => {
                callback(true);
            });

            try {

                await historySource.setHistory({ '1': 'Echo' });

            } catch(error) {

                expect(error).toBe(true);

            }
             
        });

    });

});