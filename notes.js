// =================================================================
// Section 3. (3.)#13 Node JS - Core Modules
// =================================================================

// Node.js adopts this CommonJS format for organizing our JS application into multiple files. Within this Node.js application, we have the module.exports property which is used to determine the export from the current module.
// Types of Node modules: Module in Node.js is a simple or complex functionality organized into single or multiple JS files which can be used again throughout the Node.js application. There are three types of Node.js modules:

// Local/File-based modules
// External (Third-party) modules

// Core modules: The core modules are inbuilt modules in Node.js. These modules provide sufficient functionality so that external module designers can add in their own functionality that can be used while developing Node applications. The core modules include path, file system, os, util, and a few others.

// core modellarni kurish uchun termenaldan node => kiyin ikka marta tab

// AbortController                   AbortSignal                       AggregateError
// Array                             ArrayBuffer                       Atomics
// BigInt                            BigInt64Array                     BigUint64Array
// Blob                              Boolean                           BroadcastChannel
// Buffer                            ByteLengthQueuingStrategy         CompressionStream
// CountQueuingStrategy              Crypto                            CryptoKey
// CustomEvent                       DOMException                      DataView
// Date                              DecompressionStream               Error
// EvalError                         Event                             EventTarget
// File                              FinalizationRegistry              Float32Array
// Float64Array                      FormData                          Function
// Headers                           Infinity                          Int16Array
// Int32Array                        Int8Array                         Intl
// JSON                              Map                               Math
// MessageChannel                    MessageEvent                      MessagePort
// NaN                               Number                            Object
// Performance                       PerformanceEntry                  PerformanceMark
// PerformanceMeasure                PerformanceObserver               PerformanceObserverEntryList
// PerformanceResourceTiming         Promise                           Proxy
// RangeError                        ReadableByteStreamController      ReadableStream
// ReadableStreamBYOBReader          ReadableStreamBYOBRequest         ReadableStreamDefaultController
// ReadableStreamDefaultReader       ReferenceError                    Reflect
// RegExp                            Request                           Response
// Set                               SharedArrayBuffer                 String
// SubtleCrypto                      Symbol                            SyntaxError
// TextDecoder                       TextDecoderStream                 TextEncoder
// TextEncoderStream                 TransformStream                   TransformStreamDefaultController
// TypeError                         URIError                          URL
// URLSearchParams                   Uint16Array                       Uint32Array
// Uint8Array                        Uint8ClampedArray                 WeakMap
// WeakRef                           WeakSet                           WebAssembly
// WritableStream                    WritableStreamDefaultController   WritableStreamDefaultWriter
// _                                 _error                            assert
// async_hooks                       atob                              btoa
// buffer                            child_process                     clearImmediate
// clearInterval                     clearTimeout                      cluster
// console                           constants                         crypto
// decodeURI                         decodeURIComponent                dgram
// diagnostics_channel               dns                               domain
// encodeURI                         encodeURIComponent                escape
// eval                              events                            fetch
// fs                                global                            globalThis
// http                              http2                             https
// inspector                         isFinite                          isNaN
// module                            net                               os
// parseFloat                        parseInt                          path
// perf_hooks                        performance                       process
// punycode                          querystring                       queueMicrotask
// readline                          repl                              require
// setImmediate                      setInterval                       setTimeout
// stream                            string_decoder                    structuredClone
// sys                               timers                            tls
// trace_events                      tty                               undefined
// unescape                          url                               util
// v8                                vm                                wasi
// worker_threads                    zlib

// __proto__                         hasOwnProperty                    isPrototypeOf
// propertyIsEnumerable              toLocaleString                    toString
// valueOf
// constructor

// =================================================================
// Section 3. (3.)#14 Node JS - External (Third-party) modules
// =================================================================

//Third-party modules are the external Node modules. These are the third-party Node modules developed by Node developers that are made available through the Node ecosystem. But we need a package manager that maintains all the modules so that they can be accessed with ease. This is where NPM comes into the picture.

// NPM (Node Package Manager): NPM is the default package manager for JavaScript runtime environment in Node.js. The Node.js Package Manager (npm) is the default and most popular package manager in Node.js ecosystem that is primarily used to install and maintain external modules in Node.js application. Users can basically install the node modules needed for their application using npm.

// import inquirer from 'inquirer';  //npm install --save inquirer@^8.0.0
// Warning: To load an ES module, set "type": "module" in the package.json
// const inquirer = require('inquirer');

// =================================================================
// Section 3. (3.)#15 Node JS - Local/File-based Modules
// =================================================================

// It define the Node modules within a file in our application and is used within our application.
