const fs = jest.genMockFromModule('fs');
fs.readFile = (fileName, callback) => {
    callback(undefined, Buffer.from('{"1":"Ls"}'));
};
fs.exists = (callback) => {
    callback();
};
module.exports = fs;
//# sourceMappingURL=fs.js.map