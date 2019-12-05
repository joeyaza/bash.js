import * as fs from "fs";

export class HistorySource {

    public constructor() {


    }

    public set(cmd: {number: string}): Promise<any> {

        const fileName: string = "../history";

        return new Promise((resolve, reject) => {

            fs.exists(fileName, (exists: boolean) => {

                if (exists) {
    
                    fs.readFile(fileName, (error, data) => {
    
                        if(error) return reject(error);
    
                        const obj = data.toJSON();
    
                        resolve(console.log(obj));
    
                    });
    
                } else {
    
                    fs.writeFile(fileName, cmd, (error) => {
                        
                        if (error) return reject(error);
                        
                        resolve(true);

                    });
    
                }
    
            }); 
    
        });

    }

    public get(): Promise<any> {

        return new Promise((resolve, reject)=> {


        });


    }


}