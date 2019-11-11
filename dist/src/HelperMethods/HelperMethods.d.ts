export interface Helpers {
    getCmd: (string: any) => string;
    getPath: (string: any) => string;
    done: (any: any) => void;
}
declare class HelperMethods implements Helpers {
    constructor();
    getCmd(userInput: string): string;
    getPath(userInput: string): string;
    done(output: any): void;
}
export default HelperMethods;
