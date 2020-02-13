import Helpers from "../../HelperMethods/HelperMethods";
import { ICommand } from "../../../index";
export default class Touch implements ICommand {
    private helpers;
    constructor(helpers: Helpers);
    exec(fileNames: string): Promise<any>;
    private writeFiles;
}
