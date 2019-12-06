import History from "./History";
import HelperMethods from "../../HelperMethods/HelperMethods.mock";
import HistorySource from "../../HistorySource/HistorySource.mock";

const helperMethods = new HelperMethods(),
      historySource = new HistorySource(),
      history = new History(helperMethods, historySource),
      helpersDoneSpy = jest.spyOn(helperMethods, "done"),
      getHistorySpy = jest.spyOn(historySource, "getHistory");


beforeEach(() => {

    jest.clearAllMocks();

});

describe("History", () => {

    describe("when asked to execute command", () => {

        it("should get command history source", async () => {

            await history.exec();

            expect(getHistorySpy).toHaveBeenCalledTimes(1);

        });


        it("should print the the command line history", async () => {

            await history.exec();

            const outputData = helpersDoneSpy.mock.calls[0][0];

            expect(typeof outputData).toBe('string');

        });

    });

});