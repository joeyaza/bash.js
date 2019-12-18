"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Mkdir {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec(fullPath) {
        return new Promise((resolve, reject) => {
            fs.mkdir(fullPath, (err) => {
                if (err)
                    return reject(err);
                resolve(this.helpers.done(""));
            });
        });
    }
}
exports.default = Mkdir;
//# sourceMappingURL=Mkdir.js.map