import HelperMethods from "./src/HelperMethods/HelperMethods";
import HistorySource from "./src/HistorySource/HistorySource";
import * as keypress from "keypress";

export interface ICommand {

    exec: (string?, number?) => void

}

const helpers = new HelperMethods(),
      historySource = new HistorySource();

let keypressChosen: boolean = false;

process.stdout.write('prompt > ');

keypress(process.stdin);
// process.stdin.on('keypress', async (chunk, key) => {

//     console.log("here !");
    
//     if (key.name === "up") {

//         keypressChosen = true;

//         const cmdHistory: object = await historySource.getHistory();
//         keypressChosen = false;
//         // process.stdout.write(`${cmdHistory[Object.keys(cmdHistory)[0]]}`);

//     }

// });

process.stdin.setRawMode(true);
// process.stdin.resume();
      
// the stdin 'data' event triggers after a user types in a line
process.stdin.on('data', async (userInput: any) => {

    console.log(2, userInput.toString('utf-8'), typeof userInput.toString('utf-8'));


    if (true) {

        
    }

    const userInputStr: string = userInput.toString().trim(),
            userCmd: string = helpers.getCmd(userInputStr).toString(),
            {path, lineNumber} = helpers.getPath(userInputStr),
            historySourceNumber: number = await historySource.getLastCommand();

    try {

        const {default: command} = await import(`./src/Commands/${userCmd}/${userCmd}`),
                cmdExec: ICommand = new command(helpers, historySource);

        await cmdExec.exec(path, lineNumber);

        if (userCmd) await historySource.setHistory({[historySourceNumber + 1]: userCmd});

    } catch(error) {

        // console.warn("Looks like there's an issue !!" 
        //         + "in any case take a look at the below error message");
        // console.error(error.message);
        process.stdout.write('\nprompt > ');

    }

}); 