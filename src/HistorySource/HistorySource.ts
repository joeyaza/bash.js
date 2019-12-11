import * as fs from "fs";

class HistorySource {

    private fileName = "history";

    constructor() {}

    public setHistory(cmd: {[key: number]: string}) {

        fs.exists(this.fileName, async (exists: boolean) => {

            let historySourceToSet = JSON.stringify(cmd);
            const data: string = await this.getHistoryFile();

            if (exists && data) {

                const currentHistorySourceObj = JSON.parse(data);

                currentHistorySourceObj[Object.keys(cmd)[0]] = Object.values(cmd)[0];
                historySourceToSet = JSON.stringify(currentHistorySourceObj);

            }

            await this.setHistoryFile(historySourceToSet);

        }); 

    }

    public async getHistory(): Promise<string> {

        const data: string = await this.getHistoryFile(),
                currentHistorySourceObj = JSON.parse(data);

        return currentHistorySourceObj;

    }

    public async getLastCommand(): Promise<number> {

        try {
            
            const data: string = await this.getHistoryFile(),
                  currentHistorySourceObj = JSON.parse(data),
                  currentHistoryKeys = Object.keys(currentHistorySourceObj);

            return Number(currentHistoryKeys[currentHistoryKeys.length - 1]);

        } catch {

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


    private setHistoryFile(cmd): Promise<any> {

        return new Promise((resolve, reject) => {

            fs.writeFile(this.fileName, cmd, (error) => {
                        
                if (error) return reject(error);
                
                resolve(true);
    
            });

        });

    }

}

export default HistorySource;