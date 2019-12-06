import HistorySource from "./HistorySource";
import * as fs from "fs";

jest.mock("fs");

const historySource: HistorySource = new HistorySource();

describe("HistorySource", () => {

    describe("when asked to get the last command number", () => {

        describe("when history file exists", () => {

            it("should return number of last command entry", async () => {


            });

        });

        describe("when history file does not exist", () => {

            it("should return number 0", () => {



            });

        });

    });

});