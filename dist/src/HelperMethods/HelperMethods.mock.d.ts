import { Helpers } from "./HelperMethods";
declare class HelperMethodsMock implements Helpers {
    constructor();
    getCmd(userInput: string): string;
    getPath(userInput: string): {
        path: string;
        lineNumber: number | null;
    };
    done(output: string): string;
}
export default HelperMethodsMock;
