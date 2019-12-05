declare class HistorySource {
    private fileName;
    constructor();
    setHistory(cmd: {
        [key: number]: string;
    }): void;
    getHistory(): Promise<any>;
    getLastCommand(): Promise<number>;
    private get;
    private set;
}
export default HistorySource;
