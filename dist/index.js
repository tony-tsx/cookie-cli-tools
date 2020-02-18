"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const logger_1 = __importDefault(require("./logger"));
const error_1 = __importDefault(require("./error"));
var Tools;
(function (Tools) {
    Tools.Error = error_1.default;
    Tools.logger = logger_1.default;
})(Tools || (Tools = {}));
module.exports = Tools;
