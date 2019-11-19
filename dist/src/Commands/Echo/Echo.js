"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Echo {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec(fullPath) {
        return this.helpers.done(fullPath);
    }
}
exports.default = Echo;
//# sourceMappingURL=Echo.js.map