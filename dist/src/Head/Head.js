"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Head {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec(fullPath, lines) {
        return new Promise((resolve, reject) => {
            fs.readFile(fullPath, (err, data) => {
                if (err)
                    return reject(err);
                const text = data.toString("utf8"), slicedText = text.split('\n').slice(0, lines).join("\n"), bufferText = Buffer.from(slicedText, "utf8");
                resolve(this.helpers.done(bufferText));
            });
        });
    }
}
exports.default = Head;
//# sourceMappingURL=Head.js.map