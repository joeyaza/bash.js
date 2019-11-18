import Helpers from "../HelperMethods/HelperMethods";
import {ICommand} from "../../index";
import * as fs from "fs";

export default class Ls implements ICommand {

    constructor(private helpers: Helpers) {


    }

    public exec(fullPath?: string): Promise<any> {

        return new Promise((resolve, reject) => {

            const path = fullPath || process.cwd();

            fs.readdir(path, (err, items) => {

                if (err) return reject(err);

                let dirStr = "";

                items.forEach((item: string) => {

                    dirStr = `${dirStr}\n${item}`;

                });
    
                resolve(this.helpers.done(dirStr));
    
            });

        });
         
    } 

}