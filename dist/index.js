import * as fs from 'fs';
// fs.readFile("package.json", (error: Error, data: Buffer) => {
//     console.log(data.toString());
// });
new Promise(function (resolve, reject) {
    fs.readFile("package.json", function (error, data) {
        if (error)
            return reject(error);
        resolve(data);
    });
}).then(function (data) {
    console.log(data.toString());
});
