import Helpers from "../../HelperMethods/HelperMethods";
import { ICommand } from "../../../index";
export default class Echo implements ICommand {
    private helpers;
    constructor(helpers: Helpers);
    exec(fullPath: string): void;
}
