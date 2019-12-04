import Helpers from "../../HelperMethods/HelperMethods";
import {ICommand} from "../../../index";


export default class Pwd implements ICommand {

    constructor(private helpers: Helpers) {


    }

    public exec(): Promise<any> {

        return new Promise((resolve) => {

            resolve(this.helpers.done(process.cwd()));

        });
         
    } 

}