export declare const sucess: (...messages: string[]) => void;
export declare const info: (...messages: string[]) => void;
export declare const warn: (...messages: string[]) => void;
export declare const error: (...messages: string[]) => void;
export declare const debug: (...messages: string[]) => void;
export declare const log: (...messages: string[]) => void;
declare const logger: {
    sucess: (...messages: string[]) => void;
    info: (...messages: string[]) => void;
    warn: (...messages: string[]) => void;
    error: (...messages: string[]) => void;
    debug: (...messages: string[]) => void;
    log: (...messages: string[]) => void;
    config: {
        enableVerbose: () => void;
        disableVerbose: () => void;
        isVerbose: () => boolean;
        disable: () => void;
        enable: () => void;
    };
};
export default logger;
//# sourceMappingURL=logger.d.ts.map