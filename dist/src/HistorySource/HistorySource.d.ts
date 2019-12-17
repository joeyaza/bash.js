declare class HistorySource {
    private fileName;
    constructor();
    setHistory(cmd: {
        [key: number]: string;
    }): void;
    getHistory(): Promise<object | undefined>;
    getLastCommand(): Promise<number>;
    private getHistoryFile;
    private setHistoryFile;
}
export default HistorySource;
