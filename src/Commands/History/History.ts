import {ICommand} from "../../../index";

export default class History implements ICommand {

    constructor(private helperMethods, 
                private historySource) {


    }

    public exec(): Promise<any> {

        return new Promise( async (resolve) => {

            const cmdHistory = await this.historySource.getHistory();

            let dirStr = "";
            
            if (typeof cmdHistory === "object") {

                for (let [key, value] of Object.entries(cmdHistory)) {
    
                    dirStr = ` ${dirStr}\n${key} ${value}`;
    
                }

            } else {

                dirStr = "No history yet! Get writing commands!!";

            }

            return resolve(this.helperMethods.done(dirStr));

        });
         
    } 

}