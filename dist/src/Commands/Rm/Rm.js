"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Touch {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec(fileName) {
        return new Promise((resolve, reject) => {
            fs.unlink(fileName, (error) => {
                if (error)
                    return reject(error);
                resolve(this.helpers.done(`File with name ${fileName} deleted!`));
            });
        });
    }
}
exports.default = Touch;
//# sourceMappingURL=Rm.js.map