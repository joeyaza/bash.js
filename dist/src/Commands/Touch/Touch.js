"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Touch {
    constructor(helpers) {
        this.helpers = helpers;
    }
    exec(fileNames) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileNamesArr = fileNames.split(" "), fileNamesCreatedArr = yield Promise.all(this.writeFiles(fileNamesArr)), createdStr = (fileNamesArr.length > 1) ?
                `Files with names ${fileNamesCreatedArr.join(" ")} created!` :
                `File with name ${fileNamesCreatedArr} created!`;
            return Promise.resolve(this.helpers.done(createdStr));
        });
    }
    writeFiles(fileNamesArr) {
        return fileNamesArr.map((name) => {
            return new Promise((resolve, reject) => {
                fs.writeFile(name, null, (error) => {
                    if (error)
                        return reject(error);
                    resolve(name);
                });
            });
        });
    }
}
exports.default = Touch;
//# sourceMappingURL=Touch.js.map