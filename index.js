//================================================================
//Modul package CORE
//================================================================

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

// using modul setTimeout

// setTimeout(function () {
//   console.log("Ishga tushdi");
// }, 5000);

// using modul setInterval. it works as loop

// let number = 0;

// setInterval(function () {
//   console.log("Hisob", number);
//   number++;
// }, 1000);

// Hisob 0
// Hisob 1
// Hisob 2
// Hisob 3
// Hisob 4

// using file system

// const fs = require("fs");
// const data = fs.readFileSync("./input.txt", "utf8");
// console.log(data);

// console.log("********************************");

// fs.writeFileSync("./input.txt", `${data} \n\t\t by Joseph WebDev`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);

//What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

//================================================================
// Model Package External
//================================================================

//npm install moment --save --save=> projectni uziga install qiladi
//https://momentjs.com/docs/

const moment = require("moment");

//(1)
//const time = moment().format("YYYY-MM-DD");
//console.log(time); //2023-09-16

//(2)
setInterval(function () {
  const time = moment().format("YYYY-MM-DD HH:mm");
  console.log("Hozir:", time);
}, 1000);

//================================================================
// Model Package FILE
//================================================================
