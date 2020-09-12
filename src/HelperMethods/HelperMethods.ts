export interface Helpers {

    getCmd: (string) => string;
    getPath: (string) => {};
    done: (any) => void;

}

class HelperMethods implements Helpers {

    public constructor(){}

    public getCmd(userInput: string): string {
        
        const userCmd: string = userInput.split(" ")[0];

        return userCmd.charAt(0).toUpperCase() + userCmd.slice(1);

    }

    public getPath(userInput: string): {path?: string, lineNumber?: number | null} {

        if (userInput.split(" ").length === 1) return {};

        const lastItem = userInput.split(" ").pop(),
            lineNumber = Number.isInteger(Number(lastItem)) ? Number(lastItem) : null,
            path = (lineNumber) ? userInput.split(" ")[1] : userInput.substr(userInput.indexOf(" ") + 1);

        return {
            path,
            lineNumber
        }

    }

    public done(output: string): void {

        process.stdout.write(output);

        // process.stdout.write('\nprompt > ');

    }

}

export default HelperMethods;