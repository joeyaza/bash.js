import Pwd from "./Pwd";
import HelperMethods from "../../HelperMethods/HelperMethods.mock";

const helperMethods = new HelperMethods(),
    pwd = new Pwd(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done"),
    processCwdSpy = jest.spyOn(process, "cwd");

beforeEach(() => {

    jest.clearAllMocks();

});

describe("Pwd", () => {

    describe("when asked to execute command", () => {

        it("should print the current directory", async () => {

            await pwd.exec();

            const outputData = helpersDoneSpy.mock.calls[0][0];

            expect(processCwdSpy).toHaveBeenCalledTimes(1);
            expect(outputData).toBe(process.cwd());

        });

    });

});