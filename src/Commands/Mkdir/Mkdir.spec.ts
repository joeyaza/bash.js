jest.mock("fs");
import Mkdir from "./Mkdir";
import HelperMethods from "../../HelperMethods/HelperMethods.mock";
import * as fs from "fs";

const helperMethods = new HelperMethods(),
    mkdir = new Mkdir(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done");

describe("Mkdir", () => {

    describe("when asked to execute command with path", () => {

        it("should create folder", async () => {

            (fs.mkdir as unknown as jest.Mock).mockImplementation((filename, callback) => {
                callback(null);
            });

            await mkdir.exec("test");
            
            const outputData = helpersDoneSpy.mock.calls[0][0];

            expect(outputData).toEqual("");

        });

        it("should return error when errored", async () => {

            (fs.mkdir as unknown as jest.Mock).mockImplementation((filename, callback) => {
                callback({message: "error!"});
            });
    
            try {
    
                await mkdir.exec("something  []{][{[}[[???+??   incorrect");
    
            } catch(error) {
    
                expect(error.message).toContain("error!");
    
            }
    
        });

    });

});