import * as fs from "fs";

class HistorySource {

    private fileName = "history";

    constructor() {}

    public setHistory(cmd: {[key: number]: string}) {

        fs.exists(this.fileName, async (exists: boolean) => {

            let historySourceToSet = JSON.stringify(cmd);
            
            if (exists) {

                const data: string = await this.getHistoryFile(),
                      currentHistorySourceObj = JSON.parse(data);

                currentHistorySourceObj[Object.keys(cmd)[0]] = Object.values(cmd)[0];
                historySourceToSet = JSON.stringify(currentHistorySourceObj);

            }

            await this.setHistoryFile(historySourceToSet);

        }); 

    }

    public async getHistory(): Promise<object | undefined> {

        return new Promise((resolve) => {

            fs.exists(this.fileName, async (exists: boolean) => {

                if (exists) {  
    
                    const data: string = await this.getHistoryFile(),
                            currentHistorySourceObj: object = JSON.parse(data);
    
                    return resolve(currentHistorySourceObj);
        
                }
    
                resolve(undefined);
    
            });

        });

    }

    public async getLastCommand(): Promise<number> {

        try {
            
            const data: string = await this.getHistoryFile(),
                  currentHistorySourceObj: object = JSON.parse(data),
                  currentHistoryKeys: string[] = Object.keys(currentHistorySourceObj);

            return Number(currentHistoryKeys[currentHistoryKeys.length - 1]);

        } catch(error) {

            return 0;

        }

    }

    private getHistoryFile(): Promise<string> {

        return new Promise((resolve, reject) => {

            fs.readFile(this.fileName, async (error, data) => {

                if(error) return reject(error);

                resolve(data.toString());

            });

        });

    }

    private setHistoryFile(cmd: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            fs.writeFile(this.fileName, cmd, (error) => {
                        
                if (error) return reject(error);
                
                resolve(true);
    
            });

        });

    }

}

export default HistorySource;