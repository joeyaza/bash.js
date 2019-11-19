"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Cat {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec(fullPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(fullPath, (err, data) => {
                if (err)
                    return reject(err);
                resolve(this.helpers.done(data.toString()));
            });
        });
    }
}
exports.default = Cat;
//# sourceMappingURL=Cat.js.map