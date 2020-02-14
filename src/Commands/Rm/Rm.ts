import Helpers from "../../HelperMethods/HelperMethods";
import * as fs from "fs";
import { ICommand } from "../../../index";

export default class Touch implements ICommand {

    constructor(private helpers: Helpers) {


    }

    public async exec(fileNames: string): Promise<any> {

        console.log(0);

        const fileNamesArr: string[] = fileNames.split(" "),
              fileNamesDeletedArr: string[] = await Promise.all(this.deleteFiles(fileNamesArr)),
              deletedStr: string = (fileNamesArr.length > 1) ? 
              `Files with names ${fileNamesDeletedArr.join(" ")} deleted!` : 
              `File with name ${fileNamesDeletedArr} deleted!`

        return Promise.resolve(this.helpers.done(deletedStr));

    } 

    private deleteFiles(fileNamesArr: string[]): Promise<string>[] {

        return fileNamesArr.map((name: string) => {

            return new Promise((resolve, reject) => {

                fs.unlink(name, (error) => {
                        
                    if (error) return reject(error);
                    
                    resolve(name);
    
                });

            });

        });

    }

}