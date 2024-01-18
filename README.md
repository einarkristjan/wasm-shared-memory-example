Minimal example of how to compile a wasm module with shared memory enabled.

Included is a test that updates a variable as fast as possible in the shared memory, using a web worker (thread).
The value of the variable is then displayed through the main thread.

As of writing, compiling the c code to WebAssembly worked with [LLVM clang](https://releases.llvm.org/download.html) version 17.0.1.

To run the test in a browser, you will need a server with [SharedArrayBuffers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) enabled.