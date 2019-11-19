import HelperMethods from "./src/HelperMethods/HelperMethods";
import Echo from "./src/Commands/Echo/Echo";
import Cat from "./src/Commands/Cat/Cat";
import Head from "./src/Commands/Head/Head";
import Tail from "./src/Commands/Tail/Tail";
import Ls from "./src/Commands/Ls/Ls";

const cmdMap = {
    Echo,
    Cat,
    Head,
    Tail,
    Ls
}

export interface ICommand {

    exec: (string?, number?) => void

}

const helpers = new HelperMethods();

process.stdout.write('prompt > ');
      
// the stdin 'data' event triggers after a user types in a line
process.stdin.on('data', async (userInput) => {

    const userInputStr = userInput.toString().trim(),
        userCmd: string = helpers.getCmd(userInputStr).toString(),
        {path, lineNumber} = helpers.getPath(userInputStr);

        try {

            const cmdExec: ICommand = new cmdMap[userCmd](helpers);
            await cmdExec.exec(path, lineNumber);

        } catch(error) {

            console.log(error.message);
            process.stdout.write('\nprompt > ');

        }

}); 