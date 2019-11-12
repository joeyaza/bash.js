"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Tail {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec(fullPath, lines) {
        return new Promise((resolve, reject) => {
            fs.readFile(fullPath, (err, data) => {
                if (err)
                    return reject(err);
                const text = data.toString("utf8"), slicedText = text.split('\n').slice(-lines).join("\n"), bufferText = Buffer.from(slicedText, "utf8");
                resolve(this.helpers.done(bufferText));
            });
        });
    }
}
exports.default = Tail;
//# sourceMappingURL=Tail.js.map