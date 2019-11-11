import Helpers from "../HelperMethods/HelperMethods";
export default class Cat {
    private helpers;
    constructor(helpers: Helpers);
    exec(fullPath: string): Promise<unknown>;
}
