import CliError from './error';
declare namespace CookieCli {
    namespace Tools {
        const Error: typeof CliError;
        const logger: {
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
    }
}
export = CookieCli;
//# sourceMappingURL=index.d.ts.map