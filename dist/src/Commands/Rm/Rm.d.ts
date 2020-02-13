import Helpers from "../../HelperMethods/HelperMethods";
import { ICommand } from "../../../index";
export default class Touch implements ICommand {
    private helpers;
    constructor(helpers: Helpers);
    exec(fileName: string): Promise<any>;
}
