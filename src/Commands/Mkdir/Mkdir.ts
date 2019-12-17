import Helpers from "../../HelperMethods/HelperMethods";
import * as fs from "fs";

export default class Mkdir {

    constructor(private helpers: Helpers) {


    }

    public exec(fullPath: string): Promise<any> {

        return new Promise((resolve, reject) => {

            fs.mkdir(fullPath, (err) => {

                console.log("!!!!!!!!!!!!", err);

                if (err) {
                    
                    console.log("ksdjdhkasjhdkajs");
                    return reject(err);

                }

                resolve(this.helpers.done(""));

            });
         
        });

    } 

}