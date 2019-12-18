import Helpers from "../../HelperMethods/HelperMethods";
export default class Mkdir {
    private helpers;
    constructor(helpers: Helpers);
    exec(fullPath: string): Promise<any>;
}
