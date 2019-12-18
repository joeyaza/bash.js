import Helpers from "../../HelperMethods/HelperMethods";
import * as fs from "fs";

export default class Mkdir {

    constructor(private helpers: Helpers) {


    }

    public exec(fullPath: string): Promise<any> {

        return new Promise((resolve, reject) => {

            fs.mkdir(fullPath, (err) => {

                if (err) return reject(err);

                resolve(this.helpers.done(""));

            });
         
        });

    } 

}