import Helpers from "../Helpers";
export default class Cat {
    private helpers;
    constructor(helpers: Helpers);
    exec(fullPath: string): Promise<unknown>;
}
