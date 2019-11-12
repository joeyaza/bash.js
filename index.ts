import HelperMethods from "./src/HelperMethods/HelperMethods";
import Echo from "./src/Echo/Echo";
import Cat from "./src/Cat/Cat";
import Head from "./src/Head/Head";

const cmdMap = {
    Echo,
    Cat,
    Head
}

export interface ICommand {

    exec: (string, number?) => void

}

const helpers = new HelperMethods();

process.stdout.write('prompt > ');
      
// the stdin 'data' event triggers after a user types in a line
process.stdin.on('data', async (userInput) => {

    const userInputStr = userInput.toString().trim(),
        userCmd: string = helpers.getCmd(userInputStr).toString(),
        {path, lineNumber} = helpers.getPath(userInputStr),
        cmdExec: ICommand = new cmdMap[userCmd](helpers);

        try {

            await cmdExec.exec(path, lineNumber);

        } catch(error) {

            console.log(error.message);
            process.stdout.write('\nprompt > ');

        }

}); 