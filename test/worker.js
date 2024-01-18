addEventListener("message", (event) => {
    let memory = event.data;

    (async function init_worker() {
        const { instance } = await WebAssembly.instantiateStreaming(
            fetch("main.wasm"), {
            env : {
                memory
            }
        });

        while(true) {
            instance.exports.update();
        }
    })();
});