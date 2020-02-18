import cliLogger from './logger'
import CliError from './error'

namespace Tools {
  export const Error = CliError
  export const logger = cliLogger
}

export = Tools
