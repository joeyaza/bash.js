"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const History_1 = require("./History");
const HelperMethods_mock_1 = require("../../HelperMethods/HelperMethods.mock");
const HistorySource_mock_1 = require("../../HistorySource/HistorySource.mock");
const helperMethods = new HelperMethods_mock_1.default(), historySource = new HistorySource_mock_1.default(), history = new History_1.default(helperMethods, historySource), helpersDoneSpy = jest.spyOn(helperMethods, "done"), getHistorySpy = jest.spyOn(historySource, "getHistory");
beforeEach(() => {
    jest.clearAllMocks();
});
describe("History", () => {
    describe("when asked to execute command", () => {
        it("should get command history source", () => __awaiter(void 0, void 0, void 0, function* () {
            yield history.exec();
            expect(getHistorySpy).toHaveBeenCalledTimes(1);
        }));
        it("should print the the command line history", () => __awaiter(void 0, void 0, void 0, function* () {
            yield history.exec();
            const outputData = helpersDoneSpy.mock.calls[0][0];
            expect(typeof outputData).toBe('string');
        }));
    });
});
//# sourceMappingURL=History.spec.js.map