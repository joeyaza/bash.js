class HistorySourceMock {

    constructor() {}


    public async getHistory() {

        return Promise.resolve({'8': 'Ls',
        '9': 'History',
        '10': 'Ls',
        '11': 'History',
        '12': 'Ls'
      });

    }


}

export default HistorySourceMock;