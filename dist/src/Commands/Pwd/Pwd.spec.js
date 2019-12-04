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
const Pwd_1 = require("./Pwd");
const HelperMethods_mock_1 = require("../../HelperMethods/HelperMethods.mock");
const helperMethods = new HelperMethods_mock_1.default(), pwd = new Pwd_1.default(helperMethods), helpersDoneSpy = jest.spyOn(helperMethods, "done"), processCwdSpy = jest.spyOn(process, "cwd");
beforeEach(() => {
    jest.clearAllMocks();
});
describe("Pwd", () => {
    describe("when asked to execute command", () => {
        it("should print the current directory", () => __awaiter(void 0, void 0, void 0, function* () {
            yield pwd.exec();
            const outputData = helpersDoneSpy.mock.calls[0][0];
            expect(processCwdSpy).toHaveBeenCalledTimes(1);
            expect(outputData).toBe(process.cwd());
        }));
    });
});
//# sourceMappingURL=Pwd.spec.js.map