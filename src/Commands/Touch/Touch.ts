import Helpers from "../../HelperMethods/HelperMethods";
import * as fs from "fs";
import { ICommand } from "../../../index";

export default class Touch implements ICommand {

    constructor(private helpers: Helpers) {


    }

    public async exec(fileNames: string): Promise<any> {

        const fileNamesArr: string[] = fileNames.split(" "),
              fileNamesCreatedArr: string[] = await Promise.all(this.writeFiles(fileNamesArr)),
              createdStr: string = 

        return Promise.resolve(this.helpers.done(`File with name ${fileNamesCreatedArr.join(", ")} created!`));

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