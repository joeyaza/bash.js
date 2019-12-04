"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../index");
class History {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec() {
        return new Promise((resolve) => {
            let dirStr = "";
            for (let [key, value] of Object.entries(index_1.historySource)) {
                dirStr = `${dirStr}\n${key} ${value}`;
            }
            resolve(this.helpers.done(dirStr));
        });
    }
}
exports.default = History;
//# sourceMappingURL=History.js.map