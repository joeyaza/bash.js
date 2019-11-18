"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Ls {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec(fullPath) {
        return new Promise((resolve, reject) => {
            const path = fullPath || process.cwd();
            fs.readdir(path, (err, items) => {
                if (err)
                    return reject(err);
                let dirStr = "";
                items.forEach((item) => {
                    dirStr = `${dirStr}\n${item}`;
                });
                resolve(this.helpers.done(dirStr));
            });
        });
    }
}
exports.default = Ls;
//# sourceMappingURL=Ls.js.map