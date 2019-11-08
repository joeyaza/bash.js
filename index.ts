import Helpers from "./src/Helpers";
import Echo from "./src/Echo/Echo";

const cmdMap = {
    Echo
}

export interface ICommand {

    exec: (string) => void

}

const helpers = new Helpers();

process.stdout.write('prompt > ');
      
// the stdin 'data' event triggers after a user types in a line
process.stdin.on('data', (userInput) => {

    const userInputStr = userInput.toString().trim(),
        userCmd: string = helpers.evalCmd(userInputStr).toString(),
        cmdExec: ICommand = new cmdMap[userCmd](helpers);

        console.log(userInputStr.split(" "))

        cmdExec.exec(userInputStr)

}); 