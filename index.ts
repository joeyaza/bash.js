import HelperMethods from "./src/HelperMethods/HelperMethods";
import HistorySource from "./src/HistorySource/HistorySource";

export interface ICommand {

    exec: (string?, number?) => void | Promise<any>

}

const helpers = new HelperMethods(),
      historySource = new HistorySource("history");

process.stdout.write('Type exit or exit() to leave shell :) \nprompt > ');
// process.stdout.write('\nprompt > ');

//the stdin 'data' event triggers after a user types in a line
process.stdin.on("data", async (userInput: any) => {

    let userInputStr: string;

    if (userInput.toString('base64') === "G1tB") {

        const history: object = await historySource.getHistory();

        userInputStr = history[Object.keys(history)[0]];

        process.stdout.write(userInputStr);

    } else {

        userInputStr = userInput.toString().trim();

    }

    try {

        if (userInputStr.includes("exit")) process.stdout.write('\nThanks for using, bye! ') && process.exit();

        const userCmd: string = helpers.getCmd(userInputStr).toString(),
              {path, lineNumber} = helpers.getPath(userInputStr),
              historySourceNumber: number = await historySource.getLastCommand(),
              {default: command} = await import(`./src/Commands/${userCmd}/${userCmd}`),
              cmdExec: ICommand = new command(helpers, historySource);

        await cmdExec.exec(path, lineNumber);

        if (userCmd) await historySource.setHistory({[historySourceNumber + 1]: userCmd});

    } catch(error) {

        process.stdout.write(`Looks like there's an issue ... in any case take a look at the below error message \n ${error.message}`);
        process.stdout.write('\nprompt > ');

    }

}); 