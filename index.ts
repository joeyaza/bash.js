import HelperMethods from "./src/HelperMethods/HelperMethods";
import HistorySource from "./src/HistorySource/HistorySource";


export interface ICommand {

    exec: (string?, number?) => void

}


const helpers = new HelperMethods(),
      historySource = new HistorySource();

process.stdout.write('prompt > ');
      
// the stdin 'data' event triggers after a user types in a line
process.stdin.on('data', async (userInput) => {

    const userInputStr = userInput.toString().trim(),
        userCmd: string = helpers.getCmd(userInputStr).toString(),
        {path, lineNumber} = helpers.getPath(userInputStr),
        historySourceNumber: number = await historySource.getLastCommand();

        try {

            const {default: command} = await import(`./src/Commands/${userCmd}/${userCmd}`),
                   cmdExec: ICommand = new command(helpers, historySource);

            await cmdExec.exec(path, lineNumber);

            if (userCmd) await historySource.setHistory({[historySourceNumber + 1]: userCmd});

        } catch(error) {

            console.log(error.message);
            process.stdout.write('\nprompt > ');

        }

}); 