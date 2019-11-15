import Helpers from "../HelperMethods/HelperMethods";
import * as fs from "fs";

export default class Cat {

    constructor(private helpers: Helpers) {


    }

    public exec(fullPath: string): Promise<any> {

        return new Promise((resolve, reject) => {

            fs.readFile(fullPath, (err, data) => {

                if (err) return reject(err);
    
                resolve(this.helpers.done(data.toString()));
    
            });

        });
         
    } 

}