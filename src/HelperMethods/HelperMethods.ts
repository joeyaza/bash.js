export interface Helpers {

    getCmd: (string) => string;
    getPath: (string) => string;
    done: (any) => void;

}

class HelperMethods implements Helpers {

    public constructor(){}

    public getCmd(userInput: string): string {
        
        const userCmd = userInput.split(" ")[0];

        return userCmd.charAt(0).toUpperCase() + userCmd.slice(1);

    }

    public getPath(userInput: string): string {

        return userInput.substr(userInput.indexOf(" ") + 1);

    }

    public done(output: any): void {

        process.stdout.write(output);

        process.stdout.write('\nprompt > ');

    }

}

export default HelperMethods;