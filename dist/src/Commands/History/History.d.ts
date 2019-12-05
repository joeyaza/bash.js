import HelperMethods from "../../HelperMethods/HelperMethods";
import { ICommand } from "../../../index";
import HistorySource from "../../HistorySource/HistorySource";
export default class History implements ICommand {
    private helperMethods;
    private historySource;
    constructor(helperMethods: HelperMethods, historySource: HistorySource);
    exec(): Promise<any>;
}
