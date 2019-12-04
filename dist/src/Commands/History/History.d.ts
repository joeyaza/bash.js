import Helpers from "../../HelperMethods/HelperMethods";
import { ICommand } from "../../../index";
export default class History implements ICommand {
    private helpers;
    constructor(helpers: Helpers);
    exec(): Promise<any>;
}
