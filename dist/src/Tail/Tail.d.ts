import Helpers from "../HelperMethods/HelperMethods";
export default class Tail {
    private helpers;
    constructor(helpers: Helpers);
    exec(fullPath: string, lines: number): Promise<any>;
}
