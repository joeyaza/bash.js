import Echo from "./Echo";
import HelperMethods from "../../HelperMethods/HelperMethods.mock";

const helperMethods = new HelperMethods(),
    echo = new Echo(helperMethods),
    helpersDoneSpy = jest.spyOn(helperMethods, "done");

describe("Echo", () => {

    describe("when asked to execute command", () => {

        it("should echo the correct input", () => {

            echo.exec("Hello World!");

            expect(helpersDoneSpy).toHaveBeenCalledWith("Hello World!");

        });

    });

});