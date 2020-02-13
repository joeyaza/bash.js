import Helpers from "../../HelperMethods/HelperMethods";
import * as fs from "fs";
import { ICommand } from "../../../index";

export default class Touch implements ICommand {

    constructor(private helpers: Helpers) {


    }

    public async exec(fileNames: string): Promise<any> {

        const fileNamesArr: string[] = fileNames.split(" "),
              fileNamesCreatedArr: string[] = await Promise.all(this.writeFiles(fileNamesArr)),
              createdStr: string = (fileNamesArr.length > 1) ? 
              `Files with names ${fileNamesCreatedArr.join(" ")} created!` : 
              `File with name ${fileNamesCreatedArr} created!`

        return Promise.resolve(this.helpers.done(createdStr));

    }

    private writeFiles(fileNamesArr: string[]): any {

        return fileNamesArr.map((name: string) => {

            return new Promise((resolve, reject) => {

                fs.writeFile(name, null, (error) => {
                        
                    if (error) return reject(error);
                    
                    resolve(name);
    
                });

            });

        });

    }

}