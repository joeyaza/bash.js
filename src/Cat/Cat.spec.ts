import Cat from "./Cat";
import HelperMethods from "../HelperMethods/HelperMethods.mock";
import * as fs from "fs";

const helperMethods = new HelperMethods(),
    cat = new Cat(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done");

describe("Cat", () => {

    describe("when asked to execute command", () => {

        it("should read required file and pass contents to command line", async () => {

            await cat.exec("index.ts");

            expect(helpersDoneSpy.mock.calls[0][0]).toBeInstanceOf(Buffer);
        
        });

    });

});