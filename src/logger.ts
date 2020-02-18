import chalk from 'chalk'

const SEPARATOR = ', '

let verbose = false
let disabled = false

const message = {
  format: ( ...messages: string[] ) =>
    chalk.reset( messages.join( SEPARATOR ) ),

  sucess: ( ...messages: string[] ) =>
    `${chalk.green.bold( 'sucess' )} ${message.format( ...messages )}`,

  info: ( ...messages: string[] ) =>
    `${chalk.cyan.bold( 'info' )} ${message.format( ...messages )}`,

  warn: ( ...messages: string[] ) =>
    `${chalk.yellow.bold( 'warn' )} ${message.format( ...messages )}`,

  error: ( ...messages: string[] ) =>
    `${chalk.red.bold( 'error' )} ${message.format( ...messages )}`,

  debug: ( ...messages: string[] ) =>
    `${chalk.gray.bold( 'debug' )} ${message.format( ...messages )}`,

  log: ( ...messages: string[] ) =>
    `${message.format( ...messages )}`,
}

const config = {
  enableVerbose: () => { verbose = true },
  disableVerbose: () => { verbose = false },
  isVerbose: () => verbose,
  disable: () => { disabled = true },
  enable: () => { disabled = false }
}

export const sucess = ( ...messages: string[] ) => {
  if ( !disabled ) console.log( message.sucess( ...messages ) )
}

export const info = ( ...messages: string[] ) => {
  if ( !disabled ) console.log( message.info( ...messages ) )
}

export const warn = ( ...messages: string[] ) => {
  if ( !disabled ) console.log( message.warn( ...messages ) )
}

export const error = ( ...messages: string[] ) => {
  if ( !disabled ) console.log( message.error( ...messages ) )
}

export const debug = ( ...messages: string[] ) => {
  if ( !disabled ) console.log( message.debug( ...messages ) )
}

export const log = ( ...messages: string[] ) => {
  if ( !disabled ) console.log( message.log( ...messages ) )
}

const logger = { sucess, info, warn, error, debug, log, config }

export default logger
