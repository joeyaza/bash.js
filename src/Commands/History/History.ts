import HelperMethods from "../../HelperMethods/HelperMethods";
import {ICommand} from "../../../index";
import HistorySource from "../../HistorySource/HistorySource";

export default class History implements ICommand {

    constructor(private helperMethods: HelperMethods, 
                private historySource: HistorySource) {


    }

    public exec(): Promise<any> {

        return new Promise( async (resolve) => {

            const cmdHistory = await this.historySource.getHistory();

            let dirStr = "";

            for (let [key, value] of Object.entries(cmdHistory)) {

                dirStr = ` ${dirStr}\n${key} ${value}`;

            }

            resolve(this.helperMethods.done(dirStr));

        });
         
    } 

}