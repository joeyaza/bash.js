declare class HistorySourceMock {
    constructor();
    setHistory(): void;
    getHistory(): Promise<{
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    }>;
    getLastCommand(): Promise<void>;
}
export default HistorySourceMock;
