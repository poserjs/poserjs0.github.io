//
// This worker code is importing the script /js/poser.js
// which has been compiled by browserify
//
// There doesn't seem to be a convenient way
// to require() CommonJs modules inside web workers
//
// Until that is figured out we can just do
// a one-line hack inside /js/poser.js:
//
//     var poserApi = new PoserApi();
//     exports.poserApi = poserApi;
//     // Add the line below
//     +global.poserApi = poserApi;
//

let poserJsApi

if (typeof global !== "undefined") {
    // global already exists
} else if (typeof window !== "undefined") {
    window.global = window;
} else if (typeof self !== "undefined") {
    self.global = self;
} else {
    throw new Error("cannot export Go (neither global, window nor self is defined)");
}

self.onmessage = async function(e) {
    const data = e.data
    const apiOptions = {apiType: "localjs"}
    const args = data.args
    let result

    await setup()

    switch(data.api) {
        case "HandCalc": {
            result = await poserJsApi.HandCalc(apiOptions, args[0], args[1])
            break
        }
        case "HandEval": {
            result = await poserJsApi.HandEval(apiOptions, args[0], args[1], args[2], args[3])
            break
        }
        case "HandEvalPlayers": {
            result = await poserJsApi.HandEvalPlayers(apiOptions, args[0], args[1], args[2])
            break
        }
        default: {
            result = {err: "Unknown api: "+data.api}
            break
        }
    }
    self.postMessage({
        api: data.api,
        id: data.id,
        args: [...data.args],
        result,
    });
}

async function setup() {
    if(!poserJsApi) {
        poserJsApi = await startJsInst("/js/poser.js")
        console.log("PoserJS Module Loaded")
    }
}

async function startJsInst(jsUrl) {
    try {
        importScripts(jsUrl);
        return global.poserApi
    } catch(ex) {
        console.error(ex)
    }
}
