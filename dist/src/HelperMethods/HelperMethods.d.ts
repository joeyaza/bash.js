export interface Helpers {
    getCmd: (string: any) => string;
    getPath: (string: any) => {};
    done: (any: any) => void;
}
declare class HelperMethods implements Helpers {
    constructor();
    getCmd(userInput: string): string;
    getPath(userInput: string): {
        path?: string;
        lineNumber?: number | null;
    };
    done(output: any): void;
}
export default HelperMethods;
