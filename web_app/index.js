const js = import("./node_modules/@mqtsuo02/hello-wasm/hello_wasm.js");
js.then((js) => {
  js.greet("WebAssembly");
});
