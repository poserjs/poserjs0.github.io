let poserGojsApi

if (typeof global !== "undefined") {
    // global already exists
} else if (typeof window !== "undefined") {
    window.global = window;
} else if (typeof self !== "undefined") {
    self.global = self;
} else {
    throw new Error("cannot export Go (neither global, window nor self is defined)");
}

function convert(resp) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (resp == null || typeof resp != "object") return resp;

    // Handle Array
    if (resp instanceof Array) {
        copy = []
        for (var i = 0, len = resp.length; i < len; i++) {
            copy[i] = convert(resp[i])
        }
        return copy
    }

    // Handle Object
    if (resp instanceof Object) {
        copy = {}
        for (var attr in resp) {

            if (resp.hasOwnProperty(attr)) {
                const nattr = attr.substr(0, 1).toLowerCase()+attr.substr(1)
                copy[nattr] = convert(resp[attr])
            }
        }
        return copy
    }

    throw new Error("Unable to convert the response")
}

self.onmessage = async function(e) {
    const data = e.data
    let result
    await setup()

    switch(data.api) {
        case "HandCalc": {
            result = poserGojsApi.HandCalc(...data.args)
            result = convert(result)
            break
        }
        case "HandEval": {
            result = poserGojsApi.HandEval(...data.args)
            result = convert(result)
            break
        }
        case "HandEvalPlayers": {
            result = poserGojsApi.HandEvalPlayers(...data.args)
            result = convert(result)
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
    if(!poserGojsApi) {
        poserGojsApi = await startGojsInst("/gojs/posergo.js")
    }
}

async function startGojsInst(jsUrl) {
    try {
        importScripts(jsUrl);
        return global.poserGojsApi
    } catch(ex) {
        console.error(ex)
    }
}
