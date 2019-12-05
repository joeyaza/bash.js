import * as fs from "fs";

class HistorySource {

    private fileName = "history";

    constructor() {}

    public setHistory(cmd: {[key: number]: string}) {

        fs.exists(this.fileName, async (exists: boolean) => {

            if (exists) {

                const data: string = await this.get(),
                        currentHistorySourceObj = JSON.parse(data.toString());

                currentHistorySourceObj[Object.keys(cmd)[0]] = Object.values(cmd)[0];

                await this.set(JSON.stringify(currentHistorySourceObj));

                return;

            }

            await this.set(JSON.stringify(cmd));

        }); 

    }

    public async getHistory(): Promise<any> {

        const data: string = await this.get(),
              currentHistorySourceObj = JSON.parse(data.toString());

        return currentHistorySourceObj;

    }

    public async getLastCommand(): Promise<number> {

        try {

            const data = await this.get(),
            currentHistorySourceObj = JSON.parse(data.toString()),
            currentHistoryKeys = Object.keys(currentHistorySourceObj);

            return Number(currentHistoryKeys[currentHistoryKeys.length - 1]);

        } catch {

            return 0;

        }

    }

    private get(): Promise<any> {

        return new Promise((resolve, reject) => {

            fs.readFile(this.fileName, async (error, data) => {

                if(error) return reject(error);

                resolve(data.toString());

            });

        });

    }


    private set(cmd): Promise<any> {

        return new Promise((resolve, reject) => {

            fs.writeFile(this.fileName, cmd, (error) => {
                        
                if (error) return reject(error);
                
                resolve(true);
    
            });


        });

    }


}

export default HistorySource;