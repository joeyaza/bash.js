import Helpers from "../../HelperMethods/HelperMethods";
import { ICommand } from "../../../index";
export default class Pwd implements ICommand {
    private helpers;
    constructor(helpers: Helpers);
    exec(): Promise<any>;
}
