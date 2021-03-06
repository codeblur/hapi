// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {};


// Server configuration

exports.server = {

    // TLS

    // tls: {
    //
    //     key: '',
    //     cert: ''
    // },

    // Router

    router: {
        isCaseSensitive: true,                      // Case-seinsitive paths
        normalizeRequestPath: false                 // Normalize incoming request path (Uppercase % encoding and decode non-reserved encoded characters)
    },

    // State

    state: {
        cookies: {
            parse: true,                            // Parse content of req.headers.cookie
            failAction: 'error',                    // Action on bad cookie - 'error': return 400, 'log': log and continue, 'ignore': continue
            clearInvalid: false                     // Automatically instruct the client to remove the invalid cookie
        }
    },

    // Payload

    payload: {
        maxBytes: 1024 * 1024
    },

    // Files path

    files: {
        relativeTo: 'cwd'                           // Determines what file and directory handlers use to base relative paths off: 'cwd', 'routes', or absolute path prefix
    },

    // timeout limits

    timeout: {
        socket: null,                               // Determines how long before closing request socket. Defaults to node (2 minutes)
        client: 10 * 1000,                          // Determines how long to wait for receiving client payload. Defaults to 10 seconds
        server: null                                // Determines how long to wait for server request processing. Disabled by default
    },

    // Debug

    debug: {
        request: ['uncaught']
    },

    // Pack

    labels: [],                                     // Server pack labels

    // Cache

    cache: null,                                    // Always created (null defaults to exports.cache)

    // Optional components

    cors: false,                                    // CORS headers on responses and OPTIONS requests (defaults: exports.cors): false -> null, true -> defaults, {} -> override defaults
    views: null,                                    // Presentation engine (defaults: exports.views)
    auth: {}                                        // Authentication
};


// CORS

exports.cors = {
    origin: ['*'],
    maxAge: 86400,                              // One day
    headers: [
        'Authorization',
        'Content-Type',
        'If-None-Match'
    ],
    additionalHeaders: [],
    methods: [
        'GET',
        'HEAD',
        'POST',
        'PUT',
        'DELETE',
        'OPTIONS'
    ],
    additionalMethods: [],
    exposedHeaders: [
        'WWW-Authenticate', 
        'Server-Authorization'
    ],
    additionalExposedHeaders: [],
    credentials: false
};


// Server caching

exports.cache = 'memory';                        // See Catbox


// State management

exports.state = {

    // Cookie attributes

    isSecure: false,
    isHttpOnly: false,
    path: null,
    domain: null,
    ttl: null,                              // MSecs, 0 means remove

    // Value generation

    encoding: 'none'                        // options: 'base64json', 'base64', 'form', 'none'
};


// Views 

exports.views = {
    engines: {
        'html': {
            module: 'handlebars',
            extension: 'html',
            cache: {},
            map: {}
        }
    },
    compileOptions: {},
    layout: false,
    layoutKeyword: 'content',
    encoding: 'utf-8',
    cache: {},
    allowAbsolutePaths: null,
    allowInsecureAccess: null
};
