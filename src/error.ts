class CliError extends Error {
  constructor( message: string, error?: Error | string ) {
    super( message.replace(/(\s{2,})/gm, ' ').trim() )
    if ( error )
      this.stack =
        typeof error === 'string'
          ? error
          : error.stack || ''.split('\n').slice(0, 2).join('\n')
    else delete this.stack
  }
}

export default CliError
