import Helpers from "../HelperMethods/HelperMethods";
import * as fs from "fs";

export default class Head {

    constructor(private helpers: Helpers) {


    }

    public exec(fullPath: string, lines: number): Promise<any> {

        return new Promise((resolve, reject) => {

            fs.readFile(fullPath, (err, data) => {

                if (err) return reject(err);

                const text = data.toString("utf8"),
                    slicedText = text.split('\n').slice(0, lines).join("\n"),
                    bufferText = Buffer.from(slicedText, "utf8");
    
                resolve(this.helpers.done(bufferText));
    
            });

        });
         
    } 

}