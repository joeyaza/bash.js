import Helpers from "../Helpers";
import * as fs from "fs";

export default class Cat {

    constructor(private helpers: Helpers) {


    }

    public exec(fullPath: string) {

        const fileName = fullPath[0];

        return new Promise((resolve, reject) => {

            fs.readFile(fileName, (err, data) => {

                if (err) return reject(err);
    
                console.log(data);
    
                resolve(this.helpers.done(data));
    
            });

        });
         
    } 

}