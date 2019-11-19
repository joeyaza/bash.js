import Helpers from "../../HelperMethods/HelperMethods";
import {ICommand} from "../../../index";

export default class Echo implements ICommand {

    constructor(private helpers: Helpers) {


    }

    public exec(fullPath: string) {

        return this.helpers.done(fullPath);
         
    } 

}