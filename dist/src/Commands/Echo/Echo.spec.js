"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Echo_1 = require("./Echo");
const HelperMethods_mock_1 = require("../../HelperMethods/HelperMethods.mock");
const helperMethods = new HelperMethods_mock_1.default(), echo = new Echo_1.default(helperMethods), helpersDoneSpy = jest.spyOn(helperMethods, "done");
describe("Echo", () => {
    describe("when asked to execute command", () => {
        it("should echo the correct input", () => {
            echo.exec("Hello World!");
            expect(helpersDoneSpy).toHaveBeenCalledWith("Hello World!");
        });
    });
});
//# sourceMappingURL=Echo.spec.js.map