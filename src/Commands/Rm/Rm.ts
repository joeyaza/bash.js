import Helpers from "../../HelperMethods/HelperMethods";
import * as fs from "fs";
import { ICommand } from "../../../index";

export default class Touch implements ICommand {

    constructor(private helpers: Helpers) {


    }

    public exec(fileName: string): Promise<any> {

        return new Promise((resolve, reject) => {

            fs.unlink(fileName, (error) => {
                        
                if (error) return reject(error);
                
                resolve(this.helpers.done(`File with name ${fileName} deleted!`));
    
            });

        });

    } 

}