import { ICommand } from "../../../index";
export default class History implements ICommand {
    private helperMethods;
    private historySource;
    constructor(helperMethods: any, historySource: any);
    exec(): Promise<any>;
}
