"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Cat {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec(fullPath) {
        const fileName = fullPath[0];
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, (err, data) => {
                if (err)
                    return reject(err);
                console.log(data);
                resolve(this.helpers.done(data));
            });
        });
    }
}
exports.default = Cat;
//# sourceMappingURL=Cat.js.map