import Helpers from "../../HelperMethods/HelperMethods";
import {ICommand, historySource} from "../../../index";

export default class History implements ICommand {

    constructor(private helpers: Helpers) {


    }

    public exec(): Promise<any> {

        return new Promise((resolve) => {

            let dirStr = "";

            for (let [key, value] of Object.entries(historySource)) {

                dirStr = `${dirStr}\n${key} ${value}`;

            }

            resolve(this.helpers.done(dirStr));

        });
         
    } 

}