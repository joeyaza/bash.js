import History from "./History";
import HelperMethods from "../../HelperMethods/HelperMethods.mock";

const helperMethods = new HelperMethods(),
    history = new History(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done");

beforeEach(() => {

    jest.clearAllMocks();

});

describe("History", () => {

    describe("when asked to execute command", () => {

        it("should print the the command line history", async () => {

            await history.exec();

            const outputData = helpersDoneSpy.mock.calls[0][0];

            console.log(">>>>", outputData);

            expect(typeof outputData).toBe('string');

        });

    });

});