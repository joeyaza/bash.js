jest.mock("../../HistorySource/HistorySource");
import History from "./History";
import HelperMethods from "../../HelperMethods/HelperMethods.mock";
import HistorySource from "../../HistorySource/HistorySource.mock";

const helperMethods = new HelperMethods(),
      historySource = new HistorySource(),
      history = new History(helperMethods, historySource),
      helpersDoneSpy = jest.spyOn(helperMethods, "done");
jest.spyOn(historySource, "getHistory");

beforeEach(() => {

    jest.clearAllMocks();

});

describe("History", () => {

    describe("when asked to execute command", () => {

        it("should get command history source", async () => {

            (historySource.getHistory as unknown as jest.Mock).mockImplementation(() => {
                return Promise.resolve({'1': 'Ls'});
            });

            const data = await history.exec(),
                  trimmedData: string = data.trim();

            expect(trimmedData).toBe("1 Ls");

        });

        describe("when history source does not exist", () => {

            it("should return message to say so", async () => {

                (historySource.getHistory as unknown as jest.Mock).mockImplementation(() => {
                    return Promise.resolve(undefined);
                });
    
                const data = await history.exec();

                expect(data).toBe("No history yet! Get writing commands!!");

            });

        });


        it("should print the the command line history", async () => {

            await history.exec();

            const outputData = helpersDoneSpy.mock.calls[0][0];

            expect(typeof outputData).toBe('string');

        });

    });

});