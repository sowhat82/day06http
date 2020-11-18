const PROXY_CONFIG = [
    {
//    context: [ '/**' ], //Forward all HTTP request starting with / to http://localhost:3000
    target: 'http://localhost:3000',
    secure: false,
    logLevel: 'debug'
    }
]
module.exports = PROXY_CONFIG;
    