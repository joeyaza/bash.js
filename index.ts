import HelperMethods from "./src/HelperMethods/HelperMethods";
// import Echo from "./src/Commands/Echo/Echo";
// import Cat from "./src/Commands/Cat/Cat";
// import Head from "./src/Commands/Head/Head";
// import Tail from "./src/Commands/Tail/Tail";
// import Ls from "./src/Commands/Ls/Ls";
// import Pwd from "./src/Commands/Pwd/Pwd";

// const cmdMap = {
//     Echo,
    // Cat,
//     Head,
//     Tail,
//     Ls,
//     Pwd
// }

export interface ICommand {

    exec: (string?, number?) => void

}

export const historySource = {};

const helpers = new HelperMethods();

let historyNumber = 1;

process.stdout.write('prompt > ');
      
// the stdin 'data' event triggers after a user types in a line
process.stdin.on('data', async (userInput) => {

    const userInputStr = userInput.toString().trim(),
        userCmd: string = helpers.getCmd(userInputStr).toString(),
        {path, lineNumber} = helpers.getPath(userInputStr);

        historySource[historyNumber] = userCmd;

        historyNumber ++;

        try {

            const {default: command} = await import(`./src/Commands/${userCmd}/${userCmd}`),
                   cmdExec: ICommand = new command(helpers);

            await cmdExec.exec(path, lineNumber);

        } catch(error) {

            console.log(error.message);
            process.stdout.write('\nprompt > ');

        }

}); 