declare class HistorySource {
    private fileName;
    constructor(fileName: string);
    setHistory(cmd: {
        [key: number]: string;
    }): Promise<any>;
    getHistory(): Promise<object | undefined>;
    getLastCommand(): Promise<number>;
    private getHistoryFile;
    private setHistoryFile;
}
export default HistorySource;
