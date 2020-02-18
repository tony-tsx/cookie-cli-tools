"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const SEPARATOR = ', ';
let verbose = false;
let disabled = false;
const message = {
    format: (...messages) => chalk_1.default.reset(messages.join(SEPARATOR)),
    sucess: (...messages) => `${chalk_1.default.green.bold('sucess')} ${message.format(...messages)}`,
    info: (...messages) => `${chalk_1.default.cyan.bold('info')} ${message.format(...messages)}`,
    warn: (...messages) => `${chalk_1.default.yellow.bold('warn')} ${message.format(...messages)}`,
    error: (...messages) => `${chalk_1.default.red.bold('error')} ${message.format(...messages)}`,
    debug: (...messages) => `${chalk_1.default.gray.bold('debug')} ${message.format(...messages)}`,
    log: (...messages) => `${message.format(...messages)}`,
};
const config = {
    enableVerbose: () => { verbose = true; },
    disableVerbose: () => { verbose = false; },
    isVerbose: () => verbose,
    disable: () => { disabled = true; },
    enable: () => { disabled = false; }
};
exports.sucess = (...messages) => {
    if (!disabled)
        console.log(message.sucess(...messages));
};
exports.info = (...messages) => {
    if (!disabled)
        console.log(message.info(...messages));
};
exports.warn = (...messages) => {
    if (!disabled)
        console.log(message.warn(...messages));
};
exports.error = (...messages) => {
    if (!disabled)
        console.log(message.error(...messages));
};
exports.debug = (...messages) => {
    if (!disabled)
        console.log(message.debug(...messages));
};
exports.log = (...messages) => {
    if (!disabled)
        console.log(message.log(...messages));
};
const logger = { sucess: exports.sucess, info: exports.info, warn: exports.warn, error: exports.error, debug: exports.debug, log: exports.log, config };
exports.default = logger;
