export interface Helpers {

    getCmd: (string) => string;
    getPath: (string) => {};
    done: (any) => void;

}

class HelperMethods implements Helpers {

    public constructor(){}

    public getCmd(userInput: string): string {
        
        const userCmd = userInput.split(" ")[0];

        return userCmd.charAt(0).toUpperCase() + userCmd.slice(1);

    }

    public getPath(userInput: string): {path: string, lineNumber: number | null} {

        const lastItem = userInput.split(" ").pop(),
            lineNumber = Number.isInteger(Number(lastItem)) ? Number(lastItem) : null;

        return {
            path: userInput.substr(userInput.indexOf(" ") + 1),
            lineNumber
        }

    }

    public done(output: any): void {

        process.stdout.write(output);

        process.stdout.write('\nprompt > ');

    }

}

export default HelperMethods;