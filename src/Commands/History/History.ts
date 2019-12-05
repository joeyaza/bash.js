import HelperMethods from "../../HelperMethods/HelperMethods";
import {ICommand} from "../../../index";
import HistorySource from "../../HistorySource/HistorySource";

export default class History implements ICommand {

    constructor(private helperMethods: HelperMethods, 
                private historySource: HistorySource) {


    }

    public exec(): Promise<any> {

        console.log("here ! 1234>", this.helperMethods, this.historySource);

        return new Promise( async (resolve) => {

            const cmdHistory = await this.historySource.getHistory()
            
            resolve(this.helperMethods.done(cmdHistory));

        });
         
    } 

}