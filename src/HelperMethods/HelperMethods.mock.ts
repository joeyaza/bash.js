import {Helpers} from "./HelperMethods";

class HelperMethodsMock implements Helpers {

    public constructor(){}

    public getCmd(userInput: string): string {

        return userInput;

    }

    public getPath(userInput: string): {path: string, lineNumber: number | null} {

        return {
            path: userInput.substr(userInput.indexOf(" ") + 1),
            lineNumber: 10
        }

    }

    public done(output: string): string {

      return output;

    }

}

export default HelperMethodsMock;