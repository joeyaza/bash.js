import Helpers from "../HelperMethods/HelperMethods";
export default class Head {
    private helpers;
    constructor(helpers: Helpers);
    exec(fullPath: string, lines: number): Promise<any>;
}
