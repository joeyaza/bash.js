declare class HistorySourceMock {
    constructor();
    getHistory(): Promise<{
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    }>;
}
export default HistorySourceMock;
