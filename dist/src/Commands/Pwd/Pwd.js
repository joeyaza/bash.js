"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pwd {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec() {
        return new Promise((resolve) => {
            resolve(this.helpers.done(process.cwd()));
        });
    }
}
exports.default = Pwd;
//# sourceMappingURL=Pwd.js.map