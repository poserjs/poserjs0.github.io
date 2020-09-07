(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GojsApi = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _workerApi = require("./workerApi");

var GojsApi =
/*#__PURE__*/
function (_WorkerApi) {
  (0, _inherits2["default"])(GojsApi, _WorkerApi);

  function GojsApi() {
    (0, _classCallCheck2["default"])(this, GojsApi);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(GojsApi).call(this, "gojs/gojs_worker.js"));
  }

  return GojsApi;
}(_workerApi.WorkerApi);

exports.GojsApi = GojsApi;
},{"./workerApi":7,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/getPrototypeOf":24,"@babel/runtime/helpers/inherits":25,"@babel/runtime/helpers/interopRequireDefault":26,"@babel/runtime/helpers/possibleConstructorReturn":29}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsApi = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _workerApi = require("./workerApi");

var JsApi =
/*#__PURE__*/
function (_WorkerApi) {
  (0, _inherits2["default"])(JsApi, _WorkerApi);

  function JsApi() {
    (0, _classCallCheck2["default"])(this, JsApi);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(JsApi).call(this, "js/js_worker.js"));
  }

  return JsApi;
}(_workerApi.WorkerApi);

exports.JsApi = JsApi;
},{"./workerApi":7,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/getPrototypeOf":24,"@babel/runtime/helpers/inherits":25,"@babel/runtime/helpers/interopRequireDefault":26,"@babel/runtime/helpers/possibleConstructorReturn":29}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocaljsApi = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _poserApi = require("./poserApi");

var _hand = require("../calc/hand");

var _handRank = require("../calc/handRank");

var _handCombos = require("../calc/handCombos");

var _handEvaluator = require("../calc/handEvaluator");

var _basicHandCalculator = require("../calc/basicHandCalculator");

var _lokiHandCalculator = require("../calc/lokiHandCalculator");

var LocaljsApi =
/*#__PURE__*/
function () {
  function LocaljsApi() {
    (0, _classCallCheck2["default"])(this, LocaljsApi);
    this.handEvaluator = new _handEvaluator.HandEvaluator();
  }

  (0, _createClass2["default"])(LocaljsApi, [{
    key: "MakeHandCalculator",
    value: function MakeHandCalculator(calcType) {
      var handCalculator;

      switch (calcType) {
        case "basic":
          handCalculator = new _basicHandCalculator.BasicHandCalculator();
          break;

        case "fast":
          throw new Error("calculator type not supported with js or wasm apis: " + calcType);

        case "loki":
          handCalculator = new _lokiHandCalculator.LokiHandCalculator();
          break;

        default:
          throw new Error("invalid calculator type: " + calcType);
      }

      return handCalculator;
    }
  }, {
    key: "HandCalc",
    value: function () {
      var _HandCalc = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(apiOptions, handStr, calcType) {
        var handRes, hand, err, handErr, handRank, holeStr, handCat, handCategory, handResult, handCalc, handValid, combosResult, handCombos, betterCombos, equalCombos, worseCombos, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                handRes = (0, _hand.StringToHand7)(handStr);
                hand = handRes[0];
                err = handRes[1];
                handErr = "";
                handRank = _handRank.HandRankBad;
                holeStr = "";
                handCat = "";
                handCategory = "";
                handResult = "";

                if (err) {
                  handErr = err;
                } else {
                  handCalc = this.MakeHandCalculator(calcType);
                  handRank = handCalc.CalcHandRank(hand);
                  handCat = (0, _handRank.GetHandCatStr)(handRank);
                  handCategory = (0, _handRank.GetHandCategoryStr)(handRank);
                  handResult = (0, _handRank.HandRankStr)(handRank);
                  holeStr = (0, _hand.GetHand7HoleStr)(hand);
                }

                handValid = hand !== _hand.Hand7Bad;
                combosResult = (0, _handCombos.Hand7Combos)(hand);
                handCombos = combosResult[0];
                betterCombos = combosResult[1];
                equalCombos = combosResult[2];
                worseCombos = combosResult[3];
                result = {
                  type: "handCalc",
                  err: err,
                  handStr: handStr,
                  hand: hand,
                  handValid: handValid,
                  handErr: handErr,
                  handRank: handRank,
                  hole: holeStr,
                  handCat: handCat,
                  handCategory: handCategory,
                  handResult: handResult,
                  handCombos: handCombos,
                  betterCombos: betterCombos,
                  equalCombos: equalCombos,
                  worseCombos: worseCombos
                };
                return _context.abrupt("return", result);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function HandCalc(_x, _x2, _x3) {
        return _HandCalc.apply(this, arguments);
      }

      return HandCalc;
    }()
  }, {
    key: "HandEval",
    value: function () {
      var _HandEval = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(apiOptions, nsims, players, handStr, calcType) {
        var handCalc, evalRequest, err, evalResult;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                handCalc = this.MakeHandCalculator(calcType);
                evalRequest = (0, _handEvaluator.MakeHandEvalRequest)(nsims, players);
                err = (0, _handEvaluator.HandEvalRequestSetHand)(evalRequest, handStr);
                evalResult = (0, _handEvaluator.MakeHandEvalResult)(evalRequest, err);

                if (err) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 7;
                return this.handEvaluator.eval(handCalc, evalRequest, evalResult);

              case 7:
                return _context2.abrupt("return", (0, _poserApi.MakeHandEvalResp)(evalResult));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function HandEval(_x4, _x5, _x6, _x7, _x8) {
        return _HandEval.apply(this, arguments);
      }

      return HandEval;
    }()
  }, {
    key: "HandEvalPlayers",
    value: function () {
      var _HandEvalPlayers = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(apiOptions, nsims, handStr, calcType) {
        var handCalc, handEvals, err, players, evalRequest, evalResult, resp;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                handCalc = this.MakeHandCalculator(calcType);
                handEvals = [];
                err = "";
                players = 2;

              case 4:
                if (!(players <= 9)) {
                  _context3.next = 19;
                  break;
                }

                evalRequest = (0, _handEvaluator.MakeHandEvalRequest)(nsims, players);
                err = (0, _handEvaluator.HandEvalRequestSetHand)(evalRequest, handStr);

                if (!err) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("break", 19);

              case 9:
                evalResult = (0, _handEvaluator.MakeHandEvalResult)(evalRequest, err);
                _context3.next = 12;
                return this.handEvaluator.eval(handCalc, evalRequest, evalResult);

              case 12:
                handEvals.push((0, _poserApi.MakeHandEvalResp)(evalResult));

                if (!evalResult.err) {
                  _context3.next = 16;
                  break;
                }

                err = evalResult.err;
                return _context3.abrupt("break", 19);

              case 16:
                players++;
                _context3.next = 4;
                break;

              case 19:
                resp = {
                  type: "handEvalPlayers",
                  err: err,
                  handEvals: handEvals
                };
                return _context3.abrupt("return", resp);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function HandEvalPlayers(_x9, _x10, _x11, _x12) {
        return _HandEvalPlayers.apply(this, arguments);
      }

      return HandEvalPlayers;
    }()
  }]);
  return LocaljsApi;
}();

exports.LocaljsApi = LocaljsApi;
},{"../calc/basicHandCalculator":8,"../calc/hand":11,"../calc/handCombos":12,"../calc/handEvaluator":13,"../calc/handRank":14,"../calc/lokiHandCalculator":16,"./poserApi":4,"@babel/runtime/helpers/asyncToGenerator":21,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/createClass":23,"@babel/runtime/helpers/interopRequireDefault":26,"@babel/runtime/regenerator":33}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeErrResp = MakeErrResp;
exports.MakeHandEvalResp = MakeHandEvalResp;
exports.AddHandEvalResp = AddHandEvalResp;
exports.RecalcHandEvalResp = RecalcHandEvalResp;
exports.PoserApi = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _localjsApi = require("./localjsApi");

var _jsApi = require("./jsApi");

var _gojsApi = require("./gojsApi");

var _restApi = require("./restApi");

var _wasmApi = require("./wasmApi");

var PoserApi =
/*#__PURE__*/
function () {
  function PoserApi() {
    (0, _classCallCheck2["default"])(this, PoserApi);
    this.localjsApi = new _localjsApi.LocaljsApi();
    this.jsApi = new _jsApi.JsApi();
    this.gojsApi = new _gojsApi.GojsApi();
    this.restApi = new _restApi.RestApi();
    this.wasmApi = new _wasmApi.WasmApi();
  }

  (0, _createClass2["default"])(PoserApi, [{
    key: "getApiInterface",
    value: function getApiInterface(apiOptions) {
      var apiInterface;

      switch (apiOptions.apiType) {
        case "localjs":
          apiInterface = this.localjsApi;
          break;

        case "js":
          apiInterface = this.jsApi;
          break;

        case "gojs":
          apiInterface = this.gojsApi;
          break;

        case "wasm":
          apiInterface = this.wasmApi;
          break;

        case "rest":
          apiInterface = this.restApi;
          break;

        default:
          throw new Error("invalid apiType: " + apiOptions.apiType);
      }

      return apiInterface;
    }
  }, {
    key: "HandCalc",
    value: function () {
      var _HandCalc = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(apiOptions, handStr, calcType) {
        var apiInterface;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                apiInterface = this.getApiInterface(apiOptions);
                _context.next = 4;
                return apiInterface.HandCalc(apiOptions, handStr, calcType);

              case 4:
                return _context.abrupt("return", _context.sent);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", MakeErrResp(_context.t0.toString()));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function HandCalc(_x, _x2, _x3) {
        return _HandCalc.apply(this, arguments);
      }

      return HandCalc;
    }()
  }, {
    key: "HandEval",
    value: function () {
      var _HandEval = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(apiOptions, nsims, players, handStr, calcType) {
        var apiInterface;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                apiInterface = this.getApiInterface(apiOptions);
                _context2.next = 4;
                return apiInterface.HandEval(apiOptions, nsims, players, handStr, calcType);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", MakeErrResp(_context2.t0.toString()));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function HandEval(_x4, _x5, _x6, _x7, _x8) {
        return _HandEval.apply(this, arguments);
      }

      return HandEval;
    }()
  }, {
    key: "HandEvalPlayers",
    value: function () {
      var _HandEvalPlayers = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(apiOptions, nsims, handStr, calcType) {
        var apiInterface;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                apiInterface = this.getApiInterface(apiOptions);
                _context3.next = 4;
                return apiInterface.HandEvalPlayers(apiOptions, nsims, handStr, calcType);

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", MakeErrResp(_context3.t0.toString()));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function HandEvalPlayers(_x9, _x10, _x11, _x12) {
        return _HandEvalPlayers.apply(this, arguments);
      }

      return HandEvalPlayers;
    }()
  }]);
  return PoserApi;
}();

exports.PoserApi = PoserApi;

function MakeErrResp(err) {
  if (err.startsWith("Error: ")) {
    err = err.substring(7);
  }

  return {
    type: "err",
    err: err
  };
}

function MakeHandEvalResp(result) {
  var resp = {
    type: "handEval",
    request: result.request,
    err: result.err,
    games: result.games,
    wins: result.wins,
    ties: result.ties,
    pties: result.pties,
    // pot ties, number of ties expressed as number of pots
    losses: result.losses,
    wp: 0,
    wo: 0,
    er: 0
  };
  RecalcHandEvalResp(resp);
  return resp;
}

function AddHandEvalResp(resp, result) {
  if (!resp.request) {
    resp.request = result.request;
  }

  if (resp.err === "") {
    resp.err = result.err;
  }

  resp.games += result.games;
  resp.wins += result.wins;
  resp.ties += result.ties;
  resp.pties += result.pties; // pot ties, number of ties expressed as number of pots

  resp.losses += result.losses;
}

function RecalcHandEvalResp(resp) {
  // calc pp, er (expected return), po, 
  resp.wp = (resp.wins + resp.pties) / resp.games;
  resp.wo = resp.wp === 0 ? Infinity : 1 / resp.wp - 1;
  var bet = 1;
  var pot = bet * resp.request.players;
  resp.er = resp.wp * pot - bet;
}
},{"./gojsApi":1,"./jsApi":2,"./localjsApi":3,"./restApi":5,"./wasmApi":6,"@babel/runtime/helpers/asyncToGenerator":21,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/createClass":23,"@babel/runtime/helpers/interopRequireDefault":26,"@babel/runtime/regenerator":33}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestApi = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var RestApi =
/*#__PURE__*/
function () {
  function RestApi() {
    (0, _classCallCheck2["default"])(this, RestApi);
  }

  (0, _createClass2["default"])(RestApi, [{
    key: "HandCalc",
    value: function () {
      var _HandCalc = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(apiOptions, handStr, calcType) {
        var url, response, json;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(apiOptions.apiType !== "rest")) {
                  _context.next = 2;
                  break;
                }

                throw new Error("invalid apiType in rest code: " + apiOptions.apiType);

              case 2:
                url = apiOptions.server + '/v1/api/calc/' + handStr + "?calc=" + calcType;
                _context.next = 5;
                return fetch(url);

              case 5:
                response = _context.sent;

                if (!(response.status !== 200)) {
                  _context.next = 8;
                  break;
                }

                throw new Error(response.statusText);

              case 8:
                _context.next = 10;
                return response.json();

              case 10:
                json = _context.sent;
                return _context.abrupt("return", json);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function HandCalc(_x, _x2, _x3) {
        return _HandCalc.apply(this, arguments);
      }

      return HandCalc;
    }()
  }, {
    key: "HandEval",
    value: function () {
      var _HandEval = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(apiOptions, nsims, players, handStr, calcType) {
        var url, response, json;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(apiOptions.apiType !== "rest")) {
                  _context2.next = 2;
                  break;
                }

                throw new Error("invalid apiType in rest code: " + apiOptions.apiType);

              case 2:
                url = apiOptions.server + '/v1/api/eval/' + handStr + "?calc=" + calcType + "&nsims=" + nsims.toString() + "&players=" + players.toString() + "&threads=" + apiOptions.threads.toString();
                _context2.next = 5;
                return fetch(url);

              case 5:
                response = _context2.sent;

                if (!(response.status !== 200)) {
                  _context2.next = 8;
                  break;
                }

                throw new Error(response.statusText);

              case 8:
                _context2.next = 10;
                return response.json();

              case 10:
                json = _context2.sent;
                return _context2.abrupt("return", json);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function HandEval(_x4, _x5, _x6, _x7, _x8) {
        return _HandEval.apply(this, arguments);
      }

      return HandEval;
    }()
  }, {
    key: "HandEvalPlayers",
    value: function () {
      var _HandEvalPlayers = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(apiOptions, nsims, handStr, calcType) {
        var url, response, json;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(apiOptions.apiType !== "rest")) {
                  _context3.next = 2;
                  break;
                }

                throw new Error("invalid apiType in rest code: " + apiOptions.apiType);

              case 2:
                url = apiOptions.server + '/v1/api/eval/' + handStr + "?calc=" + calcType + "&nsims=" + nsims.toString() + "&threads=" + apiOptions.threads.toString();
                _context3.next = 5;
                return fetch(url);

              case 5:
                response = _context3.sent;

                if (!(response.status !== 200)) {
                  _context3.next = 8;
                  break;
                }

                throw new Error(response.statusText);

              case 8:
                _context3.next = 10;
                return response.json();

              case 10:
                json = _context3.sent;
                return _context3.abrupt("return", json);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function HandEvalPlayers(_x9, _x10, _x11, _x12) {
        return _HandEvalPlayers.apply(this, arguments);
      }

      return HandEvalPlayers;
    }()
  }]);
  return RestApi;
}();

exports.RestApi = RestApi;
},{"@babel/runtime/helpers/asyncToGenerator":21,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/createClass":23,"@babel/runtime/helpers/interopRequireDefault":26,"@babel/runtime/regenerator":33}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WasmApi = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _workerApi = require("./workerApi");

var WasmApi =
/*#__PURE__*/
function (_WorkerApi) {
  (0, _inherits2["default"])(WasmApi, _WorkerApi);

  function WasmApi() {
    (0, _classCallCheck2["default"])(this, WasmApi);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WasmApi).call(this, "wasm/wasm_worker.js"));
  }

  return WasmApi;
}(_workerApi.WorkerApi);

exports.WasmApi = WasmApi;
},{"./workerApi":7,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/getPrototypeOf":24,"@babel/runtime/helpers/inherits":25,"@babel/runtime/helpers/interopRequireDefault":26,"@babel/runtime/helpers/possibleConstructorReturn":29}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkerApi = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _poserApi = require("./poserApi");

var WorkerApi =
/*#__PURE__*/
function () {
  function WorkerApi(workerScriptUrl) {
    (0, _classCallCheck2["default"])(this, WorkerApi);
    this.workerScriptUrl = workerScriptUrl;
    this.id = 0;
    this.promises = {};
  }

  (0, _createClass2["default"])(WorkerApi, [{
    key: "sleep",
    value: function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }, {
    key: "_setup",
    value: function () {
      var _setup2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _this = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.worker) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.sleep(0);

              case 3:
                _context.next = 7;
                break;

              case 5:
                this.worker = new Worker(this.workerScriptUrl);

                this.worker.onmessage = function (e) {
                  var data = e.data; // received a response

                  var id = data.id;
                  var resolve = _this.promises[id];
                  delete _this.promises[id];
                  resolve(data.result);
                };

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _setup() {
        return _setup2.apply(this, arguments);
      }

      return _setup;
    }()
  }, {
    key: "post",
    value: function post(api, apiOptions, args) {
      var _this2 = this;

      return new Promise(function (resolve) {
        // send a request
        if (_this2.worker) {
          _this2.promises[_this2.id] = resolve;
          var workerReq = {
            api: api,
            id: _this2.id,
            apiOptions: apiOptions,
            args: (0, _toConsumableArray2["default"])(args)
          };

          _this2.worker.postMessage(workerReq);

          _this2.id++;
        }
      });
    }
  }, {
    key: "HandCalc",
    value: function () {
      var _HandCalc = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(apiOptions, handStr, calcType) {
        var resp;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this._setup();

              case 3:
                _context2.next = 5;
                return this.post("HandCalc", apiOptions, [handStr, calcType]);

              case 5:
                resp = _context2.sent;
                return _context2.abrupt("return", resp);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", (0, _poserApi.MakeErrResp)(_context2.t0.toString()));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function HandCalc(_x, _x2, _x3) {
        return _HandCalc.apply(this, arguments);
      }

      return HandCalc;
    }()
  }, {
    key: "HandEval",
    value: function () {
      var _HandEval = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(apiOptions, nsims, players, handStr, calcType) {
        var resp;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this._setup();

              case 3:
                _context3.next = 5;
                return this.post("HandEval", apiOptions, [nsims, players, handStr, calcType]);

              case 5:
                resp = _context3.sent;
                return _context3.abrupt("return", resp);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", (0, _poserApi.MakeErrResp)(_context3.t0.toString()));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function HandEval(_x4, _x5, _x6, _x7, _x8) {
        return _HandEval.apply(this, arguments);
      }

      return HandEval;
    }()
  }, {
    key: "HandEvalPlayers",
    value: function () {
      var _HandEvalPlayers = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(apiOptions, nsims, handStr, calcType) {
        var resp;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this._setup();

              case 3:
                _context4.next = 5;
                return this.post("HandEvalPlayers", apiOptions, [nsims, handStr, calcType]);

              case 5:
                resp = _context4.sent;
                return _context4.abrupt("return", resp);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", (0, _poserApi.MakeErrResp)(_context4.t0.toString()));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      function HandEvalPlayers(_x9, _x10, _x11, _x12) {
        return _HandEvalPlayers.apply(this, arguments);
      }

      return HandEvalPlayers;
    }()
  }]);
  return WorkerApi;
}();

exports.WorkerApi = WorkerApi;
},{"./poserApi":4,"@babel/runtime/helpers/asyncToGenerator":21,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/createClass":23,"@babel/runtime/helpers/interopRequireDefault":26,"@babel/runtime/helpers/toConsumableArray":31,"@babel/runtime/regenerator":33}],8:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicHandCalculator = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _card = require("./card");

var _hand = require("./hand");

var _handRank = require("./handRank");

var _hsb = require("./hsb");

var BasicHandCalculator =
/*#__PURE__*/
function () {
  // [CardRankSize]
  // [4]
  // [4]
  function BasicHandCalculator() {
    (0, _classCallCheck2["default"])(this, BasicHandCalculator);
    this.rankCnts = new Array(_card.CardRankSize);
    this.suitCnts = new Array(_card.CardSuitSize);
    this.suitMasks = new Array(_card.CardSuitSize);
  }

  (0, _createClass2["default"])(BasicHandCalculator, [{
    key: "CalcHandRank",
    value: function CalcHandRank(hand) {
      return this.calcHandRank(hand, 7);
    }
  }, {
    key: "reset",
    value: function reset() {
      var self = this;

      for (var i = 0; i < self.rankCnts.length; i++) {
        self.rankCnts[i] = 0;
      }

      for (var _i = 0; _i < self.suitCnts.length; _i++) {
        self.suitCnts[_i] = 0;
      }

      for (var _i2 = 0; _i2 < self.suitMasks.length; _i2++) {
        self.suitMasks[_i2] = 0;
      }
    }
  }, {
    key: "calcHandRank",
    value: function calcHandRank(hand, cardsCnt) {
      var self = this;
      self.reset();
      var handRank = (0, _handRank.MakeHandRank)(); // aggregate the ranks, suits, suit masks

      for (var i = 0; i < cardsCnt; i++) {
        var rank = (0, _hand.GetHand7Rank)(hand, i);
        var suit = (0, _hand.GetHand7Suit)(hand, i);

        if (rank <= _card.CardRankSize) {
          self.rankCnts[rank]++;
          self.suitCnts[suit]++;
          self.suitMasks[suit] |= 1 << rank;
        }
      }

      var m1 = 0; // mask for single cards

      var m2 = 0; // mask for the pairs

      var m3 = 0; // mask for sets

      var m4 = 0; // mask for four of a kind

      var m2cnt = 0; // count of pairs

      var m3cnt = 0; // count of sets
      // determine the category based on the rank counts

      for (var _i3 = 0; _i3 < _card.CardRankSize; _i3++) {
        var n = self.rankCnts[_i3];

        if (n === 0) {} else if (n === 1) {
          m1 |= 1 << _i3;
        } else if (n === 2) {
          m2 |= 1 << _i3;
          m2cnt++;
        } else if (n === 3) {
          m3 |= 1 << _i3;
          m3cnt++;
        } else if (n === 4) {
          m4 |= 1 << _i3;
        }
      }

      var mf = 0; // flush mask, 1 bit per card that's in the flush

      for (var _i4 = 0; _i4 < _card.CardSuitSize; _i4++) {
        if (self.suitCnts[_i4] >= 5) {
          mf = self.suitMasks[_i4];
          break;
        }
      }

      var ms; // if flush then check if it's also straight flush
      // otherwise check for just regular straight

      if (mf !== 0) {
        // possible straight flush
        ms = mf << 1;
      } else {
        // possible straight
        // straight is not possible if four of a kind therefore not using m4
        ms = (m1 | m2 | m3) << 1;
      } // copy the ace to position 0


      if ((ms & 1 << 13) !== 0) {
        ms |= 1;
      } // find the straight high index


      var msi = _card.CardRank2;

      while (ms >= 31) {
        var msc = (0, _hsb.GetHsb16)(ms);
        var mss = ms >> msc - 4;

        if ((mss & 31) === 31) {
          msi = msc - 1;
          break;
        }

        ms &= ~(1 << msc);
      }

      if (msi !== _card.CardRank2 && mf !== 0) {
        // straight flush
        handRank = (0, _handRank.SetCategory)(handRank, _handRank.HandRankCatStraightFlush);
        handRank = (0, _handRank.SetCardRank)(handRank, 4, msi);
        msi--;
        handRank = (0, _handRank.SetCardRank)(handRank, 3, msi);
        msi--;
        handRank = (0, _handRank.SetCardRank)(handRank, 2, msi);
        msi--;
        handRank = (0, _handRank.SetCardRank)(handRank, 1, msi); // adjust for an ace

        if (msi === _card.CardRank2) {
          msi = _card.CardRankA;
        } else {
          msi--;
        }

        handRank = (0, _handRank.SetCardRank)(handRank, 0, msi);
      } else if (m4 !== 0) {
        // four of a kind
        handRank = (0, _handRank.SetCategory)(handRank, _handRank.HandRankCatQuads);
        var c4 = (0, _hsb.GetHsb16)(m4);
        handRank = (0, _handRank.SetCardRank)(handRank, 4, c4);
        handRank = (0, _handRank.SetCardRank)(handRank, 3, c4);
        handRank = (0, _handRank.SetCardRank)(handRank, 2, c4);
        handRank = (0, _handRank.SetCardRank)(handRank, 1, c4);
        var c1 = (0, _hsb.GetHsb16)(m3 | m2 | m1);
        handRank = (0, _handRank.SetCardRank)(handRank, 0, c1);
      } else if (m3cnt === 2) {
        handRank = (0, _handRank.SetCategory)(handRank, _handRank.HandRankCatFullHouse);
        var c3 = (0, _hsb.GetHsb16)(m3);
        handRank = (0, _handRank.SetCardRank)(handRank, 4, c3);
        handRank = (0, _handRank.SetCardRank)(handRank, 3, c3);
        handRank = (0, _handRank.SetCardRank)(handRank, 2, c3);
        m3 &= ~(1 << c3);
        var c2 = (0, _hsb.GetHsb16)(m3);
        handRank = (0, _handRank.SetCardRank)(handRank, 1, c2);
        handRank = (0, _handRank.SetCardRank)(handRank, 0, c2);
      } else if (m3cnt === 1 && m2cnt > 0) {
        handRank = (0, _handRank.SetCategory)(handRank, _handRank.HandRankCatFullHouse);

        var _c = (0, _hsb.GetHsb16)(m3);

        handRank = (0, _handRank.SetCardRank)(handRank, 4, _c);
        handRank = (0, _handRank.SetCardRank)(handRank, 3, _c);
        handRank = (0, _handRank.SetCardRank)(handRank, 2, _c);

        var _c2 = (0, _hsb.GetHsb16)(m2);

        handRank = (0, _handRank.SetCardRank)(handRank, 1, _c2);
        handRank = (0, _handRank.SetCardRank)(handRank, 0, _c2);
      } else if (mf !== 0) {
        handRank = (0, _handRank.SetCategory)(handRank, _handRank.HandRankCatFlush);
        var c = (0, _hsb.GetHsb16)(mf);
        handRank = (0, _handRank.SetCardRank)(handRank, 4, c);
        mf &= ~(1 << c);
        c = (0, _hsb.GetHsb16)(mf);
        handRank = (0, _handRank.SetCardRank)(handRank, 3, c);
        mf &= ~(1 << c);
        c = (0, _hsb.GetHsb16)(mf);
        handRank = (0, _handRank.SetCardRank)(handRank, 2, c);
        mf &= ~(1 << c);
        c = (0, _hsb.GetHsb16)(mf);
        handRank = (0, _handRank.SetCardRank)(handRank, 1, c);
        mf &= ~(1 << c);
        c = (0, _hsb.GetHsb16)(mf);
        handRank = (0, _handRank.SetCardRank)(handRank, 0, c);
      } else if (msi !== 0) {
        // straight
        handRank = (0, _handRank.SetCategory)(handRank, _handRank.HandRankCatStraight);
        handRank = (0, _handRank.SetCardRank)(handRank, 4, msi);
        msi--;
        handRank = (0, _handRank.SetCardRank)(handRank, 3, msi);
        msi--;
        handRank = (0, _handRank.SetCardRank)(handRank, 2, msi);
        msi--;
        handRank = (0, _handRank.SetCardRank)(handRank, 1, msi); // adjust for an ace

        if (msi === 0) {
          msi = _card.CardRankA;
        } else {
          msi--;
        }

        handRank = (0, _handRank.SetCardRank)(handRank, 0, msi);
      } else if (m3 !== 0) {
        handRank = (0, _handRank.SetCategory)(handRank, _handRank.HandRankCatSet);

        var _c3 = (0, _hsb.GetHsb16)(m3);

        handRank = (0, _handRank.SetCardRank)(handRank, 4, _c3);
        handRank = (0, _handRank.SetCardRank)(handRank, 3, _c3);
        handRank = (0, _handRank.SetCardRank)(handRank, 2, _c3); // m2 must be zero, so try only m1

        var _c4 = (0, _hsb.GetHsb16)(m1);

        handRank = (0, _handRank.SetCardRank)(handRank, 1, _c4);
        m1 &= ~(1 << _c4);
        _c4 = (0, _hsb.GetHsb16)(m1);
        handRank = (0, _handRank.SetCardRank)(handRank, 0, _c4);
      } else if (m2cnt > 1) {
        handRank = (0, _handRank.SetCategory)(handRank, _handRank.HandRankCatTwoPair);

        var _c5 = (0, _hsb.GetHsb16)(m2);

        handRank = (0, _handRank.SetCardRank)(handRank, 4, _c5);
        handRank = (0, _handRank.SetCardRank)(handRank, 3, _c5);
        m2 &= ~(1 << _c5);
        _c5 = (0, _hsb.GetHsb16)(m2);
        handRank = (0, _handRank.SetCardRank)(handRank, 2, _c5);
        handRank = (0, _handRank.SetCardRank)(handRank, 1, _c5);
        m2 &= ~(1 << _c5);

        var _c6 = (0, _hsb.GetHsb16)(m1 | m2);

        handRank = (0, _handRank.SetCardRank)(handRank, 0, _c6);
      } else if (m2cnt > 0) {
        handRank = (0, _handRank.SetCategory)(handRank, _handRank.HandRankCatOnePair);

        var _c7 = (0, _hsb.GetHsb16)(m2);

        handRank = (0, _handRank.SetCardRank)(handRank, 4, _c7);
        handRank = (0, _handRank.SetCardRank)(handRank, 3, _c7);

        var _c8 = (0, _hsb.GetHsb16)(m1);

        handRank = (0, _handRank.SetCardRank)(handRank, 2, _c8);
        m1 &= ~(1 << _c8);
        _c8 = (0, _hsb.GetHsb16)(m1);
        handRank = (0, _handRank.SetCardRank)(handRank, 1, _c8);
        m1 &= ~(1 << _c8);
        _c8 = (0, _hsb.GetHsb16)(m1);
        handRank = (0, _handRank.SetCardRank)(handRank, 0, _c8);
      } else {
        handRank = (0, _handRank.SetCategory)(handRank, _handRank.HandRankCatHighCard);

        var _c9 = (0, _hsb.GetHsb16)(m1);

        handRank = (0, _handRank.SetCardRank)(handRank, 4, _c9);
        m1 &= ~(1 << _c9);
        _c9 = (0, _hsb.GetHsb16)(m1);
        handRank = (0, _handRank.SetCardRank)(handRank, 3, _c9);
        m1 &= ~(1 << _c9);
        _c9 = (0, _hsb.GetHsb16)(m1);
        handRank = (0, _handRank.SetCardRank)(handRank, 2, _c9);
        m1 &= ~(1 << _c9);
        _c9 = (0, _hsb.GetHsb16)(m1);
        handRank = (0, _handRank.SetCardRank)(handRank, 1, _c9);
        m1 &= ~(1 << _c9);
        _c9 = (0, _hsb.GetHsb16)(m1);
        handRank = (0, _handRank.SetCardRank)(handRank, 0, _c9);
      }

      return handRank;
    }
  }]);
  return BasicHandCalculator;
}();

exports.BasicHandCalculator = BasicHandCalculator;
},{"./card":9,"./hand":11,"./handRank":14,"./hsb":15,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/createClass":23,"@babel/runtime/helpers/interopRequireDefault":26}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeCard = MakeCard;
exports.MakeCardStr = MakeCardStr;
exports.GetRank = GetRank;
exports.GetSuit = GetSuit;
exports.GetRankStr = GetRankStr;
exports.GetSuitStr = GetSuitStr;
exports.GetCardStr = GetCardStr;
exports.GetCardRankStr = GetCardRankStr;
exports.GetCardSuitStr = GetCardSuitStr;
exports.CardRankBad = exports.CardRankWild = exports.CardRankSize = exports.CardRankA = exports.CardRankK = exports.CardRankQ = exports.CardRankJ = exports.CardRank10 = exports.CardRank9 = exports.CardRank8 = exports.CardRank7 = exports.CardRank6 = exports.CardRank5 = exports.CardRank4 = exports.CardRank3 = exports.CardRank2 = exports.CardSuitBad = exports.CardSuitWild = exports.CardSuitSize = exports.CardSuitSpades = exports.CardSuitHearts = exports.CardSuitDiamonds = exports.CardSuitClubs = exports.CardSize = exports.CardBad = exports.CardWildCard = exports.CardNull = void 0;

/*
 * Card is an integer in the following format:
 *
 * 876543210
 *    rrrrss
 *
 * rrrr - is a rank, a number between 0 and 12
 * ss - is a suit, a number between 0 and 3
 *
 */
var CardNull = 0x3D;
exports.CardNull = CardNull;
var CardWildCard = 0x3B;
exports.CardWildCard = CardWildCard;
var CardBad = 0x3F;
exports.CardBad = CardBad;
var CardSize = 52;
exports.CardSize = CardSize;
var CardSuitClubs = 0;
exports.CardSuitClubs = CardSuitClubs;
var CardSuitDiamonds = 1;
exports.CardSuitDiamonds = CardSuitDiamonds;
var CardSuitHearts = 2;
exports.CardSuitHearts = CardSuitHearts;
var CardSuitSpades = 3;
exports.CardSuitSpades = CardSuitSpades;
var CardSuitSize = 4;
exports.CardSuitSize = CardSuitSize;
var CardSuitWild = 0xE;
exports.CardSuitWild = CardSuitWild;
var CardSuitBad = 0xF;
exports.CardSuitBad = CardSuitBad;
var CardRank2 = 0;
exports.CardRank2 = CardRank2;
var CardRank3 = 1;
exports.CardRank3 = CardRank3;
var CardRank4 = 2;
exports.CardRank4 = CardRank4;
var CardRank5 = 3;
exports.CardRank5 = CardRank5;
var CardRank6 = 4;
exports.CardRank6 = CardRank6;
var CardRank7 = 5;
exports.CardRank7 = CardRank7;
var CardRank8 = 6;
exports.CardRank8 = CardRank8;
var CardRank9 = 7;
exports.CardRank9 = CardRank9;
var CardRank10 = 8;
exports.CardRank10 = CardRank10;
var CardRankJ = 9;
exports.CardRankJ = CardRankJ;
var CardRankQ = 10;
exports.CardRankQ = CardRankQ;
var CardRankK = 11;
exports.CardRankK = CardRankK;
var CardRankA = 12;
exports.CardRankA = CardRankA;
var CardRankSize = 13;
exports.CardRankSize = CardRankSize;
var CardRankWild = 0xE;
exports.CardRankWild = CardRankWild;
var CardRankBad = 0xF;
exports.CardRankBad = CardRankBad;
var cardRankStr = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
var cardSuitStr = ["c", "d", "h", "s"];

function MakeCard(rank, suit) {
  if (0 <= rank && rank < CardRankSize && 0 <= suit && suit < CardSuitSize) {
    return rank << 2 | suit;
  } else if (rank === CardRankWild) {
    return CardWildCard;
  }

  return CardBad;
}

function MakeCardStr(s) {
  var c1 = s.substr(0, 1);
  var c2 = s.substr(1, 1);
  var rank;
  var suit;

  switch (c1) {
    case '2':
      rank = 0;
      break;

    case '3':
      rank = 1;
      break;

    case '4':
      rank = 2;
      break;

    case '5':
      rank = 3;
      break;

    case '6':
      rank = 4;
      break;

    case '7':
      rank = 5;
      break;

    case '8':
      rank = 6;
      break;

    case '9':
      rank = 7;
      break;

    case 't':
    case 'T':
      rank = 8;
      break;

    case 'j':
    case 'J':
      rank = 9;
      break;

    case 'q':
    case 'Q':
      rank = 10;
      break;

    case 'k':
    case 'K':
      rank = 11;
      break;

    case 'a':
    case 'A':
      rank = 12;
      break;

    case '*':
    case '_':
      rank = CardRankWild;
      break;

    case '?':
    default:
      rank = CardRankBad;
      break;
  }

  switch (c2) {
    case 'c':
    case 'C':
      suit = 0;
      break;

    case 'd':
    case 'D':
      suit = 1;
      break;

    case 'h':
    case 'H':
      suit = 2;
      break;

    case 's':
    case 'S':
      suit = 3;
      break;

    case '*':
    case '_':
      suit = CardSuitWild;
      break;

    case '?':
    default:
      suit = CardSuitBad;
      break;
  }

  return MakeCard(rank, suit);
}

function GetRank(card) {
  return card >> 2;
}

function GetSuit(card) {
  return card & 3;
}

function GetRankStr(card) {
  return cardRankStr[card >> 2];
}

function GetSuitStr(card) {
  return cardSuitStr[card & 3];
}

function GetCardStr(card) {
  return GetRankStr(card) + GetSuitStr(card);
}

function GetCardRankStr(cardRank) {
  return cardRankStr[cardRank];
}

function GetCardSuitStr(cardSuit) {
  return cardSuitStr[cardSuit];
}
},{}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Deck = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _sfc = require("./sfc32");

var _card = require("./card");

var Deck =
/*#__PURE__*/
function () {
  function Deck() {
    (0, _classCallCheck2["default"])(this, Deck);
    this.mask0 = 0;
    this.mask1 = 0;
    this.rng = new _sfc.Sfc32();
  }

  (0, _createClass2["default"])(Deck, [{
    key: "mix",
    value: function mix() {
      this.mask0 = 0;
      this.mask1 = 0;
    }
  }, {
    key: "removeCard",
    value: function removeCard(card) {
      this.setMask(card);
    }
  }, {
    key: "setMask",
    value: function setMask(card) {
      if (card !== _card.CardWildCard) {
        if (card < 32) {
          this.mask0 |= 1 << card;
        } else {
          this.mask1 |= 1 << card - 32;
        }
      }
    }
  }, {
    key: "getMask",
    value: function getMask(card) {
      if (card < 32) {
        return this.mask0 & 1 << card;
      } else {
        return this.mask1 & 1 << card - 32;
      }
    } // returns the value of the card
    // lower 2 bits are suite, upper bits are value from 0 - 12

  }, {
    key: "getNextCard",
    value: function getNextCard() {
      // get next card
      while (this.rng) {
        // generate a random number between 0 an 63
        var rn = this.rng.next();
        var n = rn & 0x3F;

        if (n < _card.CardSize && this.getMask(n) === 0) {
          this.setMask(n);
          return n;
        }
      }

      return _card.CardNull;
    }
  }]);
  return Deck;
}();

exports.Deck = Deck;
},{"./card":9,"./sfc32":17,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/createClass":23,"@babel/runtime/helpers/interopRequireDefault":26}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeHand7 = MakeHand7;
exports.StringToHand7 = StringToHand7;
exports.SetHand7Card = SetHand7Card;
exports.GetHand7Rank = GetHand7Rank;
exports.GetHand7Suit = GetHand7Suit;
exports.GetHand7Card = GetHand7Card;
exports.GetHand7HoleStr = GetHand7HoleStr;
exports.GetHand7Str = GetHand7Str;
exports.Hand7Bad = exports.Hand7Null = void 0;

var _card = require("./card");

var Hand7Null = {
  ranks: 0x0FFFFFFF,
  suits: 0x0
};
exports.Hand7Null = Hand7Null;
var Hand7Bad = {
  ranks: 0x0FFFFFFF,
  suits: 0x3FFF
};
exports.Hand7Bad = Hand7Bad;

function MakeHand7() {
  return {
    ranks: Hand7Null.ranks,
    suits: Hand7Null.suits
  };
}

var handRankMasks = [~0x0000000F, ~0x000000F0, ~0x00000F00, ~0x0000F000, ~0x000F0000, ~0x00F00000, ~0x0F000000];
var handSuitMasks = [~0x0003, ~0x000C, ~0x0030, ~0x00C0, ~0x0300, ~0x0C00, ~0x3000];

function StringToHand7(s) {
  if (!s || s.length !== 14) {
    return [Hand7Bad, "not enough cards"];
  }

  var hand = MakeHand7();
  var mask1 = 0;
  var mask2 = 0;

  for (var i = 0; i < 7; i++) {
    var n = i << 1;
    var cardStr = s.substr(n, 2);
    var card = (0, _card.MakeCardStr)(cardStr);

    if (card === _card.CardBad) {
      return [Hand7Bad, "bad card: " + cardStr];
    }

    if (card === _card.CardWildCard) {// don't test for duplicate
    } else if (card >= 32) {
      var bit = 1 << card - 32;

      if ((mask2 & bit) === 0) {
        mask2 |= bit;
      } else {
        return [Hand7Bad, "duplicate card: " + cardStr];
      }
    } else {
      var _bit = 1 << card;

      if ((mask1 & _bit) === 0) {
        mask1 |= _bit;
      } else {
        return [Hand7Bad, "duplicate card: " + cardStr];
      }
    }

    hand = SetHand7Card(hand, i, card);
  }

  return [hand, ""];
}

function SetHand7Card(hand, n, card) {
  hand.ranks = hand.ranks & handRankMasks[n] | (0, _card.GetRank)(card) << (n << 2);
  hand.suits = hand.suits & handSuitMasks[n] | (0, _card.GetSuit)(card) << (n << 1);
  return hand;
}

function GetHand7Rank(hand, n) {
  return hand.ranks >> (n << 2) & 0xF;
}

function GetHand7Suit(hand, n) {
  return hand.suits >> (n << 1) & 3;
}

function GetHand7Card(hand, n) {
  var rank = GetHand7Rank(hand, n);
  var suit = GetHand7Suit(hand, n);
  var card = (0, _card.MakeCard)(rank, suit);
  return card;
}

function GetHand7HoleStr(hand) {
  var card1 = GetHand7Card(hand, 0);
  var card2 = GetHand7Card(hand, 1);
  var card1Str = (0, _card.GetCardStr)(card1);
  var card2Str = (0, _card.GetCardStr)(card2);
  return card1Str + card2Str;
}

function GetHand7Str(hand) {
  var s = "";

  for (var i = 0; i < 7; i++) {
    var card = GetHand7Card(hand, i);
    s += (0, _card.GetCardStr)(card);
  }

  return s;
}
},{"./card":9}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hand7Combos = Hand7Combos;

var _card = require("./card");

var _hand = require("./hand");

var _handRank = require("./handRank");

var _basicHandCalculator = require("./basicHandCalculator");

var _immutableSorted = require("immutable-sorted");

function Hand7Combos(hand) {
  if (hand === _hand.Hand7Bad) {
    return [[], 0, 0, 0];
  }

  var handCalc = new _basicHandCalculator.BasicHandCalculator();
  var handRank = handCalc.CalcHandRank(hand);
  var betterCombos = 0;
  var equalCombos = 0;
  var worseCombos = 0;
  var evalMap = (0, _immutableSorted.SortedMap)();
  var handRes = {
    hole: (0, _hand.GetHand7HoleStr)(hand),
    handRank: handRank,
    cat: (0, _handRank.GetHandCatStr)(handRank),
    category: (0, _handRank.GetHandCategoryStr)(handRank),
    result: (0, _handRank.HandRankStr)(handRank),
    count: 0
  };
  evalMap = evalMap.set(handRank, handRes);
  var mask0 = 0;
  var mask1 = 0;

  for (var i = 0; i < 7; i++) {
    var card = (0, _hand.GetHand7Card)(hand, i);

    if (card < 32) {
      mask0 |= 1 << card;
    } else {
      mask1 |= 1 << card - 32;
    }
  }

  var h = hand;

  for (var c1 = 1; c1 < _card.CardSize; c1++) {
    if (c1 < 32) {
      var c1bit = 1 << c1;

      if ((mask0 & c1bit) !== 0) {
        continue;
      }
    } else {
      var _c1bit = 1 << c1 - 32;

      if ((mask1 & _c1bit) !== 0) {
        continue;
      }
    }

    for (var c2 = 0; c2 < c1; c2++) {
      if (c2 < 32) {
        var c2bit = 1 << c2;

        if ((mask0 & c2bit) !== 0) {
          continue;
        }
      } else {
        var _c2bit = 1 << c2 - 32;

        if ((mask1 & _c2bit) !== 0) {
          continue;
        }
      }

      var card1 = c1;
      var card2 = c2;
      h = (0, _hand.SetHand7Card)(h, 0, card1);
      h = (0, _hand.SetHand7Card)(h, 1, card2);
      var hRank = handCalc.CalcHandRank(h);
      var hRes = evalMap.get(hRank);

      if (hRes) {
        hRes.count++;
      } else {
        hRes = {
          hole: (0, _hand.GetHand7HoleStr)(h),
          handRank: hRank,
          cat: (0, _handRank.GetHandCatStr)(hRank),
          category: (0, _handRank.GetHandCategoryStr)(hRank),
          result: (0, _handRank.HandRankStr)(hRank),
          count: 1
        };
        evalMap = evalMap.set(hRank, hRes);
      }

      if (hRank > handRank) {
        betterCombos++;
      } else if (hRank === handRank) {
        equalCombos++;
      } else {
        worseCombos++;
      }
    }
  }

  var hResArr = evalMap.toIndexedSeq().reverse().toArray();
  return [hResArr, betterCombos, equalCombos, worseCombos];
}
},{"./basicHandCalculator":8,"./card":9,"./hand":11,"./handRank":14,"immutable-sorted":34}],13:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeHandEvalRequest = MakeHandEvalRequest;
exports.MakeHandEvalResult = MakeHandEvalResult;
exports.HandEvalRequestSetHand = HandEvalRequestSetHand;
exports.HandEvaluator = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _card = require("./card");

var _hand = require("./hand");

var _deck = require("./deck");

var MaxPlayers = 9;

function MakeHandEvalRequest(nsims, players) {
  return {
    nsims: nsims,
    players: players,
    card1: _card.CardWildCard,
    card2: _card.CardWildCard,
    board1: _card.CardWildCard,
    board2: _card.CardWildCard,
    board3: _card.CardWildCard,
    board4: _card.CardWildCard,
    board5: _card.CardWildCard
  };
}

function MakeHandEvalResult(handEvalRequest, err) {
  return {
    request: handEvalRequest,
    err: err,
    games: 0,
    wins: 0,
    ties: 0,
    pties: 0,
    // pot ties, number of ties expressed as number of pots
    losses: 0,
    wp: 0,
    wo: 0,
    er: 0
  };
}

function HandEvalRequestSetHand(evalRequest, handStr) {
  var result = (0, _hand.StringToHand7)(handStr);
  var hand = result[0];
  var err = result[1];

  if (err) {
    return err;
  }

  evalRequest.card1 = (0, _hand.GetHand7Card)(hand, 0);
  evalRequest.card2 = (0, _hand.GetHand7Card)(hand, 1);
  evalRequest.board1 = (0, _hand.GetHand7Card)(hand, 2);
  evalRequest.board2 = (0, _hand.GetHand7Card)(hand, 3);
  evalRequest.board3 = (0, _hand.GetHand7Card)(hand, 4);
  evalRequest.board4 = (0, _hand.GetHand7Card)(hand, 5);
  evalRequest.board5 = (0, _hand.GetHand7Card)(hand, 6);
  return "";
}

var HandEvaluator =
/*#__PURE__*/
function () {
  function HandEvaluator() {
    (0, _classCallCheck2["default"])(this, HandEvaluator);
  }

  (0, _createClass2["default"])(HandEvaluator, [{
    key: "sleep",
    value: function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }, {
    key: "eval",
    value: function () {
      var _eval2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(handCalculator, request, result) {
        var h, wins, ties, pties, losses, deck, nsims, players, n, card1, card2, board1, board2, board3, board4, board5, playerHr, winnerHr, tieHands, i, hr;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                h = (0, _hand.MakeHand7)();
                wins = 0;
                ties = 0;
                pties = 0; // proportional ties, divided by number of splitting players

                losses = 0;
                deck = new _deck.Deck();
                nsims = request.nsims;
                players = request.players;

                if (2 <= players && players <= MaxPlayers) {
                  _context.next = 11;
                  break;
                }

                result.err = "invalid number of players";
                return _context.abrupt("return");

              case 11:
                _context.next = 13;
                return this.sleep(0);

              case 13:
                n = 0;

              case 14:
                if (!(n < nsims)) {
                  _context.next = 48;
                  break;
                }

                if (!((n & 131071) === 0)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 18;
                return this.sleep(0);

              case 18:
                deck.mix();
                deck.removeCard(request.card1);
                deck.removeCard(request.card2);
                deck.removeCard(request.board1);
                deck.removeCard(request.board2);
                deck.removeCard(request.board3);
                deck.removeCard(request.board4);
                deck.removeCard(request.board5); // deal the cards

                card1 = request.card1 === _card.CardWildCard ? deck.getNextCard() : request.card1;
                card2 = request.card2 === _card.CardWildCard ? deck.getNextCard() : request.card2; // deal the board

                board1 = request.board1 === _card.CardWildCard ? deck.getNextCard() : request.board1;
                board2 = request.board2 === _card.CardWildCard ? deck.getNextCard() : request.board2;
                board3 = request.board3 === _card.CardWildCard ? deck.getNextCard() : request.board3;
                board4 = request.board4 === _card.CardWildCard ? deck.getNextCard() : request.board4;
                board5 = request.board5 === _card.CardWildCard ? deck.getNextCard() : request.board5;
                h = (0, _hand.SetHand7Card)(h, 2, board1);
                h = (0, _hand.SetHand7Card)(h, 3, board2);
                h = (0, _hand.SetHand7Card)(h, 4, board3);
                h = (0, _hand.SetHand7Card)(h, 5, board4);
                h = (0, _hand.SetHand7Card)(h, 6, board5);
                h = (0, _hand.SetHand7Card)(h, 0, card1);
                h = (0, _hand.SetHand7Card)(h, 1, card2);
                playerHr = handCalculator.CalcHandRank(h);
                winnerHr = playerHr;
                tieHands = 0;

                for (i = 1; i < players; i++) {
                  h = (0, _hand.SetHand7Card)(h, 0, deck.getNextCard());
                  h = (0, _hand.SetHand7Card)(h, 1, deck.getNextCard());
                  hr = handCalculator.CalcHandRank(h);

                  if (hr > winnerHr) {
                    winnerHr = hr;
                    tieHands = 0;
                  } else if (hr === winnerHr) {
                    tieHands++;
                  }
                }

                if (playerHr === winnerHr) {
                  if (tieHands > 0) {
                    ties++;
                    pties += 1 / (tieHands + 1);
                  } else {
                    wins++;
                  }
                } else {
                  // loss
                  losses++;
                }

              case 45:
                n++;
                _context.next = 14;
                break;

              case 48:
                result.request = request;
                result.games = request.nsims;
                result.wins = wins;
                result.ties = ties;
                result.pties = pties;
                result.losses = losses;

              case 54:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _eval(_x, _x2, _x3) {
        return _eval2.apply(this, arguments);
      }

      return _eval;
    }()
  }]);
  return HandEvaluator;
}();

exports.HandEvaluator = HandEvaluator;
},{"./card":9,"./deck":10,"./hand":11,"@babel/runtime/helpers/asyncToGenerator":21,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/createClass":23,"@babel/runtime/helpers/interopRequireDefault":26,"@babel/runtime/regenerator":33}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeHandRank = MakeHandRank;
exports.SetCategory = SetCategory;
exports.GetCategory = GetCategory;
exports.GetCategoryStr = GetCategoryStr;
exports.GetCategoryLongStr = GetCategoryLongStr;
exports.GetCatStr = GetCatStr;
exports.GetHandCategoryStr = GetHandCategoryStr;
exports.GetHandCatStr = GetHandCatStr;
exports.SetCardRank = SetCardRank;
exports.GetCardRank = GetCardRank;
exports.HandRankStr = HandRankStr;
exports.HandRankBad = exports.HandRankNull = exports.HandRankCatBad = exports.HandRankCatMax = exports.HandRankCatStraightFlush = exports.HandRankCatQuads = exports.HandRankCatFullHouse = exports.HandRankCatFlush = exports.HandRankCatStraight = exports.HandRankCatSet = exports.HandRankCatTwoPair = exports.HandRankCatOnePair = exports.HandRankCatHighCard = void 0;

var _card = require("./card");

var HandRankCatHighCard = 0;
exports.HandRankCatHighCard = HandRankCatHighCard;
var HandRankCatOnePair = 1;
exports.HandRankCatOnePair = HandRankCatOnePair;
var HandRankCatTwoPair = 2;
exports.HandRankCatTwoPair = HandRankCatTwoPair;
var HandRankCatSet = 3;
exports.HandRankCatSet = HandRankCatSet;
var HandRankCatStraight = 4;
exports.HandRankCatStraight = HandRankCatStraight;
var HandRankCatFlush = 5;
exports.HandRankCatFlush = HandRankCatFlush;
var HandRankCatFullHouse = 6;
exports.HandRankCatFullHouse = HandRankCatFullHouse;
var HandRankCatQuads = 7;
exports.HandRankCatQuads = HandRankCatQuads;
var HandRankCatStraightFlush = 8;
exports.HandRankCatStraightFlush = HandRankCatStraightFlush;
var HandRankCatMax = 9;
exports.HandRankCatMax = HandRankCatMax;
var HandRankCatBad = 0xF;
exports.HandRankCatBad = HandRankCatBad;
var HandRankNull = 0x0FFFFF;
exports.HandRankNull = HandRankNull;
var HandRankBad = 0xFFFFFF;
exports.HandRankBad = HandRankBad;
var handRankMasks = [~0x0000F, ~0x000F0, ~0x00F00, ~0x0F000, ~0xF0000];
var handRankCatsStr = ["1", "2", "2+2", "3", "S", "F", "3+2", "4", "SF"];
var handRankCategoriesStr = ["High", "1 Pair", "2 Pair", "Set", "Straight", "Flush", "Boat", "Quads", "StrFl"];
var handRankCategoriesLongStr = ["High Card", "One Pair", "Two Pair", "Set", "Straight", "Flush", "Full House", "Quads", "Straight Flush"];

function MakeHandRank() {
  return HandRankNull;
}

function SetCategory(handRank, category) {
  return handRank & ~0xF << 20 | category << 20;
}

function GetCategory(handRank) {
  return handRank >> 20 & 0xf;
}

function GetCategoryStr(category) {
  return handRankCategoriesStr[category];
}

function GetCategoryLongStr(category) {
  return handRankCategoriesLongStr[category];
}

function GetCatStr(category) {
  return handRankCatsStr[category];
}

function GetHandCategoryStr(handRank) {
  return GetCategoryStr(GetCategory(handRank));
}

function GetHandCatStr(handRank) {
  return GetCatStr(GetCategory(handRank));
}

function SetCardRank(handRank, n, cardRank) {
  return handRank & handRankMasks[n] | cardRank << (n << 2);
}

function GetCardRank(handRank, n) {
  return handRank >> (n << 2) & 0xf;
}

function HandRankStr(handRank) {
  return (0, _card.GetCardRankStr)(GetCardRank(handRank, 4)) + (0, _card.GetCardRankStr)(GetCardRank(handRank, 3)) + (0, _card.GetCardRankStr)(GetCardRank(handRank, 2)) + (0, _card.GetCardRankStr)(GetCardRank(handRank, 1)) + (0, _card.GetCardRankStr)(GetCardRank(handRank, 0));
}
},{"./card":9}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetHsb16 = GetHsb16;
var hsbSize = 1 << 16;
var hsb = new Array(hsbSize);

function init() {
  for (var i = 0; i < hsbSize; i++) {
    hsb[i] = getSlowHsb(i);
  }
}

function getSlowHsb(n) {
  var i = -1;

  while (n > 0) {
    i++;
    n >>= 1;
  }

  return i;
} // GetHsb16 function
// returns the highest significant bit in a 16-bit integer
// or -1 if no hsb


function GetHsb16(n) {
  return hsb[n];
}

init();
},{}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LokiHandCalculator = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _card = require("./card");

var _hand = require("./hand");

var _handRank = require("./handRank");

// import { HandRankCatHighCard, HandRankCatOnePair, HandRankCatTwoPair, HandRankCatSet, HandRankCatStraight, HandRankCatFlush, HandRankCatFullHouse, HandRankCatQuads, HandRankCatStraightFlush } from './handRank'
// import { GetHsb16 } from './hsb'
var POKER_HAND = 5;
var HIGH = 0;
var PAIR = 1;
var TWOPAIR = 2;
var THREEKIND = 3;
var STRAIGHT = 4;
var FLUSH = 5;
var FULLHOUSE = 6;
var FOURKIND = 7;
var STRAIGHTFLUSH = 8;
var FIVEKIND = 9;
var ID_GROUP_SIZE = _card.CardRankSize * _card.CardRankSize * _card.CardRankSize * _card.CardRankSize * _card.CardRankSize;

var LokiHandCalculator =
/*#__PURE__*/
function () {
  function LokiHandCalculator() {
    (0, _classCallCheck2["default"])(this, LokiHandCalculator);
  }

  (0, _createClass2["default"])(LokiHandCalculator, [{
    key: "CalcHandRank",
    value: function CalcHandRank(hand) {
      return calcHandRank(hand);
    }
  }]);
  return LokiHandCalculator;
}();

exports.LokiHandCalculator = LokiHandCalculator;

function ID_ExistsStraightFlush(h, straight_high, major_suit) {
  var i;
  var straight;
  var high;
  var present = new Array(_card.CardRankSize);

  for (i = 0; i < _card.CardRankSize; i++) {
    present[i] = false;
  }

  for (i = 0; i < h.length; i++) {
    if (getSuit(h[i]) === major_suit) present[getRank(h[i])] = true;
  }

  straight = present[_card.CardRankA] ? 1 : 0;
  high = 0;

  for (i = 0; i < _card.CardRankSize; i++) {
    if (present[i]) {
      if (++straight >= POKER_HAND) high = i;
    } else straight = 0;
  }

  if (high === 0) return false;
  straight_high[0] = high;
  return true;
}
/**********************************************************************/
// DENIS PAPP'S HAND RANK IDENTIFIER CODE:

/**********************************************************************/
// suit: CardSuitSize means any
// not_allowed: CardRankSize means any
// returns ident value


function ID_KickerValue(paired, kickers, not_allowed0, not_allowed1) {
  var i = _card.CardRankA;
  var value = 0;

  while (kickers !== 0) {
    while (paired[i] === 0 || i === not_allowed0 || i === not_allowed1) {
      i--;
    }

    kickers--;
    value += pow(_card.CardRankSize, kickers) * i;
    i--;
  }

  return value;
}

function ID_KickerValueSuited(h, kickers, suit) {
  var i;
  var value = 0;
  var present = new Array(_card.CardRankSize);

  for (i = 0; i < _card.CardRankSize; i++) {
    present[i] = false;
  }

  for (i = 0; i < h.length; i++) {
    if (getSuit(h[i]) === suit) present[getRank(h[i])] = true;
  }

  i = _card.CardRankA;

  while (kickers !== 0) {
    while (present[i] === false) {
      i--;
    }

    kickers--;
    value += pow(_card.CardRankSize, kickers) * i;
    i--;
  }

  return value;
}

function calcHandRank(h) {
  var bh = new Array(7);

  for (var i = 0; i < 7; i++) {
    bh[i] = (0, _hand.GetHand7Card)(h, i);
  }

  var loki = rankHand_loki(bh); // Convert Loki value into HandRank

  var hc = Math.floor(loki / ID_GROUP_SIZE);
  loki %= ID_GROUP_SIZE;
  var cr0 = loki % _card.CardRankSize;
  loki = Math.floor(loki / _card.CardRankSize);
  var cr1 = loki % _card.CardRankSize;
  loki = Math.floor(loki / _card.CardRankSize);
  var cr2 = loki % _card.CardRankSize;
  loki = Math.floor(loki / _card.CardRankSize);
  var cr3 = loki % _card.CardRankSize;
  loki = Math.floor(loki / _card.CardRankSize);
  var cr4 = loki % _card.CardRankSize;
  loki = Math.floor(loki / _card.CardRankSize); // Fix the full house situation

  if (hc === FULLHOUSE) {
    cr4 = cr3 = cr2 = cr1;
    cr1 = cr0;
  } else if (hc === PAIR) {
    cr4 = cr3;
  } else if (hc === THREEKIND) {
    cr4 = cr3 = cr2;
  } else if (hc === FOURKIND) {
    cr4 = cr3 = cr2 = cr1;
  } else if (hc === TWOPAIR) {
    cr4 = cr3 = cr2;
    cr2 = cr1;
  } else if (hc === STRAIGHT) {
    cr4 = cr0;
    cr3 = cr4 - 1;
    cr2 = cr3 - 1;
    cr1 = cr2 - 1;
    cr0 = cr1 === 0 ? 12 : cr1 - 1;
  } else if (hc === STRAIGHTFLUSH) {
    cr4 = cr0;
    cr3 = cr4 - 1;
    cr2 = cr3 - 1;
    cr1 = cr2 - 1;
    cr0 = cr1 === 0 ? 12 : cr1 - 1;
  }

  var hv = (0, _handRank.MakeHandRank)();
  hv = (0, _handRank.SetCategory)(hv, hc);
  hv = (0, _handRank.SetCardRank)(hv, 0, cr0);
  hv = (0, _handRank.SetCardRank)(hv, 1, cr1);
  hv = (0, _handRank.SetCardRank)(hv, 2, cr2);
  hv = (0, _handRank.SetCardRank)(hv, 3, cr3);
  hv = (0, _handRank.SetCardRank)(hv, 4, cr4);
  return hv;
}
/**
 * Get a numerical ranking of this hand.
 * Uses java based code, so may be slower than using the native
 * methods, but is more compatible this way.
 *
 * Based on Denis Papp's Loki Hand ID code (id.cpp)
 * Given a 1-9 card hand, will return a unique rank 
     * such that any two hands will be ranked with the 
     * better hand having a higher rank. 
 *
 * @param h a 1-9 card hand
 * @return a unique number representing the hand strength of the best 
 * 5-card poker hand in the given 7 cards. The higher the number, the better
 * the hand is.
 */


function rankHand_loki(h) {
  var straight = false;
  var flush = false;
  var max_hand = h.length >= POKER_HAND ? POKER_HAND : h.length;
  var r;
  var c;
  var rank;
  var suit; // pair data

  var group_size = new Array(POKER_HAND + 1);
  var paired = new Array(_card.CardRankSize);
  var pair_rank0 = new Array(POKER_HAND + 1);
  var pair_rank1 = new Array(POKER_HAND + 1); // straight

  var straight_high = 0;
  var straight_size; // flush

  var suit_size = new Array(_card.CardSuitSize);
  var major_suit = 0; // determine pairs, dereference order data, check flush

  for (r = 0; r < _card.CardRankSize; r++) {
    paired[r] = 0;
  }

  for (r = 0; r < _card.CardSuitSize; r++) {
    suit_size[r] = 0;
  }

  for (r = 0; r <= POKER_HAND; r++) {
    group_size[r] = 0;
  }

  for (r = 0; r < h.length; r++) {
    // int tmpint = r
    rank = getRank(h[r]);
    suit = getSuit(h[r]);
    paired[rank]++;
    group_size[paired[rank]]++;
    if (paired[rank] !== 0) group_size[paired[rank] - 1]--;

    if (++suit_size[suit] >= POKER_HAND) {
      flush = true;
      major_suit = suit;
    }
  } // Card.ACE low?


  straight_size = paired[_card.CardRankA] !== 0 ? 1 : 0;

  for (var i = 0; i < POKER_HAND + 1; i++) {
    pair_rank0[i] = _card.CardRankSize;
    pair_rank1[i] = _card.CardRankSize;
  } // check for straight and pair data


  for (r = 0; r < _card.CardRankSize; r++) {
    // check straight
    if (paired[r] !== 0) {
      if (++straight_size >= POKER_HAND) {
        straight = true;
        straight_high = r;
      }
    } else straight_size = 0; // get pair ranks, keep two highest of each


    c = paired[r];

    if (c !== 0) {
      pair_rank1[c] = pair_rank0[c];
      pair_rank0[c] = r;
    }
  } // now id type


  var ident;
  var str_hi = new Array(1);
  str_hi[0] = straight_high;

  if (group_size[POKER_HAND] !== 0) {
    ident = FIVEKIND * ID_GROUP_SIZE;
    ident += pair_rank0[POKER_HAND];
  } else if (straight && flush && ID_ExistsStraightFlush(h, str_hi, major_suit)) {
    straight_high = str_hi[0];
    ident = STRAIGHTFLUSH * ID_GROUP_SIZE;
    ident += straight_high;
  } else if (group_size[4] !== 0) {
    ident = FOURKIND * ID_GROUP_SIZE;
    ident += pair_rank0[4] * _card.CardRankSize;
    pair_rank1[4] = _card.CardRankSize; // just in case 2 sets quads

    ident += ID_KickerValue(paired, 1, pair_rank0[4], pair_rank1[4]);
  } else if (group_size[3] >= 2) {
    ident = FULLHOUSE * ID_GROUP_SIZE;
    ident += pair_rank0[3] * _card.CardRankSize;
    ident += pair_rank1[3];
  } else if (group_size[3] === 1 && group_size[2] !== 0) {
    ident = FULLHOUSE * ID_GROUP_SIZE;
    ident += pair_rank0[3] * _card.CardRankSize;
    ident += pair_rank0[2];
  } else if (flush) {
    ident = FLUSH * ID_GROUP_SIZE;
    ident += ID_KickerValueSuited(h, 5, major_suit);
  } else if (straight) {
    ident = STRAIGHT * ID_GROUP_SIZE;
    ident += straight_high;
  } else if (group_size[3] === 1) {
    ident = THREEKIND * ID_GROUP_SIZE;
    ident += pair_rank0[3] * _card.CardRankSize * _card.CardRankSize;
    ident += ID_KickerValue(paired, max_hand - 3, pair_rank0[3], pair_rank1[3]);
  } else if (group_size[2] >= 2) {
    ident = TWOPAIR * ID_GROUP_SIZE;
    ident += pair_rank0[2] * _card.CardRankSize * _card.CardRankSize;
    ident += pair_rank1[2] * _card.CardRankSize;
    ident += ID_KickerValue(paired, max_hand - 4, pair_rank0[2], pair_rank1[2]);
  } else if (group_size[2] === 1) {
    ident = PAIR * ID_GROUP_SIZE;
    ident += pair_rank0[2] * _card.CardRankSize * _card.CardRankSize * _card.CardRankSize;
    ident += ID_KickerValue(paired, max_hand - 2, pair_rank0[2], pair_rank1[2]);
  } else {
    ident = HIGH * ID_GROUP_SIZE;
    ident += ID_KickerValue(paired, max_hand, pair_rank0[2], pair_rank1[2]);
  }

  return ident;
}

function pow(n, p) {
  var res = 1;

  while (p-- > 0) {
    res *= n;
  }

  return res;
}

function getRank(x) {
  return Math.floor(x / _card.CardSuitSize);
}

function getSuit(x) {
  return x % _card.CardSuitSize;
}
},{"./card":9,"./hand":11,"./handRank":14,"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/createClass":23,"@babel/runtime/helpers/interopRequireDefault":26}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sfc32 = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Sfc32 =
/*#__PURE__*/
function () {
  function Sfc32() {
    (0, _classCallCheck2["default"])(this, Sfc32);
    var now = Date.now();
    var a = now + Math.floor(Math.random() * 1000000000);
    var b = 13 * a + now + Math.floor(Math.random() * 1000000000);
    var c = 17 * b + now + Math.floor(Math.random() * 1000000000);
    var d = 31 * c + now + Math.floor(Math.random() * 1000000000);
    this.seed(a, b, c, d);
  }

  (0, _createClass2["default"])(Sfc32, [{
    key: "seed",
    value: function seed(a, b, c, d) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
    }
  }, {
    key: "next",
    value: function next() {
      this.a >>>= 0;
      this.b >>>= 0;
      this.c >>>= 0;
      this.d >>>= 0;
      var t = this.a + this.b | 0;
      this.a = this.b ^ this.b >>> 9;
      this.b = this.c + (this.c << 3) | 0;
      this.c = this.c << 21 | this.c >>> 11;
      this.d = this.d + 1 | 0;
      t = t + this.d | 0;
      this.c = this.c + t | 0;
      return t >>> 0;
    }
  }]);
  return Sfc32;
}();

exports.Sfc32 = Sfc32;
},{"@babel/runtime/helpers/classCallCheck":22,"@babel/runtime/helpers/createClass":23,"@babel/runtime/helpers/interopRequireDefault":26}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PoserApi", {
  enumerable: true,
  get: function get() {
    return _poserApi.PoserApi;
  }
});
exports.poserApi = void 0;

var _poserApi = require("./api/poserApi");

/**
 *  Copyright (c) 2019, AMI System, LLC
 *  All rights reserved.
 *
 *  This source code is licensed under the MIT-style license found in the
 *  LICENSE file in the root directory of this source tree.
 *
 *  
 */
var poserApi = new _poserApi.PoserApi();
exports.poserApi = poserApi;
global.poserApi = poserApi;
},{"./api/poserApi":4}],19:[function(require,module,exports){
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],20:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],21:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],22:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],23:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],24:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],25:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":30}],26:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],27:[function(require,module,exports){
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],28:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],29:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":32,"./assertThisInitialized":20}],30:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],31:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":19,"./iterableToArray":27,"./nonIterableSpread":28}],32:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],33:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":36}],34:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Immutable = {})));
}(this, (function (exports) { 'use strict';

// Used for setting prototype methods that IE8 chokes on.
var DELETE = 'delete';

// Constants describing the size of trie nodes.
var SHIFT = 5; // Resulted in best performance after ______?
var SIZE = 1 << SHIFT;
var MASK = SIZE - 1;

// A consistent shared value representing "not set" which equals nothing other
// than itself, and nothing that could be provided externally.
var NOT_SET = {};

// Boolean references, Rough equivalent of `bool &`.
function MakeRef() {
  return { value: false };
}

function SetRef(ref) {
  if (ref) {
    ref.value = true;
  }
}

function GetRef(ref) {
  return ref.value;
}

// A function which returns a value representing an "owner" for transient writes
// to tries. The return value will only ever equal itself, and will not equal
// the return of any subsequent call of this function.
function OwnerID() {}

function ensureSize(iter) {
  if (iter.size === undefined) {
    iter.size = iter.__iterate(returnTrue);
  }
  return iter.size;
}

function wrapIndex(iter, index) {
  // This implements "is array index" which the ECMAString spec defines as:
  //
  //     A String property name P is an array index if and only if
  //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
  //     to 2^32−1.
  //
  // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
  if (typeof index !== 'number') {
    var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
    if ('' + uint32Index !== index || uint32Index === 4294967295) {
      return NaN;
    }
    index = uint32Index;
  }
  return index < 0 ? ensureSize(iter) + index : index;
}

function returnTrue() {
  return true;
}

function wholeSlice(begin, end, size) {
  return (
    ((begin === 0 && !isNeg(begin)) ||
      (size !== undefined && begin <= -size)) &&
    (end === undefined || (size !== undefined && end >= size))
  );
}

function resolveBegin(begin, size) {
  return resolveIndex(begin, size, 0);
}

function resolveEnd(end, size) {
  return resolveIndex(end, size, size);
}

function resolveIndex(index, size, defaultIndex) {
  // Sanitize indices using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  return index === undefined
    ? defaultIndex
    : isNeg(index)
      ? size === Infinity ? size : Math.max(0, size + index) | 0
      : size === undefined || size === index
        ? index
        : Math.min(size, index) | 0;
}

function isNeg(value) {
  // Account for -0 which is negative, but not less than 0.
  return value < 0 || (value === 0 && 1 / value === -Infinity);
}

// Note: value is unchanged to not break immutable-devtools.
var IS_COLLECTION_SYMBOL = '@@__IMMUTABLE_ITERABLE__@@';

function isCollection(maybeCollection) {
  return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}

var IS_KEYED_SYMBOL = '@@__IMMUTABLE_KEYED__@@';

function isKeyed(maybeKeyed) {
  return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}

var IS_INDEXED_SYMBOL = '@@__IMMUTABLE_INDEXED__@@';

function isIndexed(maybeIndexed) {
  return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}

function isAssociative(maybeAssociative) {
  return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}

var Collection = function Collection(value) {
  return isCollection(value) ? value : Seq(value);
};

var KeyedCollection = (function (Collection) {
  function KeyedCollection(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }

  if ( Collection ) KeyedCollection.__proto__ = Collection;
  KeyedCollection.prototype = Object.create( Collection && Collection.prototype );
  KeyedCollection.prototype.constructor = KeyedCollection;

  return KeyedCollection;
}(Collection));

var IndexedCollection = (function (Collection) {
  function IndexedCollection(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }

  if ( Collection ) IndexedCollection.__proto__ = Collection;
  IndexedCollection.prototype = Object.create( Collection && Collection.prototype );
  IndexedCollection.prototype.constructor = IndexedCollection;

  return IndexedCollection;
}(Collection));

var SetCollection = (function (Collection) {
  function SetCollection(value) {
    return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
  }

  if ( Collection ) SetCollection.__proto__ = Collection;
  SetCollection.prototype = Object.create( Collection && Collection.prototype );
  SetCollection.prototype.constructor = SetCollection;

  return SetCollection;
}(Collection));

Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;

var IS_SEQ_SYMBOL = '@@__IMMUTABLE_SEQ__@@';

function isSeq(maybeSeq) {
  return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}

var IS_RECORD_SYMBOL = '@@__IMMUTABLE_RECORD__@@';

function isRecord(maybeRecord) {
  return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}

function isImmutable(maybeImmutable) {
  return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}

var IS_ORDERED_SYMBOL = '@@__IMMUTABLE_ORDERED__@@';

function isOrdered(maybeOrdered) {
  return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}

var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;

var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;

var Iterator = function Iterator(next) {
  this.next = next;
};

Iterator.prototype.toString = function toString () {
  return '[Iterator]';
};

Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;

Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
  return this.toString();
};
Iterator.prototype[ITERATOR_SYMBOL] = function() {
  return this;
};

function iteratorValue(type, k, v, iteratorResult) {
  var value = type === 0 ? k : type === 1 ? v : [k, v];
  iteratorResult
    ? (iteratorResult.value = value)
    : (iteratorResult = {
        value: value,
        done: false,
      });
  return iteratorResult;
}

function iteratorDone() {
  return { value: undefined, done: true };
}

function hasIterator(maybeIterable) {
  return !!getIteratorFn(maybeIterable);
}

function isIterator(maybeIterator) {
  return maybeIterator && typeof maybeIterator.next === 'function';
}

function getIterator(iterable) {
  var iteratorFn = getIteratorFn(iterable);
  return iteratorFn && iteratorFn.call(iterable);
}

function getIteratorFn(iterable) {
  var iteratorFn =
    iterable &&
    ((REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isArrayLike(value) {
  if (Array.isArray(value) || typeof value === 'string') {
    return true;
  }

  return (
    value &&
    typeof value === 'object' &&
    Number.isInteger(value.length) &&
    value.length >= 0 &&
    (value.length === 0
      ? // Only {length: 0} is considered Array-like.
        Object.keys(value).length === 1
      : // An object is only Array-like if it has a property where the last value
        // in the array-like may be found (which could be undefined).
        value.hasOwnProperty(value.length - 1))
  );
}

var Seq = (function (Collection$$1) {
  function Seq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isImmutable(value) ? value.toSeq() : seqFromValue(value);
  }

  if ( Collection$$1 ) Seq.__proto__ = Collection$$1;
  Seq.prototype = Object.create( Collection$$1 && Collection$$1.prototype );
  Seq.prototype.constructor = Seq;

  Seq.prototype.toSeq = function toSeq () {
    return this;
  };

  Seq.prototype.toString = function toString () {
    return this.__toString('Seq {', '}');
  };

  Seq.prototype.cacheResult = function cacheResult () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }
    return this;
  };

  // abstract __iterateUncached(fn, reverse)

  Seq.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      while (i !== size) {
        var entry = cache[reverse ? size - ++i : i++];
        if (fn(entry[1], entry[0], this$1) === false) {
          break;
        }
      }
      return i;
    }
    return this.__iterateUncached(fn, reverse);
  };

  // abstract __iteratorUncached(type, reverse)

  Seq.prototype.__iterator = function __iterator (type, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      return new Iterator(function () {
        if (i === size) {
          return iteratorDone();
        }
        var entry = cache[reverse ? size - ++i : i++];
        return iteratorValue(type, entry[0], entry[1]);
      });
    }
    return this.__iteratorUncached(type, reverse);
  };

  return Seq;
}(Collection));

var KeyedSeq = (function (Seq) {
  function KeyedSeq(value) {
    return value === null || value === undefined
      ? emptySequence().toKeyedSeq()
      : isCollection(value)
        ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq()
        : isRecord(value) ? value.toSeq() : keyedSeqFromValue(value);
  }

  if ( Seq ) KeyedSeq.__proto__ = Seq;
  KeyedSeq.prototype = Object.create( Seq && Seq.prototype );
  KeyedSeq.prototype.constructor = KeyedSeq;

  KeyedSeq.prototype.toKeyedSeq = function toKeyedSeq () {
    return this;
  };

  return KeyedSeq;
}(Seq));

var IndexedSeq = (function (Seq) {
  function IndexedSeq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isCollection(value)
        ? isKeyed(value) ? value.entrySeq() : value.toIndexedSeq()
        : isRecord(value)
          ? value.toSeq().entrySeq()
          : indexedSeqFromValue(value);
  }

  if ( Seq ) IndexedSeq.__proto__ = Seq;
  IndexedSeq.prototype = Object.create( Seq && Seq.prototype );
  IndexedSeq.prototype.constructor = IndexedSeq;

  IndexedSeq.of = function of (/*...values*/) {
    return IndexedSeq(arguments);
  };

  IndexedSeq.prototype.toIndexedSeq = function toIndexedSeq () {
    return this;
  };

  IndexedSeq.prototype.toString = function toString () {
    return this.__toString('Seq [', ']');
  };

  return IndexedSeq;
}(Seq));

var SetSeq = (function (Seq) {
  function SetSeq(value) {
    return (isCollection(value) && !isAssociative(value)
      ? value
      : IndexedSeq(value)
    ).toSetSeq();
  }

  if ( Seq ) SetSeq.__proto__ = Seq;
  SetSeq.prototype = Object.create( Seq && Seq.prototype );
  SetSeq.prototype.constructor = SetSeq;

  SetSeq.of = function of (/*...values*/) {
    return SetSeq(arguments);
  };

  SetSeq.prototype.toSetSeq = function toSetSeq () {
    return this;
  };

  return SetSeq;
}(Seq));

Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;

Seq.prototype[IS_SEQ_SYMBOL] = true;

// #pragma Root Sequences

var ArraySeq = (function (IndexedSeq) {
  function ArraySeq(array) {
    this._array = array;
    this.size = array.length;
  }

  if ( IndexedSeq ) ArraySeq.__proto__ = IndexedSeq;
  ArraySeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  ArraySeq.prototype.constructor = ArraySeq;

  ArraySeq.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  };

  ArraySeq.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var array = this._array;
    var size = array.length;
    var i = 0;
    while (i !== size) {
      var ii = reverse ? size - ++i : i++;
      if (fn(array[ii], ii, this$1) === false) {
        break;
      }
    }
    return i;
  };

  ArraySeq.prototype.__iterator = function __iterator (type, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var ii = reverse ? size - ++i : i++;
      return iteratorValue(type, ii, array[ii]);
    });
  };

  return ArraySeq;
}(IndexedSeq));

var ObjectSeq = (function (KeyedSeq) {
  function ObjectSeq(object) {
    var keys = Object.keys(object);
    this._object = object;
    this._keys = keys;
    this.size = keys.length;
  }

  if ( KeyedSeq ) ObjectSeq.__proto__ = KeyedSeq;
  ObjectSeq.prototype = Object.create( KeyedSeq && KeyedSeq.prototype );
  ObjectSeq.prototype.constructor = ObjectSeq;

  ObjectSeq.prototype.get = function get (key, notSetValue) {
    if (notSetValue !== undefined && !this.has(key)) {
      return notSetValue;
    }
    return this._object[key];
  };

  ObjectSeq.prototype.has = function has (key) {
    return hasOwnProperty.call(this._object, key);
  };

  ObjectSeq.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    while (i !== size) {
      var key = keys[reverse ? size - ++i : i++];
      if (fn(object[key], key, this$1) === false) {
        break;
      }
    }
    return i;
  };

  ObjectSeq.prototype.__iterator = function __iterator (type, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var key = keys[reverse ? size - ++i : i++];
      return iteratorValue(type, key, object[key]);
    });
  };

  return ObjectSeq;
}(KeyedSeq));
ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;

var CollectionSeq = (function (IndexedSeq) {
  function CollectionSeq(collection) {
    this._collection = collection;
    this.size = collection.length || collection.size;
  }

  if ( IndexedSeq ) CollectionSeq.__proto__ = IndexedSeq;
  CollectionSeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  CollectionSeq.prototype.constructor = CollectionSeq;

  CollectionSeq.prototype.__iterateUncached = function __iterateUncached (fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    var iterations = 0;
    if (isIterator(iterator)) {
      var step;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this$1) === false) {
          break;
        }
      }
    }
    return iterations;
  };

  CollectionSeq.prototype.__iteratorUncached = function __iteratorUncached (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }
    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  };

  return CollectionSeq;
}(IndexedSeq));

// # pragma Helper functions

var EMPTY_SEQ;

function emptySequence() {
  return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}

function keyedSeqFromValue(value) {
  var seq = Array.isArray(value)
    ? new ArraySeq(value)
    : hasIterator(value) ? new CollectionSeq(value) : undefined;
  if (seq) {
    return seq.fromEntrySeq();
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of [k, v] entries, or keyed object: ' +
      value
  );
}

function indexedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  throw new TypeError(
    'Expected Array or collection object of values: ' + value
  );
}

function seqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of values, or keyed object: ' + value
  );
}

function maybeIndexedSeqFromValue(value) {
  return isArrayLike(value)
    ? new ArraySeq(value)
    : hasIterator(value) ? new CollectionSeq(value) : undefined;
}

var IS_MAP_SYMBOL = '@@__IMMUTABLE_MAP__@@';

function isMap(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}

function isOrderedMap(maybeOrderedMap) {
  return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}

function isValueObject(maybeValue) {
  return Boolean(
    maybeValue &&
      typeof maybeValue.equals === 'function' &&
      typeof maybeValue.hashCode === 'function'
  );
}

/**
 * An extension of the "same-value" algorithm as [described for use by ES6 Map
 * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
 *
 * NaN is considered the same as NaN, however -0 and 0 are considered the same
 * value, which is different from the algorithm described by
 * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
 *
 * This is extended further to allow Objects to describe the values they
 * represent, by way of `valueOf` or `equals` (and `hashCode`).
 *
 * Note: because of this extension, the key equality of Immutable.Map and the
 * value equality of Immutable.Set will differ from ES6 Map and Set.
 *
 * ### Defining custom values
 *
 * The easiest way to describe the value an object represents is by implementing
 * `valueOf`. For example, `Date` represents a value by returning a unix
 * timestamp for `valueOf`:
 *
 *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
 *     var date2 = new Date(1234567890000);
 *     date1.valueOf(); // 1234567890000
 *     assert( date1 !== date2 );
 *     assert( Immutable.is( date1, date2 ) );
 *
 * Note: overriding `valueOf` may have other implications if you use this object
 * where JavaScript expects a primitive, such as implicit string coercion.
 *
 * For more complex types, especially collections, implementing `valueOf` may
 * not be performant. An alternative is to implement `equals` and `hashCode`.
 *
 * `equals` takes another object, presumably of similar type, and returns true
 * if it is equal. Equality is symmetrical, so the same result should be
 * returned if this and the argument are flipped.
 *
 *     assert( a.equals(b) === b.equals(a) );
 *
 * `hashCode` returns a 32bit integer number representing the object which will
 * be used to determine how to store the value object in a Map or Set. You must
 * provide both or neither methods, one must not exist without the other.
 *
 * Also, an important relationship between these methods must be upheld: if two
 * values are equal, they *must* return the same hashCode. If the values are not
 * equal, they might have the same hashCode; this is called a hash collision,
 * and while undesirable for performance reasons, it is acceptable.
 *
 *     if (a.equals(b)) {
 *       assert( a.hashCode() === b.hashCode() );
 *     }
 *
 * All Immutable collections are Value Objects: they implement `equals()`
 * and `hashCode()`.
 */
function is(valueA, valueB) {
  if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
    return true;
  }
  if (!valueA || !valueB) {
    return false;
  }
  if (
    typeof valueA.valueOf === 'function' &&
    typeof valueB.valueOf === 'function'
  ) {
    valueA = valueA.valueOf();
    valueB = valueB.valueOf();
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
  }
  return !!(
    isValueObject(valueA) &&
    isValueObject(valueB) &&
    valueA.equals(valueB)
  );
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var IS_SORTED_SYMBOL = '@@__IMMUTABLE_SORTED__@@';

function isSorted(maybeSorted) {
  return Boolean(maybeSorted && maybeSorted[IS_SORTED_SYMBOL]);
}

var imul =
  typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2
    ? Math.imul
    : function imul(a, b) {
        a |= 0; // int
        b |= 0; // int
        var c = a & 0xffff;
        var d = b & 0xffff;
        // Shift by 0 fixes the sign on the high part.
        return (c * d + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0)) | 0; // int
      };

// v8 has an optimization for storing 31-bit signed numbers.
// Values which have either 00 or 11 as the high order bits qualify.
// This function drops the highest order bit in a signed number, maintaining
// the sign bit.
function smi(i32) {
  return ((i32 >>> 1) & 0x40000000) | (i32 & 0xbfffffff);
}

var defaultValueOf = Object.prototype.valueOf;

function hash(o) {
  switch (typeof o) {
    case 'boolean':
      // The hash values for built-in constants are a 1 value for each 5-byte
      // shift region expect for the first, which encodes the value. This
      // reduces the odds of a hash collision for these common values.
      return o ? 0x42108421 : 0x42108420;
    case 'number':
      return hashNumber(o);
    case 'string':
      return o.length > STRING_HASH_CACHE_MIN_STRLEN
        ? cachedHashString(o)
        : hashString(o);
    case 'object':
    case 'function':
      if (o === null) {
        return 0x42108422;
      }
      if (typeof o.hashCode === 'function') {
        // Drop any high bits from accidentally long hash codes.
        return smi(o.hashCode(o));
      }
      if (o.valueOf !== defaultValueOf && typeof o.valueOf === 'function') {
        o = o.valueOf(o);
      }
      return hashJSObj(o);
    case 'undefined':
      return 0x42108423;
    default:
      if (typeof o.toString === 'function') {
        return hashString(o.toString());
      }
      throw new Error('Value type ' + typeof o + ' cannot be hashed.');
  }
}

// Compress arbitrarily large numbers into smi hashes.
function hashNumber(n) {
  if (n !== n || n === Infinity) {
    return 0;
  }
  var hash = n | 0;
  if (hash !== n) {
    hash ^= n * 0xffffffff;
  }
  while (n > 0xffffffff) {
    n /= 0xffffffff;
    hash ^= n;
  }
  return smi(hash);
}

function cachedHashString(string) {
  var hashed = stringHashCache[string];
  if (hashed === undefined) {
    hashed = hashString(string);
    if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
      STRING_HASH_CACHE_SIZE = 0;
      stringHashCache = {};
    }
    STRING_HASH_CACHE_SIZE++;
    stringHashCache[string] = hashed;
  }
  return hashed;
}

// http://jsperf.com/hashing-strings
function hashString(string) {
  // This is the hash from JVM
  // The hash code for a string is computed as
  // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
  // where s[i] is the ith character of the string and n is the length of
  // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
  // (exclusive) by dropping high bits.
  var hashed = 0;
  for (var ii = 0; ii < string.length; ii++) {
    hashed = (31 * hashed + string.charCodeAt(ii)) | 0;
  }
  return smi(hashed);
}

function hashJSObj(obj) {
  var hashed;
  if (usingWeakMap) {
    hashed = weakMap.get(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = obj[UID_HASH_KEY];
  if (hashed !== undefined) {
    return hashed;
  }

  if (!canDefineProperty) {
    hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
    if (hashed !== undefined) {
      return hashed;
    }

    hashed = getIENodeHash(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = ++objHashUID;
  if (objHashUID & 0x40000000) {
    objHashUID = 0;
  }

  if (usingWeakMap) {
    weakMap.set(obj, hashed);
  } else if (isExtensible !== undefined && isExtensible(obj) === false) {
    throw new Error('Non-extensible objects are not allowed as keys.');
  } else if (canDefineProperty) {
    Object.defineProperty(obj, UID_HASH_KEY, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: hashed,
    });
  } else if (
    obj.propertyIsEnumerable !== undefined &&
    obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable
  ) {
    // Since we can't define a non-enumerable property on the object
    // we'll hijack one of the less-used non-enumerable properties to
    // save our hash on it. Since this is a function it will not show up in
    // `JSON.stringify` which is what we want.
    obj.propertyIsEnumerable = function() {
      return this.constructor.prototype.propertyIsEnumerable.apply(
        this,
        arguments
      );
    };
    obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
  } else if (obj.nodeType !== undefined) {
    // At this point we couldn't get the IE `uniqueID` to use as a hash
    // and we couldn't use a non-enumerable property to exploit the
    // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
    // itself.
    obj[UID_HASH_KEY] = hashed;
  } else {
    throw new Error('Unable to set a non-enumerable property on object.');
  }

  return hashed;
}

// Get references to ES5 object methods.
var isExtensible = Object.isExtensible;

// True if Object.defineProperty works as expected. IE8 fails this test.
var canDefineProperty = (function() {
  try {
    Object.defineProperty({}, '@', {});
    return true;
  } catch (e) {
    return false;
  }
})();

// IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
// and avoid memory leaks from the IE cloneNode bug.
function getIENodeHash(node) {
  if (node && node.nodeType > 0) {
    switch (node.nodeType) {
      case 1: // Element
        return node.uniqueID;
      case 9: // Document
        return node.documentElement && node.documentElement.uniqueID;
    }
  }
}

// If possible, use a WeakMap.
var usingWeakMap = typeof WeakMap === 'function';
var weakMap;
if (usingWeakMap) {
  weakMap = new WeakMap();
}

var objHashUID = 0;

var UID_HASH_KEY = '__immutablehash__';
if (typeof Symbol === 'function') {
  UID_HASH_KEY = Symbol(UID_HASH_KEY);
}

var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

//
// Floyd-Rivest algorithm according to wikipedia
// https://en.wikipedia.org/wiki/Floyd%E2%80%93Rivest_algorithm
//

var swap = function (array, i, j) {
  var tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

var sampleThreshold = 1000;
var sampleReach = 0.5;

// partition the elements between inclusive left and right around t
var quickSelectRange = function (array, left, right, k, comparator) {
  // k is outside of range, no need to sort out anything
  if (k < left || k > right) {
    return;
  }
  while (right > left) {
    // use select recursively to sample a smaller set of size s
    // the arbitrary constants 600 and 0.5 are used in the original
    // version to minimize execution time
    if (right - left > sampleThreshold) {
      var n = right - left + 1;
      var i = k - left + 1;
      var z = Math.log(n);
      var s = sampleReach * Math.exp(2 * z / 3);
      var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * Math.sign(i - n / 2);
      var newLeft = Math.max(left, Math.floor(k - i * s / n + sd));
      var newRight = Math.min(right, Math.floor(k + (n - i) * s / n + sd));
      quickSelectRange(array, newLeft, newRight, k, comparator);
    }

    var t = array[k];
    var i$1 = left;
    var j = right;
    swap(array, left, k);
    if (comparator(array[right], t) > 0) {
      swap(array, right, left);
    }
    while (i$1 < j) {
      swap(array, i$1++, j--);
      while (comparator(array[i$1], t) < 0) {
        i$1++;
      }
      while (comparator(array[j], t) > 0) {
        j--;
      }
    }
    if (array[left] === t) {
      swap(array, left, j);
    } else {
      swap(array, ++j, right);
    }
    // adjust left and right towards the boundaries of the subset
    // containing the (k - left + 1)th smallest element
    if (j <= k) {
      left = j + 1;
    }
    if (k <= j) {
      right = j - 1;
    }
  }
};

var quickSelect = function (array, k, comparator) {
  if (!comparator) {
    comparator = function (a, b) { return (a > b ? 1 : a < b ? -1 : 0); };
  }
  quickSelectRange(array, 0, array.length - 1, k, comparator);
};

var ToKeyedSequence = (function (KeyedSeq$$1) {
  function ToKeyedSequence(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }

  if ( KeyedSeq$$1 ) ToKeyedSequence.__proto__ = KeyedSeq$$1;
  ToKeyedSequence.prototype = Object.create( KeyedSeq$$1 && KeyedSeq$$1.prototype );
  ToKeyedSequence.prototype.constructor = ToKeyedSequence;

  ToKeyedSequence.prototype.get = function get (key, notSetValue) {
    return this._iter.get(key, notSetValue);
  };

  ToKeyedSequence.prototype.has = function has (key) {
    return this._iter.has(key);
  };

  ToKeyedSequence.prototype.valueSeq = function valueSeq () {
    return this._iter.valueSeq();
  };

  ToKeyedSequence.prototype.reverse = function reverse () {
    var this$1 = this;

    var reversedSequence = reverseFactory(this, true);
    if (!this._useKeys) {
      reversedSequence.valueSeq = function () { return this$1._iter.toSeq().reverse(); };
    }
    return reversedSequence;
  };

  ToKeyedSequence.prototype.map = function map (mapper, context) {
    var this$1 = this;

    var mappedSequence = mapFactory(this, mapper, context);
    if (!this._useKeys) {
      mappedSequence.valueSeq = function () { return this$1._iter.toSeq().map(mapper, context); };
    }
    return mappedSequence;
  };

  ToKeyedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (v, k) { return fn(v, k, this$1); }, reverse);
  };

  ToKeyedSequence.prototype.__iterator = function __iterator (type, reverse) {
    return this._iter.__iterator(type, reverse);
  };

  return ToKeyedSequence;
}(KeyedSeq));
ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;

var ToIndexedSequence = (function (IndexedSeq$$1) {
  function ToIndexedSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( IndexedSeq$$1 ) ToIndexedSequence.__proto__ = IndexedSeq$$1;
  ToIndexedSequence.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  ToIndexedSequence.prototype.constructor = ToIndexedSequence;

  ToIndexedSequence.prototype.includes = function includes (value) {
    return this._iter.includes(value);
  };

  ToIndexedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var i = 0;
    reverse && ensureSize(this);
    return this._iter.__iterate(
      function (v) { return fn(v, reverse ? this$1.size - ++i : i++, this$1); },
      reverse
    );
  };

  ToIndexedSequence.prototype.__iterator = function __iterator (type, reverse) {
    var this$1 = this;

    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    var i = 0;
    reverse && ensureSize(this);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(
            type,
            reverse ? this$1.size - ++i : i++,
            step.value,
            step
          );
    });
  };

  return ToIndexedSequence;
}(IndexedSeq));

var ToSetSequence = (function (SetSeq$$1) {
  function ToSetSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( SetSeq$$1 ) ToSetSequence.__proto__ = SetSeq$$1;
  ToSetSequence.prototype = Object.create( SetSeq$$1 && SetSeq$$1.prototype );
  ToSetSequence.prototype.constructor = ToSetSequence;

  ToSetSequence.prototype.has = function has (key) {
    return this._iter.includes(key);
  };

  ToSetSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (v) { return fn(v, v, this$1); }, reverse);
  };

  ToSetSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(type, step.value, step.value, step);
    });
  };

  return ToSetSequence;
}(SetSeq));

var FromEntriesSequence = (function (KeyedSeq$$1) {
  function FromEntriesSequence(entries) {
    this._iter = entries;
    this.size = entries.size;
  }

  if ( KeyedSeq$$1 ) FromEntriesSequence.__proto__ = KeyedSeq$$1;
  FromEntriesSequence.prototype = Object.create( KeyedSeq$$1 && KeyedSeq$$1.prototype );
  FromEntriesSequence.prototype.constructor = FromEntriesSequence;

  FromEntriesSequence.prototype.entrySeq = function entrySeq () {
    return this._iter.toSeq();
  };

  FromEntriesSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (entry) {
      // Check if entry exists first so array access doesn't throw for holes
      // in the parent iteration.
      if (entry) {
        validateEntry(entry);
        var indexedCollection = isCollection(entry);
        return fn(
          indexedCollection ? entry.get(1) : entry[1],
          indexedCollection ? entry.get(0) : entry[0],
          this$1
        );
      }
    }, reverse);
  };

  FromEntriesSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return iteratorValue(
            type,
            indexedCollection ? entry.get(0) : entry[0],
            indexedCollection ? entry.get(1) : entry[1],
            step
          );
        }
      }
    });
  };

  return FromEntriesSequence;
}(KeyedSeq));

ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;

function flipFactory(collection) {
  var flipSequence = makeSequence(collection);
  flipSequence._iter = collection;
  flipSequence.size = collection.size;
  flipSequence.flip = function () { return collection; };
  flipSequence.reverse = function() {
    var reversedSequence = collection.reverse.apply(this); // super.reverse()
    reversedSequence.flip = function () { return collection.reverse(); };
    return reversedSequence;
  };
  flipSequence.has = function (key) { return collection.includes(key); };
  flipSequence.includes = function (key) { return collection.has(key); };
  flipSequence.cacheResult = cacheResultThrough;
  flipSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    return collection.__iterate(function (v, k) { return fn(k, v, this$1) !== false; }, reverse);
  };
  flipSequence.__iteratorUncached = function(type, reverse) {
    if (type === ITERATE_ENTRIES) {
      var iterator = collection.__iterator(type, reverse);
      return new Iterator(function () {
        var step = iterator.next();
        if (!step.done) {
          var k = step.value[0];
          step.value[0] = step.value[1];
          step.value[1] = k;
        }
        return step;
      });
    }
    return collection.__iterator(
      type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
      reverse
    );
  };
  return flipSequence;
}

function mapFactory(collection, mapper, context) {
  var mappedSequence = makeSequence(collection);
  mappedSequence.size = collection.size;
  mappedSequence.has = function (key) { return collection.has(key); };
  mappedSequence.get = function (key, notSetValue) {
    var v = collection.get(key, NOT_SET);
    return v === NOT_SET
      ? notSetValue
      : mapper.call(context, v, key, collection);
  };
  mappedSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    return collection.__iterate(
      function (v, k, c) { return fn(mapper.call(context, v, k, c), k, this$1) !== false; },
      reverse
    );
  };
  mappedSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var key = entry[0];
      return iteratorValue(
        type,
        key,
        mapper.call(context, entry[1], key, collection),
        step
      );
    });
  };
  return mappedSequence;
}

function reverseFactory(collection, useKeys) {
  var this$1 = this;

  var reversedSequence = makeSequence(collection);
  reversedSequence._iter = collection;
  reversedSequence.size = collection.size;
  reversedSequence.reverse = function () { return collection; };
  if (collection.flip) {
    reversedSequence.flip = function() {
      var flipSequence = flipFactory(collection);
      flipSequence.reverse = function () { return collection.flip(); };
      return flipSequence;
    };
  }
  reversedSequence.get = function (key, notSetValue) { return collection.get(useKeys ? key : -1 - key, notSetValue); };
  reversedSequence.has = function (key) { return collection.has(useKeys ? key : -1 - key); };
  reversedSequence.includes = function (value) { return collection.includes(value); };
  reversedSequence.cacheResult = cacheResultThrough;
  reversedSequence.__iterate = function(fn, reverse) {
    var this$1 = this;

    var i = 0;
    reverse && ensureSize(collection);
    return collection.__iterate(
      function (v, k) { return fn(v, useKeys ? k : reverse ? this$1.size - ++i : i++, this$1); },
      !reverse
    );
  };
  reversedSequence.__iterator = function (type, reverse) {
    var i = 0;
    reverse && ensureSize(collection);
    var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      return iteratorValue(
        type,
        useKeys ? entry[0] : reverse ? this$1.size - ++i : i++,
        entry[1],
        step
      );
    });
  };
  return reversedSequence;
}

function filterFactory(collection, predicate, context, useKeys) {
  var filterSequence = makeSequence(collection);
  if (useKeys) {
    filterSequence.has = function (key) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && !!predicate.call(context, v, key, collection);
    };
    filterSequence.get = function (key, notSetValue) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && predicate.call(context, v, key, collection)
        ? v
        : notSetValue;
    };
  }
  filterSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    }, reverse);
    return iterations;
  };
  filterSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterations = 0;
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        var value = entry[1];
        if (predicate.call(context, value, key, collection)) {
          return iteratorValue(type, useKeys ? key : iterations++, value, step);
        }
      }
    });
  };
  return filterSequence;
}

function countByFactory(collection, grouper, context) {
  var groups = Map().asMutable();
  collection.__iterate(function (v, k) {
    groups.update(grouper.call(context, v, k, collection), 0, function (a) { return a + 1; });
  });
  return groups.asImmutable();
}

function groupByFactory(collection, grouper, context) {
  var isKeyedIter = isKeyed(collection);
  var groups = (isOrdered(collection) ? OrderedMap() : Map()).asMutable();
  collection.__iterate(function (v, k) {
    groups.update(
      grouper.call(context, v, k, collection),
      function (a) { return ((a = a || []), a.push(isKeyedIter ? [k, v] : v), a); }
    );
  });
  var coerce = collectionClass(collection);
  return groups.map(function (arr) { return reify(collection, coerce(arr)); }).asImmutable();
}

function sliceFactory(collection, begin, end, useKeys) {
  var originalSize = collection.size;

  if (wholeSlice(begin, end, originalSize)) {
    return collection;
  }

  var resolvedBegin = resolveBegin(begin, originalSize);
  var resolvedEnd = resolveEnd(end, originalSize);

  // begin or end will be NaN if they were provided as negative numbers and
  // this collection's size is unknown. In that case, cache first so there is
  // a known size and these do not resolve to NaN.
  if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
    return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
  }

  // Note: resolvedEnd is undefined when the original sequence's length is
  // unknown and this slice did not supply an end and should contain all
  // elements after resolvedBegin.
  // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
  var resolvedSize = resolvedEnd - resolvedBegin;
  var sliceSize;
  if (resolvedSize === resolvedSize) {
    sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
  }

  var sliceSeq = makeSequence(collection);

  // If collection.size is undefined, the size of the realized sliceSeq is
  // unknown at this point unless the number of items to slice is 0
  sliceSeq.size =
    sliceSize === 0 ? sliceSize : (collection.size && sliceSize) || undefined;

  if (!useKeys && isSeq(collection) && sliceSize >= 0) {
    sliceSeq.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      return index >= 0 && index < sliceSize
        ? collection.get(index + resolvedBegin, notSetValue)
        : notSetValue;
    };
  }

  sliceSeq.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (sliceSize === 0) {
      return 0;
    }
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var skipped = 0;
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k) {
      if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
        iterations++;
        return (
          fn(v, useKeys ? k : iterations - 1, this$1) !== false &&
          iterations !== sliceSize
        );
      }
    });
    return iterations;
  };

  sliceSeq.__iteratorUncached = function(type, reverse) {
    if (sliceSize !== 0 && reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    // Don't bother instantiating parent iterator if taking 0.
    if (sliceSize === 0) {
      return new Iterator(iteratorDone);
    }
    var iterator = collection.__iterator(type, reverse);
    var skipped = 0;
    var iterations = 0;
    return new Iterator(function () {
      while (skipped++ < resolvedBegin) {
        iterator.next();
      }
      if (++iterations > sliceSize) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (useKeys || type === ITERATE_VALUES || step.done) {
        return step;
      }
      if (type === ITERATE_KEYS) {
        return iteratorValue(type, iterations - 1, undefined, step);
      }
      return iteratorValue(type, iterations - 1, step.value[1], step);
    });
  };

  return sliceSeq;
}

function takeWhileFactory(collection, predicate, context) {
  var takeSequence = makeSequence(collection);
  takeSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    collection.__iterate(
      function (v, k, c) { return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1); }
    );
    return iterations;
  };
  takeSequence.__iteratorUncached = function(type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterating = true;
    return new Iterator(function () {
      if (!iterating) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var k = entry[0];
      var v = entry[1];
      if (!predicate.call(context, v, k, this$1)) {
        iterating = false;
        return iteratorDone();
      }
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return takeSequence;
}

function skipWhileFactory(collection, predicate, context, useKeys) {
  var skipSequence = makeSequence(collection);
  skipSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    });
    return iterations;
  };
  skipSequence.__iteratorUncached = function(type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var skipping = true;
    var iterations = 0;
    return new Iterator(function () {
      var step;
      var k;
      var v;
      do {
        step = iterator.next();
        if (step.done) {
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          }
          if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations++, undefined, step);
          }
          return iteratorValue(type, iterations++, step.value[1], step);
        }
        var entry = step.value;
        k = entry[0];
        v = entry[1];
        skipping && (skipping = predicate.call(context, v, k, this$1));
      } while (skipping);
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return skipSequence;
}

function concatFactory(collection, values) {
  var isKeyedCollection = isKeyed(collection);
  var iters = [collection]
    .concat(values)
    .map(function (v) {
      if (!isCollection(v)) {
        v = isKeyedCollection
          ? keyedSeqFromValue(v)
          : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedCollection) {
        v = KeyedCollection(v);
      }
      return v;
    })
    .filter(function (v) { return v.size !== 0; });

  if (iters.length === 0) {
    return collection;
  }

  if (iters.length === 1) {
    var singleton = iters[0];
    if (
      singleton === collection ||
      (isKeyedCollection && isKeyed(singleton)) ||
      (isIndexed(collection) && isIndexed(singleton))
    ) {
      return singleton;
    }
  }

  var concatSeq = new ArraySeq(iters);
  if (isKeyedCollection) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!isIndexed(collection)) {
    concatSeq = concatSeq.toSetSeq();
  }
  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce(function (sum, seq) {
    if (sum !== undefined) {
      var size = seq.size;
      if (size !== undefined) {
        return sum + size;
      }
    }
  }, 0);
  return concatSeq;
}

function flattenFactory(collection, depth, useKeys) {
  var flatSequence = makeSequence(collection);
  flatSequence.__iterateUncached = function(fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    var stopped = false;
    function flatDeep(iter, currentDepth) {
      iter.__iterate(function (v, k) {
        if ((!depth || currentDepth < depth) && isCollection(v)) {
          flatDeep(v, currentDepth + 1);
        } else {
          iterations++;
          if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
            stopped = true;
          }
        }
        return !stopped;
      }, reverse);
    }
    flatDeep(collection, 0);
    return iterations;
  };
  flatSequence.__iteratorUncached = function(type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(type, reverse);
    var stack = [];
    var iterations = 0;
    return new Iterator(function () {
      while (iterator) {
        var step = iterator.next();
        if (step.done !== false) {
          iterator = stack.pop();
          continue;
        }
        var v = step.value;
        if (type === ITERATE_ENTRIES) {
          v = v[1];
        }
        if ((!depth || stack.length < depth) && isCollection(v)) {
          stack.push(iterator);
          iterator = v.__iterator(type, reverse);
        } else {
          return useKeys ? step : iteratorValue(type, iterations++, v, step);
        }
      }
      return iteratorDone();
    });
  };
  return flatSequence;
}

function flatMapFactory(collection, mapper, context) {
  var coerce = collectionClass(collection);
  return collection
    .toSeq()
    .map(function (v, k) { return coerce(mapper.call(context, v, k, collection)); })
    .flatten(true);
}

function interposeFactory(collection, separator) {
  var interposedSequence = makeSequence(collection);
  interposedSequence.size = collection.size && collection.size * 2 - 1;
  interposedSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    collection.__iterate(
      function (v) { return (!iterations || fn(separator, iterations++, this$1) !== false) &&
        fn(v, iterations++, this$1) !== false; },
      reverse
    );
    return iterations;
  };
  interposedSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_VALUES, reverse);
    var iterations = 0;
    var step;
    return new Iterator(function () {
      if (!step || iterations % 2) {
        step = iterator.next();
        if (step.done) {
          return step;
        }
      }
      return iterations % 2
        ? iteratorValue(type, iterations++, separator)
        : iteratorValue(type, iterations++, step.value, step);
    });
  };
  return interposedSequence;
}

function sortFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  var isKeyedCollection = isKeyed(collection);
  var index = 0;
  var entries = collection
    .toSeq()
    .map(function (v, k) { return [k, v, index++, mapper ? mapper(v, k, collection) : v]; })
    .valueSeq()
    .toArray();
  entries.sort(function (a, b) { return comparator(a[3], b[3]) || a[2] - b[2]; }).forEach(
    isKeyedCollection
      ? function (v, i) {
          entries[i].length = 2;
        }
      : function (v, i) {
          entries[i] = v[1];
        }
  );
  return isKeyedCollection
    ? KeyedSeq(entries)
    : isIndexed(collection) ? IndexedSeq(entries) : SetSeq(entries);
}

function partialSortFactory(collection, n, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  var isKeyedCollection = isKeyed(collection);
  var index = 0;
  var entries = collection
    .toSeq()
    .map(function (v, k) { return [k, v, index++, mapper ? mapper(v, k, collection) : v]; })
    .valueSeq()
    .toArray();
  var cmp = function (a, b) { return comparator(a[3], b[3]) || a[2] - b[2]; };
  quickSelect(entries, n, cmp);
  entries = entries.slice(0, n);
  entries.sort(cmp).forEach(
    isKeyedCollection
      ? function (v, i) {
          entries[i].length = 2;
        }
      : function (v, i) {
          entries[i] = v[1];
        }
  );
  return isKeyedCollection
    ? KeyedSeq(entries)
    : isIndexed(collection) ? IndexedSeq(entries) : SetSeq(entries);
}

function incSortFactory(collection, comparator, mapper, useKeys) {
  if (!comparator) {
    comparator = defaultComparator;
  }

  var index = 0;
  var entriesSeq = collection
    .toSeq()
    .map(function (v, k) { return [k, v, index++, mapper ? mapper(v, k, collection) : v]; })
    .valueSeq();

  var sequence = makeSequence(collection);
  sequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var entries = entriesSeq.toArray();
    var rcmp = reverse ? function (a, b) { return comparator(b, a); } : comparator;
    var cmp = function (a, b) { return rcmp(a[3], b[3]) || a[2] - b[2]; };

    var nextn = entries.length >> 10;
    nextn = Math.min(entries.length, 10);

    var from = 0;
    var to = -1;
    var n = 0;
    var i = 0;
    var sortedEntries;

    function nextBatch() {
      from = to + 1;
      to = Math.min(to + nextn, entries.length - 1);
      n = to - from + 1;
      i = 0;
      nextn <<= 2;

      quickSelectRange(entries, from, entries.length - 1, to, cmp);
      sortedEntries = entries.slice(from, to + 1);
      sortedEntries.sort(cmp).forEach(function (v, i) {
        sortedEntries[i].length = 2;
      });
    }

    function nextEntry() {
      if (i >= n) {
        nextBatch();
      }
      return sortedEntries[i++];
    }

    var iterations = 0;
    while (iterations < entries.length) {
      var entry = nextEntry();
      if (fn(entry[1], useKeys ? entry[0] : iterations, this$1) === false) {
        break;
      }
      iterations++;
    }
    return iterations;
  };

  sequence.__iteratorUncached = function(type, reverse) {
    var entries = entriesSeq.toArray();
    var rcmp = reverse ? function (a, b) { return comparator(b, a); } : comparator;
    var cmp = function (a, b) { return rcmp(a[3], b[3]) || a[2] - b[2]; };

    var nextn = entries.length >> 10;
    nextn = Math.min(entries.length, 10);

    var from = 0;
    var to = -1;
    var n = 0;
    var i = 0;
    var sortedEntries;

    function nextBatch() {
      from = to + 1;
      to = Math.min(to + nextn, entries.length - 1);
      n = to - from + 1;
      i = 0;
      nextn <<= 2;

      quickSelectRange(entries, from, entries.length - 1, to, cmp);
      sortedEntries = entries.slice(from, to + 1);
      sortedEntries.sort(cmp).forEach(function (v, i) {
        sortedEntries[i].length = 2;
      });
    }

    function nextEntry() {
      if (i >= n) {
        nextBatch();
      }
      return sortedEntries[i++];
    }

    var iterations = 0;
    return new Iterator(function () {
      if (iterations >= entries.length) {
        return iteratorDone();
      }
      iterations++;
      var entry = nextEntry(cmp);
      return iteratorValue(type, useKeys ? entry[0] : iterations, entry[1]);
    });
  };
  return sequence;
}

function maxFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  if (mapper) {
    var entry = collection
      .toSeq()
      .map(function (v, k) { return [v, mapper(v, k, collection)]; })
      .reduce(function (a, b) { return (maxCompare(comparator, a[1], b[1]) ? b : a); });
    return entry && entry[0];
  }
  return collection.reduce(function (a, b) { return (maxCompare(comparator, a, b) ? b : a); });
}

function maxCompare(comparator, a, b) {
  var comp = comparator(b, a);
  // b is considered the new max if the comparator declares them equal, but
  // they are not equal and b is in fact a nullish value.
  return (
    (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) ||
    comp > 0
  );
}

function zipWithFactory(keyIter, zipper, iters, zipAll) {
  var zipSequence = makeSequence(keyIter);
  var sizes = new ArraySeq(iters).map(function (i) { return i.size; });
  zipSequence.size = zipAll ? sizes.max() : sizes.min();
  // Note: this a generic base implementation of __iterate in terms of
  // __iterator which may be more generically useful in the future.
  zipSequence.__iterate = function(fn, reverse) {
    var this$1 = this;

    /* generic:
    var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      iterations++;
      if (fn(step.value[1], step.value[0], this) === false) {
        break;
      }
    }
    return iterations;
    */
    // indexed:
    var iterator = this.__iterator(ITERATE_VALUES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      if (fn(step.value, iterations++, this$1) === false) {
        break;
      }
    }
    return iterations;
  };
  zipSequence.__iteratorUncached = function(type, reverse) {
    var iterators = iters.map(
      function (i) { return ((i = Collection(i)), getIterator(reverse ? i.reverse() : i)); }
    );
    var iterations = 0;
    var isDone = false;
    return new Iterator(function () {
      var steps;
      if (!isDone) {
        steps = iterators.map(function (i) { return i.next(); });
        isDone = zipAll ? steps.every(function (s) { return s.done; }) : steps.some(function (s) { return s.done; });
      }
      if (isDone) {
        return iteratorDone();
      }
      return iteratorValue(
        type,
        iterations++,
        zipper.apply(null, steps.map(function (s) { return s.value; }))
      );
    });
  };
  return zipSequence;
}

// #pragma Helper Functions

function reify(iter, seq) {
  return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}

function validateEntry(entry) {
  if (entry !== Object(entry)) {
    throw new TypeError('Expected [K, V] tuple: ' + entry);
  }
}

function collectionClass(collection) {
  return isKeyed(collection)
    ? KeyedCollection
    : isIndexed(collection) ? IndexedCollection : SetCollection;
}

function makeSequence(collection) {
  return Object.create(
    (isKeyed(collection)
      ? KeyedSeq
      : isIndexed(collection) ? IndexedSeq : SetSeq
    ).prototype
  );
}

function cacheResultThrough() {
  if (this._iter.cacheResult) {
    this._iter.cacheResult();
    this.size = this._iter.size;
    return this;
  }
  return Seq.prototype.cacheResult.call(this);
}

function defaultComparator(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (a === undefined) {
    return 1;
  }

  if (b === undefined) {
    return -1;
  }

  return a > b ? 1 : a < b ? -1 : 0;
}

// http://jsperf.com/copy-array-inline
function arrCopy(arr, offset) {
  offset = offset || 0;
  var len = Math.max(0, arr.length - offset);
  var newArr = new Array(len);
  for (var ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset];
  }
  return newArr;
}

function invariant(condition, error) {
  if (!condition) { throw new Error(error); }
}

function assertNotInfinite(size) {
  invariant(
    size !== Infinity,
    'Cannot perform this action with an infinite size.'
  );
}

function coerceKeyPath(keyPath) {
  if (isArrayLike(keyPath) && typeof keyPath !== 'string') {
    return keyPath;
  }
  if (isOrdered(keyPath)) {
    return keyPath.toArray();
  }
  throw new TypeError(
    'Invalid keyPath: expected Ordered Collection or Array: ' + keyPath
  );
}

function isPlainObj(value) {
  return (
    value &&
    (typeof value.constructor !== 'function' ||
      value.constructor.name === 'Object')
  );
}

/**
 * Returns true if the value is a potentially-persistent data structure, either
 * provided by Immutable.js or a plain Array or Object.
 */
function isDataStructure(value) {
  return (
    typeof value === 'object' &&
    (isImmutable(value) || Array.isArray(value) || isPlainObj(value))
  );
}

/**
 * Converts a value to a string, adding quotes if a string was provided.
 */
function quoteString(value) {
  try {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}

function has(collection, key) {
  return isImmutable(collection)
    ? collection.has(key)
    : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}

function get(collection, key, notSetValue) {
  return isImmutable(collection)
    ? collection.get(key, notSetValue)
    : !has(collection, key)
      ? notSetValue
      : typeof collection.get === 'function'
        ? collection.get(key)
        : collection[key];
}

function shallowCopy(from) {
  if (Array.isArray(from)) {
    return arrCopy(from);
  }
  var to = {};
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      to[key] = from[key];
    }
  }
  return to;
}

function remove(collection, key) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.remove) {
      throw new TypeError(
        'Cannot update immutable value without .remove() method: ' + collection
      );
    }
    return collection.remove(key);
  }
  if (!hasOwnProperty.call(collection, key)) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  if (Array.isArray(collectionCopy)) {
    collectionCopy.splice(key, 1);
  } else {
    delete collectionCopy[key];
  }
  return collectionCopy;
}

function set(collection, key, value) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.set) {
      throw new TypeError(
        'Cannot update immutable value without .set() method: ' + collection
      );
    }
    return collection.set(key, value);
  }
  if (hasOwnProperty.call(collection, key) && value === collection[key]) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  collectionCopy[key] = value;
  return collectionCopy;
}

function updateIn(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = undefined;
  }
  var updatedValue = updateInDeeply(
    isImmutable(collection),
    collection,
    coerceKeyPath(keyPath),
    0,
    notSetValue,
    updater
  );
  return updatedValue === NOT_SET ? notSetValue : updatedValue;
}

function updateInDeeply(
  inImmutable,
  existing,
  keyPath,
  i,
  notSetValue,
  updater
) {
  var wasNotSet = existing === NOT_SET;
  if (i === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }
  if (!wasNotSet && !isDataStructure(existing)) {
    throw new TypeError(
      'Cannot update within non-data-structure value in path [' +
        keyPath.slice(0, i).map(quoteString) +
        ']: ' +
        existing
    );
  }
  var key = keyPath[i];
  var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
  var nextUpdated = updateInDeeply(
    nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
    nextExisting,
    keyPath,
    i + 1,
    notSetValue,
    updater
  );
  return nextUpdated === nextExisting
    ? existing
    : nextUpdated === NOT_SET
      ? remove(existing, key)
      : set(
          wasNotSet ? (inImmutable ? emptyMap() : {}) : existing,
          key,
          nextUpdated
        );
}

function setIn$1(collection, keyPath, value) {
  return updateIn(collection, keyPath, NOT_SET, function () { return value; });
}

function setIn$$1(keyPath, v) {
  return setIn$1(this, keyPath, v);
}

function removeIn(collection, keyPath) {
  return updateIn(collection, keyPath, function () { return NOT_SET; });
}

function deleteIn(keyPath) {
  return removeIn(this, keyPath);
}

function update$1(collection, key, notSetValue, updater) {
  return updateIn(collection, [key], notSetValue, updater);
}

function update$$1(key, notSetValue, updater) {
  return arguments.length === 1
    ? key(this)
    : update$1(this, key, notSetValue, updater);
}

function updateIn$1(keyPath, notSetValue, updater) {
  return updateIn(this, keyPath, notSetValue, updater);
}

function merge() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeIntoKeyedWith(this, iters);
}

function mergeWith(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  if (typeof merger !== 'function') {
    throw new TypeError('Invalid merger function: ' + merger);
  }
  return mergeIntoKeyedWith(this, iters, merger);
}

function mergeIntoKeyedWith(collection, collections, merger) {
  var iters = [];
  for (var ii = 0; ii < collections.length; ii++) {
    var collection$1 = KeyedCollection(collections[ii]);
    if (collection$1.size !== 0) {
      iters.push(collection$1);
    }
  }
  if (iters.length === 0) {
    return collection;
  }
  if (
    collection.toSeq().size === 0 &&
    !collection.__ownerID &&
    iters.length === 1
  ) {
    return collection.constructor(iters[0]);
  }
  return collection.withMutations(function (collection) {
    var mergeIntoCollection = merger
      ? function (value, key) {
          update$1(
            collection,
            key,
            NOT_SET,
            function (oldVal) { return (oldVal === NOT_SET ? value : merger(oldVal, value, key)); }
          );
        }
      : function (value, key) {
          collection.set(key, value);
        };
    for (var ii = 0; ii < iters.length; ii++) {
      iters[ii].forEach(mergeIntoCollection);
    }
  });
}

function merge$1(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeWithSources(collection, sources);
}

function mergeWith$1(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeWithSources(collection, sources, merger);
}

function mergeDeep$1(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(collection, sources);
}

function mergeDeepWith$1(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeDeepWithSources(collection, sources, merger);
}

function mergeDeepWithSources(collection, sources, merger) {
  return mergeWithSources(collection, sources, deepMergerWith(merger));
}

function mergeWithSources(collection, sources, merger) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot merge into non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    return typeof merger === 'function' && collection.mergeWith
      ? collection.mergeWith.apply(collection, [ merger ].concat( sources ))
      : collection.merge
        ? collection.merge.apply(collection, sources)
        : collection.concat.apply(collection, sources);
  }
  var isArray = Array.isArray(collection);
  var merged = collection;
  var Collection$$1 = isArray ? IndexedCollection : KeyedCollection;
  var mergeItem = isArray
    ? function (value) {
        // Copy on write
        if (merged === collection) {
          merged = shallowCopy(merged);
        }
        merged.push(value);
      }
    : function (value, key) {
        var hasVal = hasOwnProperty.call(merged, key);
        var nextVal =
          hasVal && merger ? merger(merged[key], value, key) : value;
        if (!hasVal || nextVal !== merged[key]) {
          // Copy on write
          if (merged === collection) {
            merged = shallowCopy(merged);
          }
          merged[key] = nextVal;
        }
      };
  for (var i = 0; i < sources.length; i++) {
    Collection$$1(sources[i]).forEach(mergeItem);
  }
  return merged;
}

function deepMergerWith(merger) {
  function deepMerger(oldValue, newValue, key) {
    return isDataStructure(oldValue) && isDataStructure(newValue)
      ? mergeWithSources(oldValue, [newValue], deepMerger)
      : merger ? merger(oldValue, newValue, key) : newValue;
  }
  return deepMerger;
}

function mergeDeep() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeDeepWithSources(this, iters);
}

function mergeDeepWith(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(this, iters, merger);
}

function mergeIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn(this, keyPath, emptyMap(), function (m) { return mergeWithSources(m, iters); });
}

function mergeDeepIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn(this, keyPath, emptyMap(), function (m) { return mergeDeepWithSources(m, iters); }
  );
}

function withMutations(fn) {
  var mutable = this.asMutable();
  fn(mutable);
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}

function asMutable() {
  return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}

function asImmutable() {
  return this.__ensureOwner();
}

function wasAltered() {
  return this.__altered;
}

var Map = (function (KeyedCollection$$1) {
  function Map(value) {
    return value === null || value === undefined
      ? emptyMap()
      : isMap(value) && !isOrdered(value) && !isSorted(value)
        ? value
        : emptyMap().withMutations(function (map) {
            var iter = KeyedCollection$$1(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v, k) { return map.set(k, v); });
          });
  }

  if ( KeyedCollection$$1 ) Map.__proto__ = KeyedCollection$$1;
  Map.prototype = Object.create( KeyedCollection$$1 && KeyedCollection$$1.prototype );
  Map.prototype.constructor = Map;

  Map.of = function of () {
    var keyValues = [], len = arguments.length;
    while ( len-- ) keyValues[ len ] = arguments[ len ];

    return emptyMap().withMutations(function (map) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error('Missing value for key: ' + keyValues[i]);
        }
        map.set(keyValues[i], keyValues[i + 1]);
      }
    });
  };

  Map.prototype.toString = function toString () {
    return this.__toString('Map {', '}');
  };

  // @pragma Access

  Map.prototype.get = function get (k, notSetValue) {
    return this._root
      ? this._root.get(0, undefined, k, notSetValue)
      : notSetValue;
  };

  // @pragma Modification

  Map.prototype.set = function set (k, v) {
    return updateMap(this, k, v);
  };

  Map.prototype.remove = function remove (k) {
    return updateMap(this, k, NOT_SET);
  };

  Map.prototype.deleteAll = function deleteAll (keys) {
    var collection = Collection(keys);

    if (collection.size === 0) {
      return this;
    }

    return this.withMutations(function (map) {
      collection.forEach(function (key) { return map.remove(key); });
    });
  };

  Map.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyMap();
  };

  // @pragma Composition

  Map.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator));
  };

  Map.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator, mapper));
  };

  Map.prototype.map = function map (mapper, context) {
    return this.withMutations(function (map) {
      map.forEach(function (value, key) {
        map.set(key, mapper.call(context, value, key, map));
      });
    });
  };

  // @pragma Mutability

  Map.prototype.__iterator = function __iterator (type, reverse) {
    return new MapIterator(this, type, reverse);
  };

  Map.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    this._root &&
      this._root.iterate(function (entry) {
        iterations++;
        return fn(entry[1], entry[0], this$1);
      }, reverse);
    return iterations;
  };

  Map.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeMap(this.size, this._root, ownerID, this.__hash);
  };

  return Map;
}(KeyedCollection));

Map.isMap = isMap;

var MapPrototype = Map.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn$$1;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update$$1;
MapPrototype.updateIn = updateIn$1;
MapPrototype.merge = MapPrototype.concat = merge;
MapPrototype.mergeWith = mergeWith;
MapPrototype.mergeDeep = mergeDeep;
MapPrototype.mergeDeepWith = mergeDeepWith;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype['@@transducer/init'] = MapPrototype.asMutable = asMutable;
MapPrototype['@@transducer/step'] = function(result, arr) {
  return result.set(arr[0], arr[1]);
};
MapPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

// #pragma Trie Nodes

var ArrayMapNode = function ArrayMapNode(ownerID, entries) {
  this.ownerID = ownerID;
  this.entries = entries;
};

ArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

ArrayMapNode.prototype.update = function update$$1 (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && entries.length === 1) {
    return; // undefined
  }

  if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
    return createNodes(ownerID, entries, key, value);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new ArrayMapNode(ownerID, newEntries);
};

var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
  this.ownerID = ownerID;
  this.bitmap = bitmap;
  this.nodes = nodes;
};

BitmapIndexedNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
  var bitmap = this.bitmap;
  return (bitmap & bit) === 0
    ? notSetValue
    : this.nodes[popCount(bitmap & (bit - 1))].get(
        shift + SHIFT,
        keyHash,
        key,
        notSetValue
      );
};

BitmapIndexedNode.prototype.update = function update$$1 (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var bit = 1 << keyHashFrag;
  var bitmap = this.bitmap;
  var exists = (bitmap & bit) !== 0;

  if (!exists && value === NOT_SET) {
    return this;
  }

  var idx = popCount(bitmap & (bit - 1));
  var nodes = this.nodes;
  var node = exists ? nodes[idx] : undefined;
  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );

  if (newNode === node) {
    return this;
  }

  if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
    return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
  }

  if (
    exists &&
    !newNode &&
    nodes.length === 2 &&
    isLeafNode(nodes[idx ^ 1])
  ) {
    return nodes[idx ^ 1];
  }

  if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
    return newNode;
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newBitmap = exists ? (newNode ? bitmap : bitmap ^ bit) : bitmap | bit;
  var newNodes = exists
    ? newNode
      ? setAt(nodes, idx, newNode, isEditable)
      : spliceOut(nodes, idx, isEditable)
    : spliceIn(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.bitmap = newBitmap;
    this.nodes = newNodes;
    return this;
  }

  return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
};

var HashArrayMapNode = function HashArrayMapNode(ownerID, count, nodes) {
  this.ownerID = ownerID;
  this.count = count;
  this.nodes = nodes;
};

HashArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var node = this.nodes[idx];
  return node
    ? node.get(shift + SHIFT, keyHash, key, notSetValue)
    : notSetValue;
};

HashArrayMapNode.prototype.update = function update$$1 (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var removed = value === NOT_SET;
  var nodes = this.nodes;
  var node = nodes[idx];

  if (removed && !node) {
    return this;
  }

  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }

  var newCount = this.count;
  if (!node) {
    newCount++;
  } else if (!newNode) {
    newCount--;
    if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
      return packNodes(ownerID, nodes, newCount, idx);
    }
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newNodes = setAt(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.count = newCount;
    this.nodes = newNodes;
    return this;
  }

  return new HashArrayMapNode(ownerID, newCount, newNodes);
};

var HashCollisionNode = function HashCollisionNode(ownerID, keyHash, entries) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entries = entries;
};

HashCollisionNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

HashCollisionNode.prototype.update = function update$$1 (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var removed = value === NOT_SET;

  if (keyHash !== this.keyHash) {
    if (removed) {
      return this;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
  }

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && len === 2) {
    return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new HashCollisionNode(ownerID, this.keyHash, newEntries);
};

var ValueNode = function ValueNode(ownerID, keyHash, entry) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entry = entry;
};

ValueNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
};

ValueNode.prototype.update = function update$$1 (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var keyMatch = is(key, this.entry[0]);
  if (keyMatch ? value === this.entry[1] : removed) {
    return this;
  }

  SetRef(didAlter);

  if (removed) {
    SetRef(didChangeSize);
    return; // undefined
  }

  if (keyMatch) {
    if (ownerID && ownerID === this.ownerID) {
      this.entry[1] = value;
      return this;
    }
    return new ValueNode(ownerID, this.keyHash, [key, value]);
  }

  SetRef(didChangeSize);
  return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
};

// #pragma Iterators

ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(
  fn,
  reverse
) {
  var entries = this.entries;
  for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
    if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
      return false;
    }
  }
};

BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(
  fn,
  reverse
) {
  var nodes = this.nodes;
  for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
    var node = nodes[reverse ? maxIndex - ii : ii];
    if (node && node.iterate(fn, reverse) === false) {
      return false;
    }
  }
};

// eslint-disable-next-line no-unused-vars
ValueNode.prototype.iterate = function(fn, reverse) {
  return fn(this.entry);
};

var MapIterator = (function (Iterator$$1) {
  function MapIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame(map._root);
  }

  if ( Iterator$$1 ) MapIterator.__proto__ = Iterator$$1;
  MapIterator.prototype = Object.create( Iterator$$1 && Iterator$$1.prototype );
  MapIterator.prototype.constructor = MapIterator;

  MapIterator.prototype.next = function next () {
    var this$1 = this;

    var type = this._type;
    var stack = this._stack;
    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex = (void 0);
      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;
        if (index <= maxIndex) {
          return mapIteratorValue(
            type,
            node.entries[this$1._reverse ? maxIndex - index : index]
          );
        }
      } else {
        maxIndex = node.nodes.length - 1;
        if (index <= maxIndex) {
          var subNode = node.nodes[this$1._reverse ? maxIndex - index : index];
          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }
            stack = this$1._stack = mapIteratorFrame(subNode, stack);
          }
          continue;
        }
      }
      stack = this$1._stack = this$1._stack.__prev;
    }
    return iteratorDone();
  };

  return MapIterator;
}(Iterator));

function mapIteratorValue(type, entry) {
  return iteratorValue(type, entry[0], entry[1]);
}

function mapIteratorFrame(node, prev) {
  return {
    node: node,
    index: 0,
    __prev: prev,
  };
}

function makeMap(size, root, ownerID, hash$$1) {
  var map = Object.create(MapPrototype);
  map.size = size;
  map._root = root;
  map.__ownerID = ownerID;
  map.__hash = hash$$1;
  map.__altered = false;
  return map;
}

var EMPTY_MAP;
function emptyMap() {
  return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}

function updateMap(map, k, v) {
  var newRoot;
  var newSize;
  if (!map._root) {
    if (v === NOT_SET) {
      return map;
    }
    newSize = 1;
    newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
  } else {
    var didChangeSize = MakeRef();
    var didAlter = MakeRef();
    newRoot = updateNode(
      map._root,
      map.__ownerID,
      0,
      undefined,
      k,
      v,
      didChangeSize,
      didAlter
    );
    if (!GetRef(didAlter)) {
      return map;
    }
    newSize = map.size + (GetRef(didChangeSize) ? (v === NOT_SET ? -1 : 1) : 0);
  }
  if (map.__ownerID) {
    map.size = newSize;
    map._root = newRoot;
    map.__hash = undefined;
    map.__altered = true;
    return map;
  }
  return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}

function updateNode(
  node,
  ownerID,
  shift,
  keyHash,
  key,
  value,
  didChangeSize,
  didAlter
) {
  if (!node) {
    if (value === NOT_SET) {
      return node;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return new ValueNode(ownerID, keyHash, [key, value]);
  }
  return node.update(
    ownerID,
    shift,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
}

function isLeafNode(node) {
  return (
    node.constructor === ValueNode || node.constructor === HashCollisionNode
  );
}

function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
  if (node.keyHash === keyHash) {
    return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
  }

  var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
  var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

  var newNode;
  var nodes =
    idx1 === idx2
      ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)]
      : ((newNode = new ValueNode(ownerID, keyHash, entry)),
        idx1 < idx2 ? [node, newNode] : [newNode, node]);

  return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
}

function createNodes(ownerID, entries, key, value) {
  if (!ownerID) {
    ownerID = new OwnerID();
  }
  var node = new ValueNode(ownerID, hash(key), [key, value]);
  for (var ii = 0; ii < entries.length; ii++) {
    var entry = entries[ii];
    node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
  }
  return node;
}

function packNodes(ownerID, nodes, count, excluding) {
  var bitmap = 0;
  var packedII = 0;
  var packedNodes = new Array(count);
  for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
    var node = nodes[ii];
    if (node !== undefined && ii !== excluding) {
      bitmap |= bit;
      packedNodes[packedII++] = node;
    }
  }
  return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}

function expandNodes(ownerID, nodes, bitmap, including, node) {
  var count = 0;
  var expandedNodes = new Array(SIZE);
  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
    expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
  }
  expandedNodes[including] = node;
  return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
}

function popCount(x) {
  x -= (x >> 1) & 0x55555555;
  x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
  x = (x + (x >> 4)) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
}

function setAt(array, idx, val, canEdit) {
  var newArray = canEdit ? array : arrCopy(array);
  newArray[idx] = val;
  return newArray;
}

function spliceIn(array, idx, val, canEdit) {
  var newLen = array.length + 1;
  if (canEdit && idx + 1 === newLen) {
    array[idx] = val;
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val;
      after = -1;
    } else {
      newArray[ii] = array[ii + after];
    }
  }
  return newArray;
}

function spliceOut(array, idx, canEdit) {
  var newLen = array.length - 1;
  if (canEdit && idx === newLen) {
    array.pop();
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1;
    }
    newArray[ii] = array[ii + after];
  }
  return newArray;
}

var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

var IS_LIST_SYMBOL = '@@__IMMUTABLE_LIST__@@';

function isList(maybeList) {
  return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}

var List = (function (IndexedCollection$$1) {
  function List(value) {
    var empty = emptyList();
    if (value === null || value === undefined) {
      return empty;
    }
    if (isList(value)) {
      return value;
    }
    var iter = IndexedCollection$$1(value);
    var size = iter.size;
    if (size === 0) {
      return empty;
    }
    assertNotInfinite(size);
    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }
    return empty.withMutations(function (list) {
      list.setSize(size);
      iter.forEach(function (v, i) { return list.set(i, v); });
    });
  }

  if ( IndexedCollection$$1 ) List.__proto__ = IndexedCollection$$1;
  List.prototype = Object.create( IndexedCollection$$1 && IndexedCollection$$1.prototype );
  List.prototype.constructor = List;

  List.of = function of (/*...values*/) {
    return this(arguments);
  };

  List.prototype.toString = function toString () {
    return this.__toString('List [', ']');
  };

  // @pragma Access

  List.prototype.get = function get (index, notSetValue) {
    index = wrapIndex(this, index);
    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }
    return notSetValue;
  };

  // @pragma Modification

  List.prototype.set = function set (index, value) {
    return updateList(this, index, value);
  };

  List.prototype.remove = function remove (index) {
    return !this.has(index)
      ? this
      : index === 0
        ? this.shift()
        : index === this.size - 1 ? this.pop() : this.splice(index, 1);
  };

  List.prototype.insert = function insert (index, value) {
    return this.splice(index, 0, value);
  };

  List.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyList();
  };

  List.prototype.push = function push (/*...values*/) {
    var values = arguments;
    var oldSize = this.size;
    return this.withMutations(function (list) {
      setListBounds(list, 0, oldSize + values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(oldSize + ii, values[ii]);
      }
    });
  };

  List.prototype.pop = function pop () {
    return setListBounds(this, 0, -1);
  };

  List.prototype.unshift = function unshift (/*...values*/) {
    var values = arguments;
    return this.withMutations(function (list) {
      setListBounds(list, -values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(ii, values[ii]);
      }
    });
  };

  List.prototype.shift = function shift () {
    return setListBounds(this, 1);
  };

  // @pragma Composition

  List.prototype.concat = function concat (/*...collections*/) {
    var arguments$1 = arguments;

    var seqs = [];
    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments$1[i];
      var seq = IndexedCollection$$1(
        typeof argument !== 'string' && hasIterator(argument)
          ? argument
          : [argument]
      );
      if (seq.size !== 0) {
        seqs.push(seq);
      }
    }
    if (seqs.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
      return this.constructor(seqs[0]);
    }
    return this.withMutations(function (list) {
      seqs.forEach(function (seq) { return seq.forEach(function (value) { return list.push(value); }); });
    });
  };

  List.prototype.setSize = function setSize (size) {
    return setListBounds(this, 0, size);
  };

  List.prototype.map = function map (mapper, context) {
    var this$1 = this;

    return this.withMutations(function (list) {
      for (var i = 0; i < this$1.size; i++) {
        list.set(i, mapper.call(context, list.get(i), i, list));
      }
    });
  };

  // @pragma Iteration

  List.prototype.slice = function slice (begin, end) {
    var size = this.size;
    if (wholeSlice(begin, end, size)) {
      return this;
    }
    return setListBounds(
      this,
      resolveBegin(begin, size),
      resolveEnd(end, size)
    );
  };

  List.prototype.__iterator = function __iterator (type, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    return new Iterator(function () {
      var value = values();
      return value === DONE
        ? iteratorDone()
        : iteratorValue(type, reverse ? --index : index++, value);
    });
  };

  List.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    var value;
    while ((value = values()) !== DONE) {
      if (fn(value, reverse ? --index : index++, this$1) === false) {
        break;
      }
    }
    return index;
  };

  List.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyList();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeList(
      this._origin,
      this._capacity,
      this._level,
      this._root,
      this._tail,
      ownerID,
      this.__hash
    );
  };

  return List;
}(IndexedCollection));

List.isList = isList;

var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn$$1;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update$$1;
ListPrototype.updateIn = updateIn$1;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype['@@transducer/init'] = ListPrototype.asMutable = asMutable;
ListPrototype['@@transducer/step'] = function(result, arr) {
  return result.push(arr);
};
ListPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

var VNode = function VNode(array, ownerID) {
  this.array = array;
  this.ownerID = ownerID;
};

// TODO: seems like these methods are very similar

VNode.prototype.removeBefore = function removeBefore (ownerID, level, index) {
  if (index === level ? 1 << level : 0 || this.array.length === 0) {
    return this;
  }
  var originIndex = (index >>> level) & MASK;
  if (originIndex >= this.array.length) {
    return new VNode([], ownerID);
  }
  var removingFirst = originIndex === 0;
  var newChild;
  if (level > 0) {
    var oldChild = this.array[originIndex];
    newChild =
      oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
    if (newChild === oldChild && removingFirst) {
      return this;
    }
  }
  if (removingFirst && !newChild) {
    return this;
  }
  var editable = editableVNode(this, ownerID);
  if (!removingFirst) {
    for (var ii = 0; ii < originIndex; ii++) {
      editable.array[ii] = undefined;
    }
  }
  if (newChild) {
    editable.array[originIndex] = newChild;
  }
  return editable;
};

VNode.prototype.removeAfter = function removeAfter (ownerID, level, index) {
  if (index === (level ? 1 << level : 0) || this.array.length === 0) {
    return this;
  }
  var sizeIndex = ((index - 1) >>> level) & MASK;
  if (sizeIndex >= this.array.length) {
    return this;
  }

  var newChild;
  if (level > 0) {
    var oldChild = this.array[sizeIndex];
    newChild =
      oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
    if (newChild === oldChild && sizeIndex === this.array.length - 1) {
      return this;
    }
  }

  var editable = editableVNode(this, ownerID);
  editable.array.splice(sizeIndex + 1);
  if (newChild) {
    editable.array[sizeIndex] = newChild;
  }
  return editable;
};

var DONE = {};

function iterateList(list, reverse) {
  var left = list._origin;
  var right = list._capacity;
  var tailPos = getTailOffset(right);
  var tail = list._tail;

  return iterateNodeOrLeaf(list._root, list._level, 0);

  function iterateNodeOrLeaf(node, level, offset) {
    return level === 0
      ? iterateLeaf(node, offset)
      : iterateNode(node, level, offset);
  }

  function iterateLeaf(node, offset) {
    var array = offset === tailPos ? tail && tail.array : node && node.array;
    var from = offset > left ? 0 : left - offset;
    var to = right - offset;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      if (from === to) {
        return DONE;
      }
      var idx = reverse ? --to : from++;
      return array && array[idx];
    };
  }

  function iterateNode(node, level, offset) {
    var values;
    var array = node && node.array;
    var from = offset > left ? 0 : (left - offset) >> level;
    var to = ((right - offset) >> level) + 1;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      while (true) {
        if (values) {
          var value = values();
          if (value !== DONE) {
            return value;
          }
          values = null;
        }
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        values = iterateNodeOrLeaf(
          array && array[idx],
          level - SHIFT,
          offset + (idx << level)
        );
      }
    };
  }
}

function makeList(origin, capacity, level, root, tail, ownerID, hash) {
  var list = Object.create(ListPrototype);
  list.size = capacity - origin;
  list._origin = origin;
  list._capacity = capacity;
  list._level = level;
  list._root = root;
  list._tail = tail;
  list.__ownerID = ownerID;
  list.__hash = hash;
  list.__altered = false;
  return list;
}

var EMPTY_LIST;
function emptyList() {
  return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}

function updateList(list, index, value) {
  index = wrapIndex(list, index);

  if (index !== index) {
    return list;
  }

  if (index >= list.size || index < 0) {
    return list.withMutations(function (list) {
      index < 0
        ? setListBounds(list, index).set(0, value)
        : setListBounds(list, 0, index + 1).set(index, value);
    });
  }

  index += list._origin;

  var newTail = list._tail;
  var newRoot = list._root;
  var didAlter = MakeRef();
  if (index >= getTailOffset(list._capacity)) {
    newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
  } else {
    newRoot = updateVNode(
      newRoot,
      list.__ownerID,
      list._level,
      index,
      value,
      didAlter
    );
  }

  if (!GetRef(didAlter)) {
    return list;
  }

  if (list.__ownerID) {
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
}

function updateVNode(node, ownerID, level, index, value, didAlter) {
  var idx = (index >>> level) & MASK;
  var nodeHas = node && idx < node.array.length;
  if (!nodeHas && value === undefined) {
    return node;
  }

  var newNode;

  if (level > 0) {
    var lowerNode = node && node.array[idx];
    var newLowerNode = updateVNode(
      lowerNode,
      ownerID,
      level - SHIFT,
      index,
      value,
      didAlter
    );
    if (newLowerNode === lowerNode) {
      return node;
    }
    newNode = editableVNode(node, ownerID);
    newNode.array[idx] = newLowerNode;
    return newNode;
  }

  if (nodeHas && node.array[idx] === value) {
    return node;
  }

  if (didAlter) {
    SetRef(didAlter);
  }

  newNode = editableVNode(node, ownerID);
  if (value === undefined && idx === newNode.array.length - 1) {
    newNode.array.pop();
  } else {
    newNode.array[idx] = value;
  }
  return newNode;
}

function editableVNode(node, ownerID) {
  if (ownerID && node && ownerID === node.ownerID) {
    return node;
  }
  return new VNode(node ? node.array.slice() : [], ownerID);
}

function listNodeFor(list, rawIndex) {
  if (rawIndex >= getTailOffset(list._capacity)) {
    return list._tail;
  }
  if (rawIndex < 1 << (list._level + SHIFT)) {
    var node = list._root;
    var level = list._level;
    while (node && level > 0) {
      node = node.array[(rawIndex >>> level) & MASK];
      level -= SHIFT;
    }
    return node;
  }
}

function setListBounds(list, begin, end) {
  // Sanitize begin & end using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  if (begin !== undefined) {
    begin |= 0;
  }
  if (end !== undefined) {
    end |= 0;
  }
  var owner = list.__ownerID || new OwnerID();
  var oldOrigin = list._origin;
  var oldCapacity = list._capacity;
  var newOrigin = oldOrigin + begin;
  var newCapacity =
    end === undefined
      ? oldCapacity
      : end < 0 ? oldCapacity + end : oldOrigin + end;
  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
    return list;
  }

  // If it's going to end after it starts, it's empty.
  if (newOrigin >= newCapacity) {
    return list.clear();
  }

  var newLevel = list._level;
  var newRoot = list._root;

  // New origin might need creating a higher root.
  var offsetShift = 0;
  while (newOrigin + offsetShift < 0) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [undefined, newRoot] : [],
      owner
    );
    newLevel += SHIFT;
    offsetShift += 1 << newLevel;
  }
  if (offsetShift) {
    newOrigin += offsetShift;
    oldOrigin += offsetShift;
    newCapacity += offsetShift;
    oldCapacity += offsetShift;
  }

  var oldTailOffset = getTailOffset(oldCapacity);
  var newTailOffset = getTailOffset(newCapacity);

  // New size might need creating a higher root.
  while (newTailOffset >= 1 << (newLevel + SHIFT)) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [newRoot] : [],
      owner
    );
    newLevel += SHIFT;
  }

  // Locate or create the new tail.
  var oldTail = list._tail;
  var newTail =
    newTailOffset < oldTailOffset
      ? listNodeFor(list, newCapacity - 1)
      : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

  // Merge Tail into tree.
  if (
    oldTail &&
    newTailOffset > oldTailOffset &&
    newOrigin < oldCapacity &&
    oldTail.array.length
  ) {
    newRoot = editableVNode(newRoot, owner);
    var node = newRoot;
    for (var level = newLevel; level > SHIFT; level -= SHIFT) {
      var idx = (oldTailOffset >>> level) & MASK;
      node = node.array[idx] = editableVNode(node.array[idx], owner);
    }
    node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
  }

  // If the size has been reduced, there's a chance the tail needs to be trimmed.
  if (newCapacity < oldCapacity) {
    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
  }

  // If the new origin is within the tail, then we do not need a root.
  if (newOrigin >= newTailOffset) {
    newOrigin -= newTailOffset;
    newCapacity -= newTailOffset;
    newLevel = SHIFT;
    newRoot = null;
    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
    offsetShift = 0;

    // Identify the new top root node of the subtree of the old root.
    while (newRoot) {
      var beginIndex = (newOrigin >>> newLevel) & MASK;
      if ((beginIndex !== newTailOffset >>> newLevel) & MASK) {
        break;
      }
      if (beginIndex) {
        offsetShift += (1 << newLevel) * beginIndex;
      }
      newLevel -= SHIFT;
      newRoot = newRoot.array[beginIndex];
    }

    // Trim the new sides of the new root.
    if (newRoot && newOrigin > oldOrigin) {
      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
    }
    if (newRoot && newTailOffset < oldTailOffset) {
      newRoot = newRoot.removeAfter(
        owner,
        newLevel,
        newTailOffset - offsetShift
      );
    }
    if (offsetShift) {
      newOrigin -= offsetShift;
      newCapacity -= offsetShift;
    }
  }

  if (list.__ownerID) {
    list.size = newCapacity - newOrigin;
    list._origin = newOrigin;
    list._capacity = newCapacity;
    list._level = newLevel;
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}

function getTailOffset(size) {
  return size < SIZE ? 0 : ((size - 1) >>> SHIFT) << SHIFT;
}

var OrderedMap = (function (Map$$1) {
  function OrderedMap(value) {
    return value === null || value === undefined
      ? emptyOrderedMap()
      : isOrderedMap(value)
        ? value
        : emptyOrderedMap().withMutations(function (map) {
            var iter = KeyedCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v, k) { return map.set(k, v); });
          });
  }

  if ( Map$$1 ) OrderedMap.__proto__ = Map$$1;
  OrderedMap.prototype = Object.create( Map$$1 && Map$$1.prototype );
  OrderedMap.prototype.constructor = OrderedMap;

  OrderedMap.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedMap.prototype.toString = function toString () {
    return this.__toString('OrderedMap {', '}');
  };

  // @pragma Access

  OrderedMap.prototype.get = function get (k, notSetValue) {
    var index = this._map.get(k);
    return index !== undefined ? this._list.get(index)[1] : notSetValue;
  };

  // @pragma Modification

  OrderedMap.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._map.clear();
      this._list.clear();
      return this;
    }
    return emptyOrderedMap();
  };

  OrderedMap.prototype.set = function set (k, v) {
    return updateOrderedMap(this, k, v);
  };

  OrderedMap.prototype.remove = function remove (k) {
    return updateOrderedMap(this, k, NOT_SET);
  };

  OrderedMap.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered() || this._list.wasAltered();
  };

  OrderedMap.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._list.__iterate(
      function (entry) { return entry && fn(entry[1], entry[0], this$1); },
      reverse
    );
  };

  OrderedMap.prototype.__iterator = function __iterator (type, reverse) {
    return this._list.fromEntrySeq().__iterator(type, reverse);
  };

  OrderedMap.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    var newList = this._list.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return emptyOrderedMap();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      this._list = newList;
      return this;
    }
    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  };

  return OrderedMap;
}(Map));

OrderedMap.isOrderedMap = isOrderedMap;

OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;

function makeOrderedMap(map, list, ownerID, hash) {
  var omap = Object.create(OrderedMap.prototype);
  omap.size = map ? map.size : 0;
  omap._map = map;
  omap._list = list;
  omap.__ownerID = ownerID;
  omap.__hash = hash;
  return omap;
}

var EMPTY_ORDERED_MAP;
function emptyOrderedMap() {
  return (
    EMPTY_ORDERED_MAP ||
    (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()))
  );
}

function updateOrderedMap(omap, k, v) {
  var map = omap._map;
  var list = omap._list;
  var i = map.get(k);
  var has = i !== undefined;
  var newMap;
  var newList;
  if (v === NOT_SET) {
    // removed
    if (!has) {
      return omap;
    }
    if (list.size >= SIZE && list.size >= map.size * 2) {
      newList = list.filter(function (entry, idx) { return entry !== undefined && i !== idx; });
      newMap = newList
        .toKeyedSeq()
        .map(function (entry) { return entry[0]; })
        .flip()
        .toMap();
      if (omap.__ownerID) {
        newMap.__ownerID = newList.__ownerID = omap.__ownerID;
      }
    } else {
      newMap = map.remove(k);
      newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
    }
  } else if (has) {
    if (v === list.get(i)[1]) {
      return omap;
    }
    newMap = map;
    newList = list.set(i, [k, v]);
  } else {
    newMap = map.set(k, list.size);
    newList = list.set(list.size, [k, v]);
  }
  if (omap.__ownerID) {
    omap.size = newMap.size;
    omap._map = newMap;
    omap._list = newList;
    omap.__hash = undefined;
    return omap;
  }
  return makeOrderedMap(newMap, newList);
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function isSortedMap(maybeSortedMap) {
  return isMap(maybeSortedMap) && isSorted(maybeSortedMap);
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * Original source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var SortedMapNode = function SortedMapNode(comparator, options, ownerID) {
  this.comparator = comparator;
  this.options = options;
  this.ownerID = ownerID;
};

SortedMapNode.prototype.getComparator = function getComparator () {};
// eslint-disable-next-lineno-unused-vars
SortedMapNode.prototype.get = function get (key, notSetValue) {};
// eslint-disable-next-lineno-unused-vars
SortedMapNode.prototype.upsert = function upsert (ownerID, key, value, didChangeSize, didAlter) {};
// eslint-disable-next-lineno-unused-vars
SortedMapNode.prototype.remove = function remove (ownerID, key, didChangeSize, didAlter) {};
// eslint-disable-next-lineno-unused-vars
SortedMapNode.prototype.fastRemove = function fastRemove (ownerID, key, didChangeSize, didAlter) {};
// eslint-disable-next-lineno-unused-vars
SortedMapNode.prototype.iterate = function iterate (fn, reverse) {};
// eslint-disable-next-lineno-unused-vars
SortedMapNode.prototype.print = function print (level, maxDepth) {};
// eslint-disable-next-lineno-unused-vars
SortedMapNode.prototype.checkConsistency = function checkConsistency (printFlag) {};

var SortedMapPacker = function SortedMapPacker () {};

SortedMapPacker.prototype.pack = function pack (comparator, options, ownerID, collection) {};

var SortedMapNodeFactory = function SortedMapNodeFactory () {};

SortedMapNodeFactory.prototype.createNode = function createNode (comparator, options, ownerID, entries, nodes) {};
SortedMapNodeFactory.prototype.createPacker = function createPacker () {};
// eslint-disable-next-lineno-unused-vars
SortedMapNodeFactory.prototype.createIterator = function createIterator (map, type, reverse) {};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * Original source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-else-return */

var DEFAULT_TYPE = 'btree';
var DEFAULT_BTREE_ORDER = 33;

// #pragma Trie Nodes

var SortedMapBtreeNode = (function (SortedMapNode$$1) {
  function SortedMapBtreeNode(comparator, options, ownerID, entries, nodes) {
    SortedMapNode$$1.call(this, comparator, options, ownerID);

    this.entries = entries;
    this.nodes = nodes;

    this.btreeOrder =
      options && options.btreeOrder ? options.btreeOrder : DEFAULT_BTREE_ORDER;
    this.btreeNodeSplitSize = Math.floor((this.btreeOrder - 1) / 2);

    this._calcSize();
    return this;
  }

  if ( SortedMapNode$$1 ) SortedMapBtreeNode.__proto__ = SortedMapNode$$1;
  SortedMapBtreeNode.prototype = Object.create( SortedMapNode$$1 && SortedMapNode$$1.prototype );
  SortedMapBtreeNode.prototype.constructor = SortedMapBtreeNode;

  SortedMapBtreeNode.prototype._calcSize = function _calcSize () {
    var this$1 = this;

    this.size = 0;
    for (var i = 0; i < this.entries.length; i++) {
      if (this$1.entries[i][1] !== NOT_SET) {
        this$1.size++;
      }
    }
    if (this.nodes) {
      for (var i$1 = 0; i$1 < this.nodes.length; i$1++) {
        this$1.size += this$1.nodes[i$1].size;
      }
    }
  };

  SortedMapBtreeNode.prototype.getComparator = function getComparator () {
    return this.comparator;
  };

  SortedMapBtreeNode.prototype.get = function get (key, notSetValue) {
    var entries = this.entries;
    var didMatch = MakeRef();
    var idx = binarySearch(this.comparator, entries, key, didMatch);
    if (GetRef(didMatch)) {
      var value = entries[idx][1];
      return value === NOT_SET ? notSetValue : value;
    }

    var nodes = this.nodes;
    if (nodes) {
      var value$1 = nodes[idx].get(key, notSetValue);
      return value$1 === NOT_SET ? notSetValue : value$1;
    }
    return notSetValue;
  };

  SortedMapBtreeNode.prototype.entryAt = function entryAt (index) {
    var didMatch = MakeRef();
    var subIndex = MakeRef();
    var idx = this.indexSearch(index, didMatch, subIndex);
    if (GetRef(didMatch)) {
      var entry = this.entries[idx];
      var key = entry[0];
      var value = entry[1];
      return [key, value];
    }

    return this.nodes[idx].entryAt(subIndex.value);
  };

  SortedMapBtreeNode.prototype.keyAt = function keyAt (index) {
    var didMatch = MakeRef();
    var subIndex = MakeRef();
    var idx = this.indexSearch(index, didMatch, subIndex);
    if (GetRef(didMatch)) {
      var entry = this.entries[idx];
      var key = entry[0];
      return key;
    }

    return this.nodes[idx].keyAt(subIndex.value);
  };

  SortedMapBtreeNode.prototype.valueAt = function valueAt (index) {
    var didMatch = MakeRef();
    var subIndex = MakeRef();
    var idx = this.indexSearch(index, didMatch, subIndex);
    if (GetRef(didMatch)) {
      var entry = this.entries[idx];
      var value = entry[1];
      return value;
    }

    return this.nodes[idx].valueAt(subIndex.value);
  };

  // Returns first key in this subtree
  SortedMapBtreeNode.prototype.firstKey = function firstKey () {
    var nodes = this.nodes;
    if (nodes) {
      return nodes[0].firstKey();
    }

    var entries = this.entries;
    return entries[0][0];
  };

  // Returns last key in this subtree
  SortedMapBtreeNode.prototype.lastKey = function lastKey () {
    var nodes = this.nodes;
    if (nodes) {
      return nodes[nodes.length - 1].lastKey();
    }

    var entries = this.entries;
    return entries[entries.length - 1][0];
  };

  SortedMapBtreeNode.prototype.upsert = function upsert (ownerID, key, value, didChangeSize, didAlter, outKvn) {
    var ret = this._upsert(
      ownerID,
      key,
      value,
      didChangeSize,
      didAlter,
      outKvn
    );

    if (this === ret && GetRef(didChangeSize)) {
      this.size++;
    }

    return ret;
  };

  //
  // outKvn is out array with values [[key, value], node] i.e. [entry, node]
  // which can be consumed or returned by this operation
  //
  SortedMapBtreeNode.prototype._upsert = function _upsert (ownerID, key, value, didChangeSize, didAlter, outKvn) {
    if (!outKvn) {
      // This must be a root case called from SortedMap
      var subKvn = [];

      var newRoot = this.upsert(
        ownerID,
        key,
        value,
        didChangeSize,
        didAlter,
        subKvn
      );

      if (subKvn[0]) {
        // Make a new root node
        var entries$1 = [subKvn[0]];
        var nodes$1 = [newRoot, subKvn[1]];
        newRoot = new SortedMapBtreeNode(
          this.comparator,
          this.options,
          ownerID,
          entries$1,
          nodes$1
        );
      }

      return newRoot;
    }

    var entries = this.entries;

    // Search keys
    var didMatch = MakeRef();
    var idx = binarySearch(this.comparator, entries, key, didMatch);
    var exists = GetRef(didMatch);

    var nodes = this.nodes;
    var canEdit = ownerID && ownerID === this.ownerID;
    var newEntries;
    var newNodes;

    if (exists) {
      // Updating entries

      if (entries[idx][1] === value) {
        //
        // OPERATION: NONE, same value, no need to update
        //
        return this;
      } else {
        //
        // OPERATION: UPDATE entry value in entries
        //
        var entry = [key, value];

        SetRef(didAlter);
        // Updating previously REMOVED ENTRY
        if (entries[idx][1] === NOT_SET) {
          SetRef(didChangeSize);
        }
        newEntries = setIn$2(entries, idx, entry, canEdit);
        newNodes = clone(nodes, canEdit);
      }
    } else {
      // Inserting into entries or upserting nodes

      // eslint-disable-next-line no-lonely-if
      if (nodes) {
        //
        // RECURSIVE: UPSERT node recursively
        //
        var subKvn$1 = [];

        var updatedNode = nodes[idx].upsert(
          ownerID,
          key,
          value,
          didChangeSize,
          didAlter,
          subKvn$1
        );

        if (GetRef(didAlter)) {
          if (subKvn$1[0]) {
            //
            // Insert subKvn into this node
            //
            if (entries.length >= this.btreeOrder - 1) {
              return this.splitNode(
                idx,
                updatedNode,
                subKvn$1,
                outKvn,
                ownerID,
                canEdit
              );
            } else {
              //
              // Insert subKvn into entries and nodes
              //
              newEntries = spliceIn$1(entries, idx, subKvn$1[0], canEdit);
              newNodes = spliceIn$1(nodes, idx + 1, subKvn$1[1], canEdit);
              newNodes[idx] = updatedNode;
            }
          } else {
            //
            // No splitting, just setIn the updated subNode
            //
            newEntries = clone(entries, canEdit);
            newNodes = setIn$2(nodes, idx, updatedNode, canEdit);
          }
        } else {
          // Nothing changed
          return this;
        }
      } else {
        // Leaf node
        // Insert new entry into entries
        var entry$1 = [key, value];

        SetRef(didAlter);
        SetRef(didChangeSize);

        if (entries.length >= this.btreeOrder - 1) {
          return this.splitLeaf(idx, entry$1, outKvn, ownerID, canEdit);
        } else {
          //
          // OPERATION: INSERT new entry into entries
          //
          newEntries = spliceIn$1(entries, idx, entry$1, canEdit);
        }
      }
    }

    return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
  };

  SortedMapBtreeNode.prototype.fastRemove = function fastRemove (ownerID, key, didChangeSize, didAlter) {
    var ret = this._fastRemove(ownerID, key, didChangeSize, didAlter);

    if (this === ret && GetRef(didChangeSize)) {
      this.size--;
    }

    return ret;
  };

  // this version of remove doesn't do any rebalancing
  // it just sets the value in an entry to NOT_SET
  // this method would be preferable when removing large bulk
  // of entres from mutable SortedMap followed by pack()
  SortedMapBtreeNode.prototype._fastRemove = function _fastRemove (ownerID, key, didChangeSize, didAlter) {
    var entries = this.entries;

    // Search keys
    var didMatch = MakeRef();
    var idx = binarySearch(this.comparator, entries, key, didMatch);
    var exists = GetRef(didMatch);

    var nodes = this.nodes;
    var canEdit = ownerID && ownerID === this.ownerID;
    var newEntries;
    var newNodes;

    if (exists) {
      // Remove entry from entries
      if (entries[idx][1] === NOT_SET) {
        // the entry has been technically deleted already
        return this;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      var newEntry = [key, NOT_SET];
      newEntries = setIn$2(entries, idx, newEntry, canEdit);
      newNodes = clone(nodes, canEdit);
    } else {
      // Remove from node

      // eslint-disable-next-line no-lonely-if
      if (nodes) {
        // RECURSIVE: REMOVE from node recursively
        var updatedNode = nodes[idx].fastRemove(
          ownerID,
          key,
          didChangeSize,
          didAlter
        );

        if (GetRef(didAlter)) {
          //
          // No splitting, just setIn the updated subNode
          //
          newEntries = clone(entries, canEdit);
          newNodes = setIn$2(nodes, idx, updatedNode, canEdit);
        } else {
          // Nothing changed
          return this;
        }
      } else {
        // OPERATION: NONE, key to be removed doesn't exist
        return this;
      }
    }

    return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
  };

  SortedMapBtreeNode.prototype.remove = function remove (ownerID, key, didChangeSize, didAlter, parent, parentIdx, outKvn) {
    var ret = this._remove(
      ownerID,
      key,
      didChangeSize,
      didAlter,
      parent,
      parentIdx,
      outKvn
    );

    if (this === ret && GetRef(didChangeSize)) {
      this.size--;
    }

    return ret;
  };

  //
  // outKvn is an output array with the following format
  //
  // [updatedEntry, updatedNode, updatedNodeIsLeft: boolean]
  //
  // The returned values can be:
  // - undefined - means the referenced item didn't change
  // - NOT_SET - means the referenced node was merged and has to be removed
  // - any other - the referenced item has to be updated with this value
  // outKvn[2] is boolean value indicating if node referenced in outKvnp[1]
  // is left (true) or right (false)
  //
  SortedMapBtreeNode.prototype._remove = function _remove (ownerID, key, didChangeSize, didAlter, parent, parentIdx, outKvn) {
    var entries = this.entries;

    // Search keys
    var didMatch = MakeRef();
    var idx = binarySearch(this.comparator, entries, key, didMatch);
    var exists = GetRef(didMatch);

    var nodes = this.nodes;
    var canEdit = ownerID && ownerID === this.ownerID;
    var newEntries;
    var newNodes;

    if (exists) {
      // Remove entry from entries
      if (nodes) {
        // OPERATION: MOVE some entries from neighbors or MERGE with a neighbor
        if (entries[idx][1] === NOT_SET) {
          // the entry has been technically deleted already
          return this;
        }
        // WORKAROUND: so far let's do the workaround and just update
        // the entry in place with NOT_SET
        SetRef(didAlter);
        SetRef(didChangeSize);
        var newEntry = [key, NOT_SET];
        newEntries = setIn$2(entries, idx, newEntry, canEdit);
        newNodes = clone(nodes, canEdit);
      } else {
        //
        // OPERATION: REMOVE entry from the LEAF
        //
        if (entries[idx][1] === NOT_SET) {
          // the entry has been technically deleted already
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        if (entries.length <= this.btreeNodeSplitSize && parent) {
          // we don't have enough items in this leaf to just remove the entry
          // we should try borrow an entry from a neighbour or merge this mode with a neighbour
          // as a workaround we can just update a value in the entry to NOT_SET
          return this.consolidateLeaf(
            ownerID,
            idx,
            parent,
            parentIdx,
            canEdit,
            outKvn
          );
        }
        // it's ok to physically remove from the LEAF and no moves are needed
        // as the node will meet all the consistency rules
        newEntries = spliceOut$1(entries, idx, canEdit);
      }
    } else {
      // Remove from node

      // eslint-disable-next-line no-lonely-if
      if (nodes) {
        // RECURSIVE: REMOVE from node recursively
        var subKvn = [undefined, undefined, undefined];
        var updatedNode = nodes[idx].remove(
          ownerID,
          key,
          didChangeSize,
          didAlter,
          this,
          idx,
          subKvn
        );

        if (GetRef(didAlter)) {
          // take care of subKvn
          return this.spliceNode(
            ownerID,
            idx,
            updatedNode,
            parent,
            parentIdx,
            canEdit,
            subKvn,
            outKvn
          );
        } else {
          // Nothing changed
          return this;
        }
      } else {
        // OPERATION: NONE, key to be removed doesn't exist in this map
        return this;
      }
    }

    return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
  };

  SortedMapBtreeNode.prototype.makeNewNode = function makeNewNode (newEntries, newNodes, ownerID, canEdit) {
    if (newEntries.length === 0) {
      if (newNodes) {
        // Root node is turning into a leaf
        return newNodes[0];
      } else {
        // Root node leaf is turning into empty
        return;
      }
    }

    if (canEdit) {
      this.entries = newEntries;
      this.nodes = newNodes;
      this._calcSize();
      return this;
    }
    return new SortedMapBtreeNode(
      this.comparator,
      this.options,
      ownerID,
      newEntries,
      newNodes
    );
  };

  SortedMapBtreeNode.prototype.print = function print (level, maxDepth) {
    function w(s) {
      process.stdout.write(s);
    }

    if (maxDepth && level >= maxDepth) {
      return;
    }

    var nodes = this.nodes;
    var entries = this.entries;

    w(indent(level));
    w('SIZE=' + this.size + '\n');
    if (nodes) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        w(indent(level));
        if (!node || !(node instanceof SortedMapNode$$1)) {
          w(
            '+ CORRUPT NODE[' +
              i +
              '] (L' +
              level +
              ') ' +
              JSON.stringify(node) +
              '\n'
          );
        } else {
          if (node.nodes) {
            w('+ NODE[' + i + '] (L' + level + ')\n');
          } else {
            w('+ LEAF[' + i + '] (L' + level + ')\n');
          }
          node.print(level + 1, maxDepth);
        }
        if (i < entries.length) {
          w(indent(level));
          var entry = entries[i];
          if (!entry) {
            w('- CORRUPT ENTRY[' + i + ']: ' + JSON.stringify(entry) + '\n');
          } else if (entry[1] === NOT_SET) {
            w('- REMOVED ENTRY[' + i + ']: ' + JSON.stringify(entry[0]) + '\n');
          } else {
            w('- ENTRY[' + i + ']: ' + JSON.stringify(entry[0]) + '\n');
          }
        }
      }
    } else {
      for (var i$1 = 0; i$1 < entries.length; i$1++) {
        w(indent(level));
        var entry$1 = entries[i$1];
        if (!entry$1) {
          w('- CORRUPT ENTRY[' + i$1 + ']: ' + JSON.stringify(entry$1) + '\n');
        } else if (entry$1[1] === NOT_SET) {
          w('- REMOVED ENTRY[' + i$1 + ']: ' + JSON.stringify(entry$1[0]) + '\n');
        } else {
          w('- ENTRY[' + i$1 + ']: ' + JSON.stringify(entry$1[0]) + '\n');
        }
      }
    }
  };

  SortedMapBtreeNode.prototype.checkConsistency = function checkConsistency (printFlag, level, n, leafLevel) {
    var this$1 = this;

    function w(f) {
      if (printFlag) {
        var s = f();
        if (s !== undefined) {
          process.stdout.write(indent(level));
          process.stdout.write(s);
        }
      }
    }

    if (!level) {
      level = 0;
    }
    if (!n) {
      n = 0;
    }
    if (!leafLevel) {
      leafLevel = [undefined];
    }

    if (this.nodes) {
      w(function () { return '+ Checking NODE[' + n + '] (L' + level + ')\n'; });
    } else {
      w(function () { return '+ Checking LEAF[' + n + '] (L' + level + ')\n'; });
      if (leafLevel[0] === undefined) {
        leafLevel[0] = level;
      } else if (leafLevel[0] !== level) {
        failed(112, 'leaves are not on the same level');
      }
    }

    function failed(code, msg) {
      var s = 'Consistency Check Failed with error code ' + code + ': ' + msg;
      if (printFlag) {
        w(function () { return s + '\n'; });
        return code;
      }

      throw new Error(s);
    }

    var entries = this.entries;
    var nodes = this.nodes;

    if (!entries) {
      return failed(101, 'empty entries in a node');
    }

    if (!(entries.length > 0 && entries.length < this.btreeOrder)) {
      return failed(
        102,
        'entries length is out of range from 0 to (btreeOrder-1)'
      );
    }

    if (level > 0 && !(this.btreeNodeSplitSize <= entries.length)) {
      return failed(103, 'entries length is shorter than btreeNodeSplitSize');
    }

    if (nodes && !(nodes.length === entries.length + 1)) {
      return failed(104, 'nodes length out of sync with entries length');
    }

    var loop = function ( i ) {
      var entry = entries[i];

      if (!entry) { return { v: failed(105, 'empty entry') }; }

      if (!(typeof entry === 'object' && entry instanceof Array))
        { return { v: failed(106, 'entry is not Array') }; }

      if (!(entry.length === 2)) { return { v: failed(107, 'entry is not Array[2]') }; }

      if (entry[1] === NOT_SET) {
        w(
          function () { return '    - Checking REMOVED ENTRY[' +
            i +
            ']: ' +
            JSON.stringify(entry[0]) +
            '\n'; }
        );
        if (!nodes) {
          failed(113, 'NOT_SET values are not allowed in leaves');
        }
      } else {
        w(
          function () { return '    - Checking ENTRY[' +
            i +
            ']: ' +
            JSON.stringify(entry[0]) +
            '\n'; }
        );
      }
    };

    for (var i = 0; i < entries.length; i++) {
      var returned = loop( i );

      if ( returned ) return returned.v;
    }

    // Check if all the keys are sorted
    for (var i$1 = 0; i$1 < entries.length - 1; i$1++) {
      if (!(this$1.comparator(entries[i$1][0], entries[i$1 + 1][0]) < 0)) {
        return failed(108, 'the entries are not sorted');
      }
    }

    if (nodes)
      { for (var i$2 = 0; i$2 < nodes.length; i$2++) {
        var node = nodes[i$2];

        if (!node || !(node instanceof SortedMapNode$$1))
          { return failed(109, 'empty or corrupt node'); }

        // Check the node recursively
        var code = node.checkConsistency(printFlag, level + 1, i$2, leafLevel);

        if (code !== 0) {
          return code;
        }

        if (
          i$2 > 0 &&
          !(this$1.comparator(entries[i$2 - 1][0], node.firstKey()) < 0)
        ) {
          return failed(110, 'the entry and right node not sorted');
        }

        if (
          i$2 < entries.length &&
          !(this$1.comparator(node.lastKey(), entries[i$2][0]) < 0)
        ) {
          return failed(111, 'the entry and left node not sorted');
        }
      } }

    return 0;
  };

  return SortedMapBtreeNode;
}(SortedMapNode)); // class

// #pragma Iterators

SortedMapBtreeNode.prototype.iterate = function(fn, reverse) {
  var entries = this.entries;
  var nodes = this.nodes;

  if (nodes) {
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex + 1 - ii : ii];
      if (node.iterate(fn, reverse) === false) {
        return false;
      }
      var entry = entries[reverse ? maxIndex - ii : ii];
      if (entry[1] === NOT_SET) {
        continue;
      }
      if (fn(entry) === false) {
        return false;
      }
    }

    // Iterate through the remaining last node
    var node$1 = nodes[reverse ? 0 : nodes.length - 1];
    if (node$1.iterate(fn, reverse) === false) {
      return false;
    }
  } else {
    for (var ii$1 = 0, maxIndex$1 = entries.length - 1; ii$1 <= maxIndex$1; ii$1++) {
      var entry$1 = entries[reverse ? maxIndex$1 - ii$1 : ii$1];
      if (entry$1[1] === NOT_SET) {
        continue;
      }
      if (fn(entry$1) === false) {
        return false;
      }
    }
  }
  return true;
};

SortedMapBtreeNode.prototype.iterateFrom = function(from, fn, reverse) {
  var this$1 = this;

  if (reverse) {
    return this.iterate(function (entry) {
      if (this$1.comparator(from, entry[0]) <= 0) {
        return fn(entry);
      }
      return true;
    }, reverse);
  }

  var entries = this.entries;
  var nodes = this.nodes;

  var didMatch = MakeRef();
  var idx = binarySearch(this.comparator, entries, from, didMatch);

  if (nodes) {
    for (var ii = idx, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[ii];
      if (ii === idx && !GetRef(didMatch)) {
        if (node.iterateFrom(from, fn, reverse) === false) {
          return false;
        }
      } else if (ii > idx) {
        if (node.iterate(fn, reverse) === false) {
          return false;
        }
      }
      var entry = entries[ii];
      if (entry[1] === NOT_SET) {
        continue;
      }
      if (fn(entry) === false) {
        return false;
      }
    }

    // Iterate through the remaining last node
    var node$1 = nodes[nodes.length - 1];
    if (idx === nodes.length - 1) {
      if (node$1.iterateFrom(from, fn, reverse) === false) {
        return false;
      }
    } else if (node$1.iterate(fn, reverse) === false) {
      return false;
    }
  } else {
    for (var ii$1 = idx, maxIndex$1 = entries.length - 1; ii$1 <= maxIndex$1; ii$1++) {
      var entry$1 = entries[ii$1];
      if (entry$1[1] === NOT_SET) {
        continue;
      }
      if (fn(entry$1) === false) {
        return false;
      }
    }
  }
  return true;
};

SortedMapBtreeNode.prototype.iterateFromBackwards = function(
  from,
  fn,
  reverse
) {
  var this$1 = this;

  if (reverse) {
    return this.iterate(function (entry) {
      if (this$1.comparator(entry[0], from) <= 0) {
        return fn(entry);
      }
      return true;
    }, false);
  }

  var entries = this.entries;
  var nodes = this.nodes;

  var didMatch = MakeRef();
  var idx = binarySearch(this.comparator, entries, from, didMatch);

  if (nodes) {
    for (var ii = idx; ii >= 0; ii--) {
      if (ii < idx || GetRef(didMatch)) {
        var entry = entries[ii];
        if (entry[1] === NOT_SET) {
          continue;
        }
        if (fn(entry) === false) {
          return false;
        }
      }
      var node = nodes[ii];
      if (ii === idx && !GetRef(didMatch)) {
        if (node.iterateFromBackwards(from, fn, reverse) === false) {
          return false;
        }
      } else if (node.iterate(fn, true) === false) {
        return false;
      }
    }
  } else {
    for (var ii$1 = GetRef(didMatch) ? idx : idx - 1; ii$1 >= 0; ii$1--) {
      var entry$1 = entries[ii$1];
      if (entry$1[1] === NOT_SET) {
        continue;
      }
      if (fn(entry$1) === false) {
        return false;
      }
    }
  }
  return true;
};

SortedMapBtreeNode.prototype.iterateFromIndex = function(index, fn) {
  var entries = this.entries;
  var nodes = this.nodes;

  var didMatch = MakeRef();
  var subIndex = MakeRef();
  var idx = this.indexSearch(index, didMatch, subIndex);

  if (nodes) {
    for (var ii = idx, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[ii];
      if (ii === idx && !GetRef(didMatch)) {
        if (node.iterateFromIndex(subIndex.value, fn) === false) {
          return false;
        }
      } else if (ii > idx) {
        if (node.iterate(fn, false) === false) {
          return false;
        }
      }
      var entry = entries[ii];
      if (entry[1] === NOT_SET) {
        continue;
      }
      if (fn(entry) === false) {
        return false;
      }
    }

    // Iterate through the remaining last node
    var node$1 = nodes[nodes.length - 1];
    if (idx === nodes.length - 1) {
      if (node$1.iterateFromIndex(subIndex.value, fn) === false) {
        return false;
      }
    } else if (node$1.iterate(fn, false) === false) {
      return false;
    }
  } else {
    for (var ii$1 = idx, maxIndex$1 = entries.length - 1; ii$1 <= maxIndex$1; ii$1++) {
      var entry$1 = entries[ii$1];
      if (entry$1[1] === NOT_SET) {
        continue;
      }
      if (fn(entry$1) === false) {
        return false;
      }
    }
  }
  return true;
};

SortedMapBtreeNode.prototype.iterateFromIndexBackwards = function(index, fn) {
  var entries = this.entries;
  var nodes = this.nodes;

  var didMatch = MakeRef();
  var subIndex = MakeRef();
  var idx = this.indexSearch(index, didMatch, subIndex);

  if (nodes) {
    for (var ii = idx; ii >= 0; ii--) {
      if (ii < idx || GetRef(didMatch)) {
        var entry = entries[ii];
        if (entry[1] === NOT_SET) {
          continue;
        }
        if (fn(entry) === false) {
          return false;
        }
      }
      var node = nodes[ii];
      if (ii === idx && !GetRef(didMatch)) {
        if (node.iterateFromIndexBackwards(subIndex.value, fn) === false) {
          return false;
        }
      } else if (node.iterate(fn, true) === false) {
        return false;
      }
    }
  } else {
    for (var ii$1 = GetRef(didMatch) ? idx : idx - 1; ii$1 >= 0; ii$1--) {
      var entry$1 = entries[ii$1];
      if (entry$1[1] === NOT_SET) {
        continue;
      }
      if (fn(entry$1) === false) {
        return false;
      }
    }
  }
  return true;
};

var SortedMapBtreeNodeIterator = (function (Iterator$$1) {
  function SortedMapBtreeNodeIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame$1(map._root);
  }

  if ( Iterator$$1 ) SortedMapBtreeNodeIterator.__proto__ = Iterator$$1;
  SortedMapBtreeNodeIterator.prototype = Object.create( Iterator$$1 && Iterator$$1.prototype );
  SortedMapBtreeNodeIterator.prototype.constructor = SortedMapBtreeNodeIterator;

  SortedMapBtreeNodeIterator.prototype.next = function next () {
    var this$1 = this;

    var type = this._type;
    var stack = this._stack;
    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      if (node.nodes) {
        var maxIndex = node.entries.length + node.nodes.length - 1;
        if (index <= maxIndex) {
          if (index % 2 === 0) {
            index /= 2;
            var subNode =
              node.nodes[this$1._reverse ? node.nodes.length - 1 - index : index];
            if (subNode) {
              stack = this$1._stack = mapIteratorFrame$1(subNode, stack);
            }
            continue;
          } else {
            index = (index - 1) / 2;
            var entry =
              node.entries[
                this$1._reverse ? node.entries.length - 1 - index : index
              ];
            if (entry[1] === NOT_SET) {
              continue;
            }
            return mapIteratorValue$1(type, entry);
          }
        }
      } else {
        // node.entries
        var maxIndex$1 = node.entries.length - 1;
        if (index <= maxIndex$1) {
          var entry$1 = node.entries[this$1._reverse ? maxIndex$1 - index : index];
          if (entry$1[1] === NOT_SET) {
            continue;
          }
          return mapIteratorValue$1(type, entry$1);
        }
      }
      stack = this$1._stack = this$1._stack.__prev;
    }
    return iteratorDone();
  };

  return SortedMapBtreeNodeIterator;
}(Iterator));

function mapIteratorValue$1(type, entry) {
  return iteratorValue(type, entry[0], entry[1]);
}

function mapIteratorFrame$1(node, prev) {
  return {
    node: node,
    index: 0,
    __prev: prev,
  };
}

//
// Array manipulation algorithms
//

function allocArray(n) {
  var a = new Array(n);
  return a;
}

var _indentStr = new Array(120).join(' ');

function indent(level) {
  var indentCnt = 4 * level;
  if (indentCnt > _indentStr.length) {
    indentCnt = _indentStr.length;
  }
  return _indentStr.substring(0, indentCnt);
}

function clone(array, canEdit) {
  if(array === undefined) {
    return array;
  }
  if (canEdit) {
    return array;
  }

  var newLen = array.length;
  var newArray = allocArray(newLen);
  for (var ii = 0; ii < newLen; ii++) {
    newArray[ii] = array[ii];
  }
  return newArray;
}

function setIn$2(array, idx, val, canEdit) {
  if (canEdit) {
    array[idx] = val;
    return array;
  }

  var newLen = array.length;
  var newArray = allocArray(newLen);
  for (var ii = 0; ii < idx; ii++) {
    newArray[ii] = array[ii];
  }
  newArray[idx] = val;
  for (var ii$1 = idx + 1; ii$1 < newLen; ii$1++) {
    newArray[ii$1] = array[ii$1];
  }
  return newArray;
}

function spliceIn$1(array, idx, val, canEdit) {
  var newLen = array.length + 1;

  if (canEdit) {
    // Have to shift items going backwards
    for (var ii = newLen - 1, stop = idx + 1; ii >= stop; ii--) {
      array[ii] = array[ii - 1];
    }
    array[idx] = val;
    return array;
  }

  var newArray = allocArray(newLen);
  for (var ii$1 = 0; ii$1 < idx; ii$1++) {
    newArray[ii$1] = array[ii$1];
  }
  newArray[idx] = val;
  for (var ii$2 = idx + 1; ii$2 < newLen; ii$2++) {
    newArray[ii$2] = array[ii$2 - 1];
  }
  return newArray;
}

function spliceOut$1(array, idx, canEdit) {
  var newLen = array.length - 1;

  if (canEdit) {
    for (var ii = idx; ii < newLen; ii++) {
      array[ii] = array[ii + 1];
    }
    array.length = newLen;
    return array;
  }

  var newArray = allocArray(newLen);
  for (var ii$1 = 0; ii$1 < idx; ii$1++) {
    newArray[ii$1] = array[ii$1];
  }
  for (var ii$2 = idx; ii$2 < newLen; ii$2++) {
    newArray[ii$2] = array[ii$2 + 1];
  }
  return newArray;
}

function spliceOutN(array, idx, n, canEdit) {
  var newLen = array.length - n;

  if (canEdit) {
    for (var ii = idx; ii < newLen; ii++) {
      array[ii] = array[ii + n];
    }
    array.length = newLen;
    return array;
  }

  var newArray = allocArray(newLen);
  for (var ii$1 = 0; ii$1 < idx; ii$1++) {
    newArray[ii$1] = array[ii$1];
  }
  for (var ii$2 = idx; ii$2 < newLen; ii$2++) {
    newArray[ii$2] = array[ii$2 + n];
  }
  return newArray;
}

//
// Example: spliceOutShiftRightN(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3, 2, canEdit)
//
// removes item at index=3 ('d') and moves all remaining items in an awway right by 2 positions
//
// Result: [?, ?, 'a', 'b', 'c', 'f', 'g']
//
function spliceOutShiftRightN(array, idx, rightN, canEdit) {
  var newLen = array.length - 1 + rightN;
  var newArray;

  if (canEdit) {
    array.length = newLen;
    newArray = array;
  } else {
    newArray = allocArray(newLen);
  }

  for (var ii = newLen - 1, stop = idx + rightN; ii >= stop; ii--) {
    newArray[ii] = array[ii - rightN + 1];
  }
  for (var ii$1 = idx + rightN - 1; ii$1 >= rightN; ii$1--) {
    newArray[ii$1] = array[ii$1 - rightN];
  }
  return newArray;
}

//
// First: setIn(array, setInIdx, setInValue)
// Then: spliceOut(array, spliceOutIdx)
// Optimized, eliminating redundant copying
// Equivalent of setInSpliceOutN(array, setInIdx, setInValue, spliceOutIdx, 1, canEdit)
//
// Example: setInSpliceOut(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3, 'D', 1, canEdit)
//
// Result: ['a', 'c', 'D', 'f', 'g']
//
function setInSpliceOut(array, setInIdx, setInValue, spliceOutIdx, canEdit) {
  var newArray = spliceOut$1(array, spliceOutIdx, canEdit);

  // Now we can edit regardless of canEdit
  if (setInIdx < spliceOutIdx) {
    newArray[setInIdx] = setInValue;
  } else if (setInIdx > spliceOutIdx) {
    newArray[setInIdx - 1] = setInValue;
  }

  return newArray;
}

function binarySearch(comparator, entries, key, didMatch) {
  var first = 0;
  var range = entries.length;

  while (range > 0) {
    var half = Math.floor(range / 2);
    var entry = entries[first + half];
    var entryKey = entry[0];
    var cmp = comparator(key, entryKey);
    if (cmp === 0) {
      SetRef(didMatch);
      return first + half;
    }
    if (cmp > 0) {
      first += half + 1;
      range -= half + 1;
    } else {
      range = half;
    }
  }
  return first;
}

SortedMapBtreeNode.prototype.indexSearch = function(index, didMatch, subIndex) {
  if (index < 0 || index >= this.size) {
    throw new Error(
      'BtreeNode.indexSearch: index is out of bounds: ' +
        index +
        ' vs ' +
        this.size
    );
  }
  var entries = this.entries;
  var nodes = this.nodes;

  for (var i = 0; i < entries.length; i++) {
    if (nodes) {
      var node = nodes[i];
      if (index < node.size) {
        subIndex.value = index;
        return i;
      }
      index -= node.size;
    }

    var entry = entries[i];
    if (entry[1] !== NOT_SET) {
      if (index === 0) {
        SetRef(didMatch);
        return i;
      }
      index--;
    }
  }

  if (nodes) {
    var node$1 = nodes[nodes.length - 1];
    if (index < node$1.size) {
      subIndex.value = index;
      return nodes.length - 1;
    }
  }

  throw new Error('BtreeNode.indexSearch: inconsistent node size');
};

//
// Node Split algorithms
//
SortedMapBtreeNode.prototype.splitNode = function(
  idx,
  updatedNode,
  subKvn,
  outKvn,
  ownerID,
  canEdit
) {
  var entries = this.entries;
  var nodes = this.nodes;
  var medianIdx = this.btreeNodeSplitSize;

  var newEntries;
  var newNodes;

  if (idx < medianIdx) {
    var rightEntries = entries.slice(medianIdx, entries.length);
    var rightNodes = nodes.slice(medianIdx, nodes.length);
    var rightNode = new SortedMapBtreeNode(
      this.comparator,
      this.options,
      this.ownerID,
      rightEntries,
      rightNodes
    );

    outKvn[0] = entries[medianIdx - 1];
    outKvn[1] = rightNode;

    if (canEdit) {
      // truncate existing entries and nodes
      entries.length = medianIdx;
      nodes.length = medianIdx + 1;

      // shift the items right to make room for returned Kvn
      // and updatedNode (has to go backwards)
      for (var i = medianIdx - 1; i >= idx + 1; i--) {
        entries[i] = entries[i - 1];
        nodes[i + 1] = nodes[i];
      }

      // place returned Kvn and updated node into entries and nodes
      entries[idx] = subKvn[0];
      nodes[idx] = updatedNode;
      nodes[idx + 1] = subKvn[1];
      newEntries = entries;
      newNodes = nodes;
    } else {
      // allocate new arrays for entries and nodes
      newEntries = allocArray(medianIdx);
      newNodes = allocArray(medianIdx + 1);

      // copy the items before idx into new arrays
      for (var i$1 = 0; i$1 < idx; i$1++) {
        newEntries[i$1] = entries[i$1];
        newNodes[i$1] = nodes[i$1];
      }

      // place returned Kvn and updated node into new arrays
      newEntries[idx] = subKvn[0];
      newNodes[idx] = updatedNode;
      newNodes[idx + 1] = subKvn[1];

      // copy remaining items after idx into new arrays
      for (var i$2 = idx + 1; i$2 < medianIdx; i$2++) {
        newEntries[i$2] = entries[i$2 - 1];
        newNodes[i$2 + 1] = nodes[i$2];
      }
    }
  } else if (idx === medianIdx) {
    // allocate the arrays for right node
    var rightEntries$1 = allocArray(entries.length - medianIdx);
    var rightNodes$1 = allocArray(nodes.length - medianIdx);

    // place subKvn to the beginning of right node arrays
    rightEntries$1[0] = entries[medianIdx];
    rightNodes$1[0] = subKvn[1];

    // copy the remaining items into the right node arrays
    for (var i$3 = 1, len = rightEntries$1.length; i$3 < len; i$3++) {
      rightEntries$1[i$3] = entries[medianIdx + i$3];
      rightNodes$1[i$3] = nodes[medianIdx + i$3];
    }
    // copy the last node item into rightNodes
    rightNodes$1[rightNodes$1.length - 1] = nodes[nodes.length - 1];

    var rightNode$1 = new SortedMapBtreeNode(
      this.comparator,
      this.options,
      this.ownerID,
      rightEntries$1,
      rightNodes$1
    );

    outKvn[0] = subKvn[0];
    outKvn[1] = rightNode$1;

    if (canEdit) {
      // truncate existing entries and nodes
      entries.length = medianIdx;
      nodes.length = medianIdx + 1;
      nodes[idx] = updatedNode;
      newEntries = entries;
      newNodes = nodes;
    } else {
      // allocate new arrays for entries and nodes
      newEntries = allocArray(medianIdx);
      newNodes = allocArray(medianIdx + 1);

      // copy the items before idx into new arrays
      for (var i$4 = 0; i$4 < medianIdx; i$4++) {
        newEntries[i$4] = entries[i$4];
        newNodes[i$4] = nodes[i$4];
      }

      // place returned Kvn and updated node into new node arrays
      newNodes[idx] = updatedNode;
    }
  } else {
    // idx > medianIdx

    // allocate the arrays for right node
    var rightEntries$2 = allocArray(entries.length - medianIdx);
    var rightNodes$2 = allocArray(nodes.length - medianIdx);

    // copy the items into the beginning of right node arrays
    var idx0 = medianIdx + 1;
    var rightIdx = idx - idx0;
    for (var i$5 = 0, len$1 = rightIdx; i$5 < len$1; i$5++) {
      rightEntries$2[i$5] = entries[idx0 + i$5];
      rightNodes$2[i$5] = nodes[idx0 + i$5];
    }

    // place subKvn to the middle right node arrays
    rightEntries$2[rightIdx] = subKvn[0];
    rightNodes$2[rightIdx] = updatedNode;
    rightNodes$2[rightIdx + 1] = subKvn[1];

    // copy the remaining items into the right node arrays
    for (var i$6 = rightIdx + 1, len$2 = rightEntries$2.length; i$6 < len$2; i$6++) {
      rightEntries$2[i$6] = entries[medianIdx + i$6];
      rightNodes$2[i$6 + 1] = nodes[medianIdx + i$6 + 1];
    }

    var rightNode$2 = new SortedMapBtreeNode(
      this.comparator,
      this.options,
      this.ownerID,
      rightEntries$2,
      rightNodes$2
    );

    outKvn[0] = entries[medianIdx];
    outKvn[1] = rightNode$2;

    if (canEdit) {
      // truncate existing entries and nodes
      entries.length = medianIdx;
      nodes.length = medianIdx + 1;
      newEntries = entries;
      newNodes = nodes;
    } else {
      // allocate new arrays for entries and nodes
      newEntries = entries.slice(0, medianIdx);
      newNodes = nodes.slice(0, medianIdx + 1);
    }
  }

  return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
};

SortedMapBtreeNode.prototype.splitLeaf = function(
  idx,
  entry,
  outKvn,
  ownerID,
  canEdit
) {
  var entries = this.entries;
  var medianIdx = this.btreeNodeSplitSize;

  var newEntries;
  var newNodes;

  if (idx < medianIdx) {
    var rightEntries = entries.slice(medianIdx, entries.length);
    var rightNode = new SortedMapBtreeNode(
      this.comparator,
      this.options,
      this.ownerID,
      rightEntries
    );

    outKvn[0] = entries[medianIdx - 1];
    outKvn[1] = rightNode;

    if (canEdit) {
      // truncate existing entries and nodes
      entries.length = medianIdx;

      // shift the items right to make room for returned Kvn
      // and updatedNode (has to go backwards)
      for (var i = medianIdx - 1; i >= idx + 1; i--) {
        entries[i] = entries[i - 1];
      }

      // place returned Kvn and updated node into entries and nodes
      entries[idx] = entry;
      newEntries = entries;
    } else {
      // allocate new arrays for entries and nodes
      newEntries = allocArray(medianIdx);

      // copy the items before idx into new arrays
      for (var i$1 = 0; i$1 < idx; i$1++) {
        newEntries[i$1] = entries[i$1];
      }

      // place returned Kvn and updated node into new arrays
      newEntries[idx] = entry;

      // copy remaining items after idx into new arrays
      for (var i$2 = idx + 1; i$2 < medianIdx; i$2++) {
        newEntries[i$2] = entries[i$2 - 1];
      }
    }
  } else if (idx === medianIdx) {
    // allocate the arrays for right node
    var rightEntries$1 = allocArray(entries.length - medianIdx);

    // place subKvn to the beginning of right node arrays
    rightEntries$1[0] = entries[medianIdx];

    // copy the remaining items into the right node arrays
    for (var i$3 = 1, len = rightEntries$1.length; i$3 < len; i$3++) {
      rightEntries$1[i$3] = entries[medianIdx + i$3];
    }

    var rightNode$1 = new SortedMapBtreeNode(
      this.comparator,
      this.options,
      this.ownerID,
      rightEntries$1
    );

    outKvn[0] = entry;
    outKvn[1] = rightNode$1;

    if (canEdit) {
      // truncate existing entries and nodes
      entries.length = medianIdx;
      newEntries = entries;
    } else {
      // allocate new arrays for entries
      newEntries = allocArray(medianIdx);

      // copy the items before idx into new arrays
      for (var i$4 = 0; i$4 < medianIdx; i$4++) {
        newEntries[i$4] = entries[i$4];
      }
    }
  } else {
    // idx > medianIdx

    // allocate the arrays for right node
    var rightEntries$2 = allocArray(entries.length - medianIdx);

    // copy the items into the beginning of right node arrays
    var idx0 = medianIdx + 1;
    var rightIdx = idx - idx0;
    for (var i$5 = 0, len$1 = rightIdx; i$5 < len$1; i$5++) {
      rightEntries$2[i$5] = entries[idx0 + i$5];
    }

    // place subKvn to the middle right node arrays
    rightEntries$2[rightIdx] = entry;

    // copy the remaining items into the right node arrays
    for (var i$6 = rightIdx + 1, len$2 = rightEntries$2.length; i$6 < len$2; i$6++) {
      rightEntries$2[i$6] = entries[medianIdx + i$6];
    }

    var rightNode$2 = new SortedMapBtreeNode(
      this.comparator,
      this.options,
      this.ownerID,
      rightEntries$2
    );

    outKvn[0] = entries[medianIdx];
    outKvn[1] = rightNode$2;

    if (canEdit) {
      // truncate existing entries and nodes
      entries.length = medianIdx;
      newEntries = entries;
    } else {
      // allocate new arrays for entries and nodes
      newEntries = entries.slice(0, medianIdx);
    }
  }

  return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
};

SortedMapBtreeNode.prototype.spliceNode = function(
  ownerID,
  idx,
  updatedNode,
  parent,
  parentIdx,
  canEdit,
  subKvn,
  outKvn
) {
  var entries = this.entries;
  var nodes = this.nodes;

  var newEntries;
  var newNodes;

  var updatedEntry = subKvn[0];
  var updatedNeighbor = subKvn[1];
  var updatedNeighborIsLeft = subKvn[2];

  if (updatedNeighbor === NOT_SET) {
    //
    // Removing entry and node
    //
    if (entries.length <= this.btreeNodeSplitSize && parent) {
      // Not enough room, consolidate this node
      if (updatedNeighborIsLeft) {
        // remove left node in newNodes
        return this.consolidateNode(
          ownerID,
          idx,
          updatedNode,
          idx - 1,
          idx - 1,
          parent,
          parentIdx,
          canEdit,
          outKvn
        );
      } else {
        // remove right node in newNodes
        return this.consolidateNode(
          ownerID,
          idx,
          updatedNode,
          idx,
          idx + 1,
          parent,
          parentIdx,
          canEdit,
          outKvn
        );
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (updatedNeighborIsLeft) {
        // update left node in newNodes
        newNodes = setInSpliceOut(nodes, idx, updatedNode, idx - 1, canEdit);
        newEntries = spliceOut$1(entries, idx - 1, canEdit);
      } else {
        // update right node in newNodes
        newNodes = setInSpliceOut(nodes, idx, updatedNode, idx + 1, canEdit);
        newEntries = spliceOut$1(entries, idx, canEdit);
      }
    }
  } else {
    //
    // Updating entry and node
    //
    newNodes = setIn$2(nodes, idx, updatedNode, canEdit);
    if (updatedNeighbor) {
      if (updatedNeighborIsLeft) {
        // update left node in newNodes
        newNodes[idx - 1] = updatedNeighbor;
        newEntries = setIn$2(entries, idx - 1, updatedEntry, canEdit);
      } else {
        // update right node in newNodes
        newNodes[idx + 1] = updatedNeighbor;
        newEntries = setIn$2(entries, idx, updatedEntry, canEdit);
      }
    } else if (updatedEntry) {
      newEntries = setIn$2(entries, idx, updatedEntry, canEdit);
    } else {
      newEntries = clone(entries, canEdit);
    }
  }

  return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
};

//
// We updating node at position idx, removing the entry at position removeEntryIdx,
// and removing a neighbor node at position removeNodeIdx
// (either on the left or right side of updated node). We know that we already have
// a minimum number of allowed entries in the node, so we have to either
// move some entries from a neighbor or merge with neighbour
//
SortedMapBtreeNode.prototype.consolidateNode = function(
  ownerID,
  idx,
  updatedNode,
  removeEntryIdx,
  removeNodeIdx,
  parent,
  parentIdx,
  canEdit,
  outKvn
) {
  var entries = this.entries;
  var nodes = this.nodes;

  var parentEntries = parent.entries;
  var parentNodes = parent.nodes;

  //
  // Decide if we are going to move entries or merge
  // and with which neighbor we are going to proceed
  //
  var donorNode;
  var mergeNode;
  var leftNode;
  var rightNode;
  if (parentIdx === 0) {
    // Only right node can be a host within a scope of this parent
    rightNode = parentNodes[parentIdx + 1];
    mergeNode = donorNode = rightNode;
  } else if (parentIdx === parentNodes.length - 1) {
    // Only left node can be a host within a scope of this parent
    leftNode = parentNodes[parentIdx - 1];
    mergeNode = donorNode = leftNode;
  } else {
    // Both left and right node could be a potential donor
    leftNode = parentNodes[parentIdx - 1];
    rightNode = parentNodes[parentIdx + 1];
    var leftAvail =
      (leftNode.entries.length - this.btreeNodeSplitSize + 1) / 2;
    var rightAvail =
      (rightNode.entries.length - this.btreeNodeSplitSize + 1) / 2;
    if (leftAvail >= rightAvail) {
      donorNode = leftNode;
      mergeNode = rightNode;
    } else {
      donorNode = rightNode;
      mergeNode = leftNode;
    }
  }

  var newEntries;
  var newNodes;

  //
  // Move from the LEFT node
  //
  function moveFromLeftNode(node, n, merge) {
    // allocate newEntries extended by n
    newEntries = spliceOutShiftRightN(entries, removeEntryIdx, n, canEdit);
    newNodes = spliceOutShiftRightN(nodes, removeNodeIdx, n, canEdit);

    // now set the updatedNode, adjust the index according to the shift above
    var uIdx = idx < removeNodeIdx ? idx + n : idx + n - 1;
    newNodes[uIdx] = updatedNode;

    // Then move an item from the parent node into newEntries
    var i = n - 1;
    newEntries[i] = parentEntries[parentIdx - 1];

    // And move rightest node from the neighbor into newNodes
    newNodes[i--] = node.nodes[node.nodes.length - 1];

    // Then copy the items from the node
    var j;
    for (j = node.entries.length - 1; i >= 0; i--, j--) {
      newEntries[i] = node.entries[j];
      newNodes[i] = node.nodes[j];
    }

    if (merge) {
      outKvn[1] = NOT_SET;
    } else {
      // Last, copy the remaining entry from node to parent
      outKvn[0] = node.entries[j];

      // Make a copy of donor's node without donated entries
      var newNodeEntries = spliceOutN(
        node.entries,
        node.entries.length - n,
        n,
        canEdit
      );
      var newNodeNodes = spliceOutN(
        node.nodes,
        node.nodes.length - n,
        n,
        canEdit
      );

      outKvn[1] = node.makeNewNode(
        newNodeEntries,
        newNodeNodes,
        ownerID,
        canEdit
      );
    }
    outKvn[2] = true;
  }

  //
  // Move from the right node
  //
  function moveFromRightNode(node, n, merge) {
    newEntries = spliceOut$1(entries, removeEntryIdx, canEdit);
    newNodes = spliceOut$1(nodes, removeNodeIdx, canEdit);

    // Expand new entries
    var j = newEntries.length;
    newEntries.length += n;
    newNodes.length += n;

    // now set the updatedNode, adjust the index according to the shift above
    var uIdx = idx < removeNodeIdx ? idx : idx - 1;
    newNodes[uIdx] = updatedNode;

    // Then move an item from the parent node into newEntries
    newEntries[j++] = parentEntries[parentIdx];

    // Also copy the first item in right neighbor into newNodes
    newNodes[j] = node.nodes[0];

    // Then copy the items from the node
    for (var i = 0, iLimit = n - 1; i < iLimit; i++) {
      newEntries[j + i] = node.entries[i];
      newNodes[j + i + 1] = node.nodes[i + 1];
    }

    if (merge) {
      outKvn[1] = NOT_SET;
    } else {
      // Last, copy the remaining item from node to parent
      outKvn[0] = node.entries[n - 1];

      // Make a copy of donor's node without donated entries
      var newNodeEntries = spliceOutN(node.entries, 0, n, canEdit);
      var newNodeNodes = spliceOutN(node.nodes, 0, n, canEdit);

      outKvn[1] = node.makeNewNode(
        newNodeEntries,
        newNodeNodes,
        ownerID,
        canEdit
      );
    }
    outKvn[2] = false;
  }

  var donorAvail = Math.floor(
    (donorNode.entries.length - this.btreeNodeSplitSize + 1) / 2
  );
  if (donorAvail > 0) {
    //
    // OPERATION: MOVE
    //
    // move donorAvail entries from donorNode to this leaf through parentNodes
    if (donorNode === leftNode) {
      moveFromLeftNode(donorNode, donorAvail);
    } else {
      moveFromRightNode(donorNode, donorAvail);
    }
  } else {
    //
    // OPERATION: MERGE
    //
    // neither neighbour has enough entries to donate
    // we gotta merge this node with mergeNode which has fewer entries available
    // eslint-disable-next-line no-lonely-if
    if (mergeNode === leftNode) {
      // Merge with the left node
      moveFromLeftNode(mergeNode, mergeNode.entries.length + 1, true);
    } else {
      // Merge with the right node
      moveFromRightNode(mergeNode, mergeNode.entries.length + 1, true);
    }
  }

  return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
};

// We are eliminating the entry at position idx and we know that we already
// have a minimum number of allowed entries in the node, so we have to either
// move some entries from a neighbor or merge with neighbour
SortedMapBtreeNode.prototype.consolidateLeaf = function(
  ownerID,
  idx,
  parent,
  parentIdx,
  canEdit,
  outKvn
) {
  var entries = this.entries;
  var parentEntries = parent.entries;
  var parentNodes = parent.nodes;

  //
  // Decide if we are going to move entries or merge
  // and with which neighbor we are going to proceed
  //
  var donorNode;
  var leftNode;
  // eslint-disable-next-line no-unused-vars
  var rightNode;
  if (parentIdx === 0) {
    // Only right node can be a host within a scope of this parent
    rightNode = parentNodes[parentIdx + 1];
    donorNode = rightNode;
  } else if (parentIdx === parentNodes.length - 1) {
    // Only left node can be a host within a scope of this parent
    leftNode = parentNodes[parentIdx - 1];
    donorNode = leftNode;
  } else {
    // Both left and right node could be a potential donor
    leftNode = parentNodes[parentIdx - 1];
    rightNode = parentNodes[parentIdx + 1];
    var leftAvail = leftNode.entries.length - this.btreeNodeSplitSize;
    var rightAvail = rightNode.entries.length - this.btreeNodeSplitSize;
    if (leftAvail >= rightAvail) {
      donorNode = leftNode;
    } else {
      donorNode = rightNode;
    }
  }

  var newEntries;
  //
  // Move from the LEFT node
  //
  // n - is the number of entries added to the target node
  //
  function moveFromLeftNode(node, n, merge) {
    // allocate newEntries extended by n
    newEntries = spliceOutShiftRightN(entries, idx, n, canEdit);

    // m is number of entries to be moved from donor node
    var m = n;
    if (!parentNotSet) {
      // Move an item from the parent node into newEntries
      newEntries[n - 1] = parentEntry;
      m--;
    }

    // Then copy the items from the node
    for (var i = 0; i < m; i++) {
      newEntries[i] = node.entries[node.entries.length - m + i];
    }

    if (merge) {
      outKvn[1] = NOT_SET;
    } else {
      // Last, copy the remaining item from node to parent
      m++;
      outKvn[0] = node.entries[node.entries.length - m];

      // Make a copy of donor's node without donated entries
      var newNodeEntries = spliceOutN(
        node.entries,
        node.entries.length - m,
        m,
        canEdit
      );

      outKvn[1] = node.makeNewNode(newNodeEntries, undefined, ownerID, canEdit);
    }
    outKvn[2] = true;
  }

  //
  // Move from the right node
  //
  // n - is the number of entries added to the target node
  //
  function moveFromRightNode(node, n, merge) {
    newEntries = spliceOut$1(entries, idx, canEdit);
    // Expand new entries
    var j = newEntries.length;
    newEntries.length += n;

    // m is number of entries to be moved from donor node
    var m = n;
    if (!parentNotSet) {
      // Move an item from the parent node into newEntries
      newEntries[j++] = parentEntry;
      m--;
    }

    // Then copy the items from the node
    for (var i = 0; i < m; i++) {
      newEntries[j + i] = node.entries[i];
    }

    if (merge) {
      outKvn[1] = NOT_SET;
    } else {
      // Last, copy the remaining item from node to parent
      outKvn[0] = node.entries[m++];

      // Make a copy of donor's node without donated entries
      var newNodeEntries = spliceOutN(node.entries, 0, m, canEdit);

      outKvn[1] = node.makeNewNode(newNodeEntries, undefined, ownerID, canEdit);
    }
    outKvn[2] = false;
  }

  var parentEntry =
    donorNode === leftNode
      ? parentEntries[parentIdx - 1]
      : parentEntries[parentIdx];
  var parentNotSet = parentEntry[1] === NOT_SET;
  var parentAdj = parentNotSet ? 1 : 0;
  var donorAvail =
    donorNode.entries.length - this.btreeNodeSplitSize - parentAdj;
  if (donorAvail > 0) {
    //
    // OPERATION: MOVE
    //
    // move donorAvail entries from donorNode to this leaf through parentNodes
    var n = Math.floor((donorAvail + 1) / 2);
    if (donorNode === leftNode) {
      moveFromLeftNode(donorNode, n);
    } else {
      moveFromRightNode(donorNode, n);
    }
  } else {
    //
    // OPERATION: MERGE
    //
    // neither neighbour has enough entries to donate
    // we gotta merge this node with donorNode
    var n$1 = donorNode.entries.length + 1 - parentAdj;
    if (donorNode === leftNode) {
      // Merge with the left node
      moveFromLeftNode(donorNode, n$1, true);
    } else {
      // Merge with the right node
      moveFromRightNode(donorNode, n$1, true);
    }
  }

  return this.makeNewNode(newEntries, undefined, ownerID, canEdit);
};

var SortedMapBtreeNodePacker = (function (SortedMapPacker$$1) {
  function SortedMapBtreeNodePacker () {
    SortedMapPacker$$1.apply(this, arguments);
  }

  if ( SortedMapPacker$$1 ) SortedMapBtreeNodePacker.__proto__ = SortedMapPacker$$1;
  SortedMapBtreeNodePacker.prototype = Object.create( SortedMapPacker$$1 && SortedMapPacker$$1.prototype );
  SortedMapBtreeNodePacker.prototype.constructor = SortedMapBtreeNodePacker;

  SortedMapBtreeNodePacker.prototype.calcPlanCnt = function calcPlanCnt (order, height) {
    if (height < 1 || height > 20) {
      throw new Error('Height is out of supported limit');
    }

    // The recursive algorithm would be:
    //
    // if(height <= 1) {
    // 	return order - 1;
    // }
    // return order * this.calcPlanCnt(order, height - 1) + (order - 1);

    var n = order - 1;

    for (var h = 1; h < height; h++) {
      n = n * order + (order - 1);
    }

    return n;
  };

  SortedMapBtreeNodePacker.prototype.prepareCachedPlan = function prepareCachedPlan (order, n) {
    var key = order.toString() + ' ' + n.toString();

    var cachedPlan = SortedMapBtreeNodePacker.cache[key];

    if (cachedPlan) {
      return cachedPlan;
    }

    var plan = this.preparePlan(order, n);
    this.verifyPlan(plan);

    if (
      order < 100 &&
      n <= 100 &&
      n >= order &&
      SortedMapBtreeNodePacker.cacheSize < 500
    ) {
      SortedMapBtreeNodePacker.cache[key] = plan;
      SortedMapBtreeNodePacker.cacheSize++;
    }

    return plan;
  };

  SortedMapBtreeNodePacker.prototype.preparePlan = function preparePlan (order, n) {
    //
    // First determine height of the tree we are building
    //
    var order1 = order - 1;
    var height = 1;
    var maxEntriesCnt = order1;
    var maxEntriesCnt1;
    while (maxEntriesCnt < n) {
      maxEntriesCnt1 = maxEntriesCnt;
      maxEntriesCnt = maxEntriesCnt * order + order1;
      height++;
    }

    if (maxEntriesCnt === n) {
      // Exact match for the full tree
      return {
        op: 'build',
        full: true,
        height: height,
        order: order,
        repeat: 1,
        total: n,
      };
    }

    if (height === 1) {
      return {
        op: 'build',
        full: false,
        height: height,
        order: order,
        repeat: 1,
        total: n,
      };
    }

    //
    // Number of entries in subtrees of (height - 1)
    //
    var planCnt1 = maxEntriesCnt1;

    //
    // Then determine the root order
    //
    var rootOrder = 1 + Math.floor(n / (planCnt1 + 1));

    if (rootOrder < 2) {
      throw new Error(
        'Something is wrong, the rootOrder is expected to be >= 2'
      );
    }

    if (rootOrder * planCnt1 + (rootOrder - 1) === n) {
      var repeat = rootOrder;
      var repPlan = [];
      var total$1 = repeat * planCnt1 + repeat - 1;
      repPlan.push({
        op: 'build',
        full: true,
        height: height - 1,
        order: order,
        repeat: rootOrder,
        total: total$1,
      });
      return {
        op: 'assemble',
        height: height,
        order: order,
        total: total$1,
        items: repPlan,
      };
    }

    // We have to adjust last two subtrees
    var plan = [];

    if (rootOrder > 2) {
      var repeat$1 = rootOrder - 2;
      var total$2 = repeat$1 * planCnt1 + repeat$1 - 1;
      var build = {
        op: 'build',
        full: true,
        height: height - 1,
        order: order,
        repeat: repeat$1,
        total: total$2,
      };
      plan.push(build);
      n -= total$2;
      n--;
    }

    // Find feasible plan for 2 subtrees and n entries
    n--; // 1 more entry will be in between the two subtrees
    var n2 = Math.floor(n / 2);
    if (n - n2 > 0) {
      plan.push(this.prepareCachedPlan(order, n - n2));
    }
    if (n2 > 0) {
      plan.push(this.prepareCachedPlan(order, n2));
    }

    var total = 0;
    var ilen = plan.length;
    for (var i = 0; i < ilen; i++) {
      total += plan[i].total;
    }
    total += plan.length - 1;

    return {
      op: 'assemble',
      height: height,
      order: order,
      total: total,
      items: plan,
    };
  };

  SortedMapBtreeNodePacker.prototype.verifyPlan = function verifyPlan (plan, level) {
    var this$1 = this;

    function failed(msg) {
      throw new Error(msg);
    }

    if (level === undefined) {
      level = 0;
    }

    if (plan.op === 'assemble') {
      var cnt = 0;

      var ilen = plan.items.length;
      for (var i = 0; i < ilen; i++) {
        var pl = plan.items[i];
        cnt += pl.total;
        if (pl.op === 'build') {
          if (!(pl.order >= pl.repeat)) {
            failed(
              'Plan verification test failed: pl.order >= pl.repeat: ' +
                JSON.stringify(pl)
            );
          }
        }
        if (!(plan.height === pl.height + 1)) {
          failed('Plan verification test failed: plan.height === pl.height+1');
        }
        this$1.verifyPlan(pl, level + 1);
      }
      cnt += plan.items.length - 1;
      if (!(plan.total === cnt)) {
        failed('Count mismatch: ' + plan.total + ' vs ' + cnt);
      }
    } else if (plan.op === 'build') {
      // Verify plan consistency
      var ec = this.calcPlanCnt(plan.order, plan.height);
      if (plan.full) {
        var cnt$1 = ec * plan.repeat + plan.repeat - 1;
        if (!(plan.total === cnt$1)) {
          failed('Plan verification test failed: plan.total === ec');
        }
      } else {
        if (!(plan.height === 1)) {
          failed(
            'Plan verification test failed: expected height 1, got instead ' +
              plan.height
          );
        }
        if (!(plan.total < ec)) {
          failed('Plan verification test failed: plan.total < ec');
        }
        var halfSize = Math.floor((plan.order - 1) / 2);
        if (level > 0 && !(plan.total >= halfSize)) {
          failed(
            'Plan verification test failed: plan.total >= halfSize: ' +
              plan.total +
              ', ' +
              halfSize
          );
        }
      }
    } else {
      failed('Plan verification test failed: invalid op: ' + plan.op);
    }
  };

  // Pack the map according to the plan
  // Return a new root
  //
  // Sample Plan:
  //   {
  //     "op": "assemble",
  //     "height": 2,
  //     "order": 7,
  //     "total": 10,
  //     "items": [
  //         {
  //             "op": "build",
  //             "full": false,
  //             "height": 1,
  //             "order": 7,
  //             "repeat": 1,
  //             "total": 5
  //         },
  //         {
  //             "op": "build",
  //             "full": false,
  //             "height": 1,
  //             "order": 7,
  //             "repeat": 1,
  //             "total": 4
  //         }
  //     ]
  // }
  //

  SortedMapBtreeNodePacker.prototype.runPlan = function runPlan (plan, iter) {
    var this$1 = this;

    function failed(msg) {
      msg = 'Packing Plan is corrupt: ' + msg;
      throw new Error(msg);
    }

    if (plan.op === 'assemble') {
      var ilen = plan.items.length;
      for (var i = 0; i < ilen; i++) {
        if (i > 0) {
          this$1.populate(iter, 1);
        }
        this$1.runPlan(plan.items[i], iter);
      }
    } else if (plan.op === 'build') {
      var n = (plan.total - plan.repeat + 1) / plan.repeat;
      for (var i$1 = 0; i$1 < plan.repeat; i$1++) {
        if (i$1 > 0) {
          this$1.populate(iter, 1);
        }
        this$1.populate(iter, n);
      }
    } else {
      failed('invalid op: ' + plan.op);
    }
    this.flush(plan.height);
  };

  SortedMapBtreeNodePacker.prototype.flushLevel = function flushLevel (level) {
    this.prepareLevel(level + 1);
    var node = this.stack[level];
    node._calcSize();
    this.addNode(level + 1, node);
    this.stack[level] = undefined;
  };

  SortedMapBtreeNodePacker.prototype.flush = function flush (height) {
    var this$1 = this;

    for (var i = 0; i < height; i++) {
      var level = i;
      if (this$1.stack[level]) {
        // flush this level
        this$1.flushLevel(level);
        // next entry goes to parent
      }
    }
    this.stackLevel = height;
  };

  SortedMapBtreeNodePacker.prototype.populate = function populate (iter, n) {
    var this$1 = this;

    for (var i = 0; i < n; i++) {
      var next = iter.next();
      this$1.entriesCnt++;
      if (next.done) {
        throw new Error(
          'unexpected end of iterator at ' +
            this$1.entriesCnt +
            ' vs ' +
            iter.size
        );
      }
      var entry = next.value;

      var level = this$1.stackLevel;
      this$1.prepareLevel(level);
      this$1.addEntry(level, entry);

      if (level > 0) {
        // Node - go populate the subtree now
        this$1.stackLevel = 0;
      } else if (this$1.stackIndices[level] === this$1.order - 1) {
        // Leaf - we have filled all entries
        // flush the leaf
        this$1.flushLevel(level);
        // next entry goes to parent
        this$1.stackLevel++;
      }
    }
  };

  SortedMapBtreeNodePacker.prototype.addEntry = function addEntry (level, entry) {
    this.stack[level].entries[this.stackIndices[level]++] = entry;
  };

  SortedMapBtreeNodePacker.prototype.addNode = function addNode (level, node) {
    this.stack[level].nodes[this.stackIndices[level]] = node;

    if (this.stackIndices[level] === this.order - 1) {
      // we filled the whole node
      // flush the node
      this.flushLevel(level);
      // next entry goes to parent
      this.stackLevel++;
    }
  };

  SortedMapBtreeNodePacker.prototype.prepareLevel = function prepareLevel (level) {
    if (!this.stack[level]) {
      var entries = allocArray(this.order - 1);
      entries.length = 0;
      var nodes;
      if (level > 0) {
        nodes = allocArray(this.order);
        nodes.length = 0;
      }
      this.stack[level] = new SortedMapBtreeNode(
        this.comparator,
        this.options,
        this.ownerID,
        entries,
        nodes
      );
      this.stackIndices[level] = 0;
    }
  };

  SortedMapBtreeNodePacker.prototype.finish = function finish () {
    var level = this.stackLevel;
    if (level >= this.stack.length) {
      return undefined;
    }
    return this.stack[level].nodes[0];
  };

  // Will pack seq and store it in the map
  SortedMapBtreeNodePacker.prototype.pack = function pack (comparator, options, ownerID, collection) {
    if (options && options.type && options.type !== DEFAULT_TYPE) {
      throw new Error('Unsuported type by btree factory: ' + options.type);
    }

    this.order =
      options && options.btreeOrder ? options.btreeOrder : DEFAULT_BTREE_ORDER;

    var kc = KeyedCollection(collection);
    assertNotInfinite(kc.size);

    var plan = this.preparePlan(this.order, kc.size);

    this.comparator = comparator;
    this.options = options;
    this.ownerID = ownerID;
    this.stack = [];
    this.stackIndices = [];
    this.stackLevel = 0;
    this.entriesCnt = 0;

    var iter = kc.entries();
    this.runPlan(plan, iter);

    if (!iter.next().done) {
      throw new Error('iterator did not end when expected');
    }

    return this.finish();
  };

  return SortedMapBtreeNodePacker;
}(SortedMapPacker));

SortedMapBtreeNodePacker.cache = {};
SortedMapBtreeNodePacker.cacheSize = 0;

var SortedMapBtreeNodeFactory = (function (SortedMapNodeFactory$$1) {
  function SortedMapBtreeNodeFactory () {
    SortedMapNodeFactory$$1.apply(this, arguments);
  }

  if ( SortedMapNodeFactory$$1 ) SortedMapBtreeNodeFactory.__proto__ = SortedMapNodeFactory$$1;
  SortedMapBtreeNodeFactory.prototype = Object.create( SortedMapNodeFactory$$1 && SortedMapNodeFactory$$1.prototype );
  SortedMapBtreeNodeFactory.prototype.constructor = SortedMapBtreeNodeFactory;

  SortedMapBtreeNodeFactory.prototype.createNode = function createNode (comparator, options, ownerID, entries, nodes) {
    return new SortedMapBtreeNode(comparator, options, ownerID, entries, nodes);
  };

  SortedMapBtreeNodeFactory.prototype.createPacker = function createPacker () {
    return new SortedMapBtreeNodePacker();
  };

  SortedMapBtreeNodeFactory.prototype.createIterator = function createIterator (map, type, reverse) {
    return new SortedMapBtreeNodeIterator(map, type, reverse);
  };

  return SortedMapBtreeNodeFactory;
}(SortedMapNodeFactory));

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * Original source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var SortedMap = (function (Map$$1) {
  function SortedMap(value, comparator, options) {
    if (!comparator) {
      if (this instanceof SortedMap) {
        comparator = this.getComparator();
      }
      if (!comparator) {
        comparator = SortedMap.defaultComparator;
      }
    }
    if (!options) {
      if (this instanceof SortedMap) {
        options = this.getOptions();
      }
      if (!options) {
        options = SortedMap.defaultOptions;
      }
    }

    return value === null || value === undefined
      ? emptySortedMap(comparator, options)
      : isSortedMap(value) &&
        value.getComparator() === comparator &&
        value.getOptions() === options
        ? value
        : emptySortedMap(comparator, options).withMutations(function (map) {
            map.pack(value);
          });
  }

  if ( Map$$1 ) SortedMap.__proto__ = Map$$1;
  SortedMap.prototype = Object.create( Map$$1 && Map$$1.prototype );
  SortedMap.prototype.constructor = SortedMap;

  SortedMap.of = function of () {
    var keyValues = [], len = arguments.length;
    while ( len-- ) keyValues[ len ] = arguments[ len ];

    return emptySortedMap().withMutations(function (map) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error('Missing value for key: ' + keyValues[i]);
        }
        map.set(keyValues[i], keyValues[i + 1]);
      }
    });
  };

  SortedMap.prototype.toString = function toString () {
    return this.__toString('SortedMap {', '}');
  };

  // @pragma Access

  SortedMap.prototype.getComparator = function getComparator () {
    return this._comparator;
  };

  SortedMap.prototype.getOptions = function getOptions () {
    return this._options;
  };

  SortedMap.prototype.get = function get (k, notSetValue) {
    return this._root ? this._root.get(k, notSetValue) : notSetValue;
  };

  SortedMap.prototype.entryAt = function entryAt (index) {
    return this._root
      ? this._root.entryAt(index)
      : new Error('index is out of bounds');
  };

  SortedMap.prototype.keyAt = function keyAt (index) {
    return this._root
      ? this._root.keyAt(index)
      : new Error('index is out of bounds');
  };

  SortedMap.prototype.valueAt = function valueAt (index) {
    return this._root
      ? this._root.valueAt(index)
      : new Error('index is out of bounds');
  };

  // @pragma Modification

  SortedMap.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__altered = true;
      return this;
    }
    return emptySortedMap(this._comparator, this._options);
  };

  SortedMap.prototype.pack = function pack (value) {
    var this$1 = this;

    var collection;
    if (value === undefined) {
      collection = this;
    } else {
      // Sort and deduplicate the entries
      var index = 0;
      var entries = KeyedCollection(value)
        .map(function (v, k) { return [k, v, index++]; })
        .valueSeq()
        .toArray();
      if (entries.length === 0) {
        if (this.__ownerID) {
          this._root = undefined;
          (this.size = 0), (this.__altered = true);
          return this;
        }
        return emptySortedMap(this._comparator, this._options);
      }
      entries.sort(function (a, b) { return this$1._comparator(a[0], b[0]) || a[2] - b[2]; });
      var result = [];
      for (var i = 0, stop = entries.length - 1; i < stop; i++) {
        var entry = entries[i];
        var nextEntry = entries[i + 1];
        if (this$1._comparator(entry[0], nextEntry[0]) < 0) {
          var newEntry = [entry[0], entry[1]];
          result.push(newEntry);
        }
      }
      // push the last ownerID
      var entry$1 = entries[entries.length - 1];
      var newEntry$1 = [entry$1[0], entry$1[1]];
      result.push(newEntry$1);
      collection = KeyedSeq(result);
    }
    assertNotInfinite(collection.size);

    var newSize = collection.size;
    var newRoot = this._factory
      .createPacker()
      .pack(this._comparator, this._options, this.__ownerID, collection);

    if (this.__ownerID) {
      this._root = newRoot;
      (this.size = newSize), (this.__altered = true);
      return this;
    }
    return newRoot
      ? makeSortedMap(this._comparator, this._options, newSize, newRoot)
      : emptySortedMap(this._comparator, this._options);
  };

  SortedMap.prototype.set = function set (k, v) {
    return updateMap$1(this, k, v);
  };

  SortedMap.prototype.remove = function remove (k) {
    return updateMap$1(this, k, NOT_SET);
  };

  SortedMap.prototype.fastRemove = function fastRemove (k) {
    return updateMap$1(this, k, NOT_SET, true);
  };

  // @pragma Composition

  SortedMap.prototype.sort = function sort (comparator) {
    return SortedMap(this, comparator, this.getOptions());
  };

  SortedMap.prototype.sortBy = function sortBy (mapper, comparator) {
    return SortedMap(
      sortFactory(this, comparator, mapper),
      comparator,
      this.getOptions()
    );
  };

  // @pragma Mutability

  SortedMap.prototype.__iterator = function __iterator (type, reverse) {
    return this._factory.createIterator(this, type, reverse);
  };

  SortedMap.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptySortedMap(this._comparator, this._options);
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeSortedMap(
      this._comparator,
      this._options,
      this.size,
      this._root,
      ownerID
    );
  };

  SortedMap.prototype.checkConsistency = function checkConsistency (printFlag) {
    var this$1 = this;

    if (this._root) {
      if (!(this.size > 0)) {
        return 1;
      }
      return this._root.checkConsistency(printFlag);
    } else if (!(this.size === 0)) {
      return 2;
    }

    var n = 0;
    var prevKey;
    this.keySeq().forEach(function (key) {
      if (n && !(this$1._comparator(prevKey, key) < 0)) {
        return 3;
      }
      prevKey = key;
      n++;
    });

    if (this.size !== n) {
      return 4;
    }

    return 0;
  };

  SortedMap.prototype.print = function print (maxDepth) {
    var header = 'SORTED MAP: size=' + this.size;
    if (this._options) {
      header = header + ', options=' + JSON.stringify(this._options);
    }
    // eslint-disable-next-line
    console.log(header);
    if (this._root) {
      this._root.print(1, maxDepth);
    }
    return this;
  };

  SortedMap.prototype.from = function from (key, backwards) {
    var self = this;
    var sequence = Object.create(KeyedSeq).prototype;
    sequence.__iterateUncached = function(fn, reverse) {
      var this$1 = this;

      if (!self._root) {
        return 0;
      }

      var iterations = 0;
      if (backwards) {
        self._root.iterateFromBackwards(
          key,
          function (entry) {
            iterations++;
            return fn(entry[1], entry[0], this$1);
          },
          reverse
        );
      } else {
        self._root.iterateFrom(
          key,
          function (entry) {
            iterations++;
            return fn(entry[1], entry[0], this$1);
          },
          reverse
        );
      }

      return iterations;
    };

    return sequence;
  };

  SortedMap.prototype.fromIndex = function fromIndex (index, backwards) {
    var self = this;
    var sequence = Object.create(KeyedSeq).prototype;
    sequence.__iterateUncached = function(fn, reverse) {
      var this$1 = this;

      if (reverse) {
        throw new Error('fromIndex: reverse mode not supported');
      }

      if (!self._root) {
        return 0;
      }

      var iterations = 0;
      if (backwards) {
        self._root.iterateFromIndexBackwards(
          index,
          function (entry) {
            iterations++;
            return fn(entry[1], entry[0], this$1);
          },
          reverse
        );
      } else {
        self._root.iterateFromIndex(
          index,
          function (entry) {
            iterations++;
            return fn(entry[1], entry[0], this$1);
          },
          reverse
        );
      }

      return iterations;
    };

    return sequence;
  };

  return SortedMap;
}(Map));

SortedMap.isSortedMap = isSortedMap;

SortedMap.defaultComparator = defaultComparator$1;
SortedMap.defaultOptions = {
  type: 'btree',
};

var SortedMapPrototype = SortedMap.prototype;
SortedMapPrototype[IS_SORTED_SYMBOL] = true;
SortedMapPrototype[DELETE] = SortedMapPrototype.remove;
SortedMapPrototype.removeIn = SortedMapPrototype.deleteIn;
SortedMapPrototype.removeAll = SortedMapPrototype.deleteAll;

function makeSortedMap(comparator, options, size, root, ownerID) {
  var map = Object.create(SortedMapPrototype);
  map._comparator = comparator || SortedMap.defaultComparator;
  map._options = options || SortedMap.defaultOptions;
  map.size = size;
  map._root = root;
  map._factory = SortedMap.getFactory(map._options);
  map.__ownerID = ownerID;
  map.__altered = false;

  if (map._options.btreeOrder && map._options.btreeOrder < 3) {
    throw new Error(
      'SortedMap: minimum value of options.btreeOrder is 3, but got: ' +
        map._options.btreeOrder
    );
  }

  if (!map._factory) {
    throw new Error('SortedMap type not supported: ' + map._options.type);
  }

  return map;
}

var DEFAULT_EMPTY_MAP;
function emptySortedMap(comparator, options) {
  if (
    comparator === SortedMap.defaultComparator &&
    options === SortedMap.defaultOptions
  ) {
    return (
      DEFAULT_EMPTY_MAP ||
      (DEFAULT_EMPTY_MAP = makeSortedMap(
        SortedMap.defaultComparator,
        SortedMap.defaultOptions,
        0
      ))
    );
  }
  return makeSortedMap(comparator, options, 0);
}

function updateMap$1(map, k, v, fast) {
  var remove = v === NOT_SET;
  var root = map._root;
  var newRoot;
  var newSize;
  if (!root) {
    if (remove) {
      return map;
    }
    newSize = 1;
    var entries = [[k, v]];
    newRoot = map._factory.createNode(
      map._comparator,
      map._options,
      map.__ownerID,
      entries
    );
  } else {
    var didChangeSize = MakeRef();
    var didAlter = MakeRef();

    if (remove) {
      if (fast) {
        newRoot = map._root.fastRemove(
          map.__ownerID,
          k,
          didChangeSize,
          didAlter
        );
      } else {
        newRoot = map._root.remove(map.__ownerID, k, didChangeSize, didAlter);
      }
    } else {
      newRoot = map._root.upsert(map.__ownerID, k, v, didChangeSize, didAlter);
    }
    if (!GetRef(didAlter)) {
      return map;
    }
    newSize = map.size + (GetRef(didChangeSize) ? (remove ? -1 : 1) : 0);
    if (newSize === 0) {
      newRoot = undefined;
    }
  }
  if (map.__ownerID) {
    map.size = newSize;
    map._root = newRoot;
    map.__altered = true;
    return map;
  }
  return newRoot
    ? makeSortedMap(map._comparator, map._options, newSize, newRoot)
    : emptySortedMap(map._comparator, map._options);
}

function defaultComparator$1(a, b) {
  if (is(a, b)) {
    return 0;
  }

  var ta = typeof a;
  var tb = typeof b;

  if (ta !== tb) {
    return ta < tb ? -1 : 1;
  }

  switch (ta) {
    case 'undefined':
      // we should not get here and is above should take care of this case
      break;
    case 'object':
      // Take care of null cases then convert objects to strings
      if (a === null) {
        return 1;
      }
      if (b === null) {
        return -1;
      }
      a = a.toString();
      b = b.toString();
      break;
    case 'boolean':
      // default comparisons work
      break;
    case 'number':
      // take care of NaN
      if (is(a, NaN)) {
        return 1;
      }
      if (is(b, NaN)) {
        return -1;
      }
      // for all other cases the
      // default comparisons work
      break;
    case 'string':
      // default comparisons work
      break;
    case 'symbol':
      // convert symbols to strings
      a = a.toString();
      b = b.toString();
      break;
    case 'function':
      // convert functions to strings
      a = a.toString();
      b = b.toString();
      break;
    default:
      // we should not get here as all types are covered
      break;
  }

  return a < b ? -1 : a > b ? 1 : 0;
}

//
// Register all the factories
//
SortedMap.getFactory = function(options) {
  var type =
    options && options.type ? options.type : SortedMap.defaultOptions.type;

  return SortedMap.factories[type];
};

SortedMap.factories = {
  btree: new SortedMapBtreeNodeFactory(),
};

var IS_STACK_SYMBOL = '@@__IMMUTABLE_STACK__@@';

function isStack(maybeStack) {
  return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}

var Stack = (function (IndexedCollection$$1) {
  function Stack(value) {
    return value === null || value === undefined
      ? emptyStack()
      : isStack(value) ? value : emptyStack().pushAll(value);
  }

  if ( IndexedCollection$$1 ) Stack.__proto__ = IndexedCollection$$1;
  Stack.prototype = Object.create( IndexedCollection$$1 && IndexedCollection$$1.prototype );
  Stack.prototype.constructor = Stack;

  Stack.of = function of (/*...values*/) {
    return this(arguments);
  };

  Stack.prototype.toString = function toString () {
    return this.__toString('Stack [', ']');
  };

  // @pragma Access

  Stack.prototype.get = function get (index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);
    while (head && index--) {
      head = head.next;
    }
    return head ? head.value : notSetValue;
  };

  Stack.prototype.peek = function peek () {
    return this._head && this._head.value;
  };

  // @pragma Modification

  Stack.prototype.push = function push (/*...values*/) {
    var arguments$1 = arguments;

    if (arguments.length === 0) {
      return this;
    }
    var newSize = this.size + arguments.length;
    var head = this._head;
    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments$1[ii],
        next: head,
      };
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pushAll = function pushAll (iter) {
    iter = IndexedCollection$$1(iter);
    if (iter.size === 0) {
      return this;
    }
    if (this.size === 0 && isStack(iter)) {
      return iter;
    }
    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.__iterate(function (value) {
      newSize++;
      head = {
        value: value,
        next: head,
      };
    }, /* reverse */ true);
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pop = function pop () {
    return this.slice(1);
  };

  Stack.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._head = undefined;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyStack();
  };

  Stack.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end, this.size);
    if (resolvedEnd !== this.size) {
      // super.slice(begin, end);
      return IndexedCollection$$1.prototype.slice.call(this, begin, end);
    }
    var newSize = this.size - resolvedBegin;
    var head = this._head;
    while (resolvedBegin--) {
      head = head.next;
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  // @pragma Mutability

  Stack.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyStack();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeStack(this.size, this._head, ownerID, this.__hash);
  };

  // @pragma Iteration

  Stack.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return new ArraySeq(this.toArray()).__iterate(
        function (v, k) { return fn(v, k, this$1); },
        reverse
      );
    }
    var iterations = 0;
    var node = this._head;
    while (node) {
      if (fn(node.value, iterations++, this$1) === false) {
        break;
      }
      node = node.next;
    }
    return iterations;
  };

  Stack.prototype.__iterator = function __iterator (type, reverse) {
    if (reverse) {
      return new ArraySeq(this.toArray()).__iterator(type, reverse);
    }
    var iterations = 0;
    var node = this._head;
    return new Iterator(function () {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }
      return iteratorDone();
    });
  };

  return Stack;
}(IndexedCollection));

Stack.isStack = isStack;

var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype['@@transducer/init'] = StackPrototype.asMutable = asMutable;
StackPrototype['@@transducer/step'] = function(result, arr) {
  return result.unshift(arr);
};
StackPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

function makeStack(size, head, ownerID, hash) {
  var map = Object.create(StackPrototype);
  map.size = size;
  map._head = head;
  map.__ownerID = ownerID;
  map.__hash = hash;
  map.__altered = false;
  return map;
}

var EMPTY_STACK;
function emptyStack() {
  return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}

var IS_SET_SYMBOL = '@@__IMMUTABLE_SET__@@';

function isSet(maybeSet) {
  return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}

function isOrderedSet(maybeOrderedSet) {
  return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    !isCollection(b) ||
    (a.size !== undefined && b.size !== undefined && a.size !== b.size) ||
    (a.__hash !== undefined &&
      b.__hash !== undefined &&
      a.__hash !== b.__hash) ||
    isKeyed(a) !== isKeyed(b) ||
    isIndexed(a) !== isIndexed(b) ||
    isOrdered(a) !== isOrdered(b) ||
    isSorted(a) !== isSorted(b)
  ) {
    return false;
  }

  if (a.size === 0 && b.size === 0) {
    return true;
  }

  var notAssociative = !isAssociative(a);

  if (isOrdered(a)) {
    var entries = a.entries();
    return (
      b.every(function (v, k) {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done
    );
  }

  var flipped = false;

  if (a.size === undefined) {
    if (b.size === undefined) {
      if (typeof a.cacheResult === 'function') {
        a.cacheResult();
      }
    } else {
      flipped = true;
      var _ = a;
      a = b;
      b = _;
    }
  }

  var allEqual = true;
  var bSize = b.__iterate(function (v, k) {
    if (
      notAssociative
        ? !a.has(v)
        : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)
    ) {
      allEqual = false;
      return false;
    }
  });

  return allEqual && a.size === bSize;
}

/**
 * Contributes additional methods to a constructor
 */
function mixin(ctor, methods) {
  var keyCopier = function (key) {
    ctor.prototype[key] = methods[key];
  };
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols &&
    Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}

function toJS(value) {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (!isCollection(value)) {
    if (!isDataStructure(value)) {
      return value;
    }
    value = Seq(value);
  }
  if (isKeyed(value)) {
    var result$1 = {};
    value.__iterate(function (v, k) {
      result$1[k] = toJS(v);
    });
    return result$1;
  }
  var result = [];
  value.__iterate(function (v) {
    result.push(toJS(v));
  });
  return result;
}

function isSortedSet(maybeSortedSet) {
  return isSet(maybeSortedSet) && isSorted(maybeSortedSet);
}

var Set = (function (SetCollection$$1) {
  function Set(value) {
    return value === null || value === undefined
      ? emptySet()
      : isSet(value) && !isOrdered(value) && !isSorted(value)
        ? value
        : emptySet().withMutations(function (set) {
            var iter = SetCollection$$1(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v) { return set.add(v); });
          });
  }

  if ( SetCollection$$1 ) Set.__proto__ = SetCollection$$1;
  Set.prototype = Object.create( SetCollection$$1 && SetCollection$$1.prototype );
  Set.prototype.constructor = Set;

  Set.of = function of (/*...values*/) {
    return this(arguments);
  };

  Set.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  Set.intersect = function intersect (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.intersect.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.union = function union (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.union.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.prototype.toString = function toString () {
    return this.__toString('Set {', '}');
  };

  // @pragma Access

  Set.prototype.has = function has (value) {
    return this._map.has(value);
  };

  // @pragma Modification

  Set.prototype.add = function add (value) {
    return updateSet(this, this._map.set(value, value));
  };

  Set.prototype.remove = function remove (value) {
    return updateSet(this, this._map.remove(value));
  };

  Set.prototype.clear = function clear () {
    return updateSet(this, this._map.clear());
  };

  // @pragma Composition

  Set.prototype.map = function map (mapper, context) {
    var this$1 = this;

    var removes = [];
    var adds = [];
    this.forEach(function (value) {
      var mapped = mapper.call(context, value, value, this$1);
      if (mapped !== value) {
        removes.push(value);
        adds.push(mapped);
      }
    });
    return this.withMutations(function (set) {
      removes.forEach(function (value) { return set.remove(value); });
      adds.forEach(function (value) { return set.add(value); });
    });
  };

  Set.prototype.union = function union () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    iters = iters.filter(function (x) { return x.size !== 0; });
    if (iters.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }
    return this.withMutations(function (set) {
      for (var ii = 0; ii < iters.length; ii++) {
        SetCollection$$1(iters[ii]).forEach(function (value) { return set.add(value); });
      }
    });
  };

  Set.prototype.intersect = function intersect () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection$$1(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (!iters.every(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.subtract = function subtract () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection$$1(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (iters.some(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator));
  };

  Set.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator, mapper));
  };

  Set.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered();
  };

  Set.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._map.__iterate(function (k) { return fn(k, k, this$1); }, reverse);
  };

  Set.prototype.__iterator = function __iterator (type, reverse) {
    return this._map.__iterator(type, reverse);
  };

  Set.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }
    return this.__make(newMap, ownerID);
  };

  return Set;
}(SetCollection));

Set.isSet = isSet;

var SetPrototype = Set.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype['@@transducer/init'] = SetPrototype.asMutable = asMutable;
SetPrototype['@@transducer/step'] = function(result, arr) {
  return result.add(arr);
};
SetPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;

function updateSet(set, newMap) {
  if (set.__ownerID) {
    set.size = newMap.size;
    set._map = newMap;
    return set;
  }
  return newMap === set._map
    ? set
    : newMap.size === 0 ? set.__empty() : set.__make(newMap);
}

function makeSet(map, ownerID) {
  var set = Object.create(SetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_SET;
function emptySet() {
  return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * Original source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var SortedSet = (function (Set$$1) {
  function SortedSet(value, comparator, options) {
    if (!comparator) {
      if (this instanceof SortedSet) {
        comparator = this._map && this.getComparator();
      }
      if (!comparator) {
        comparator = SortedSet.defaultComparator;
      }
    }
    if (!options) {
      if (this instanceof SortedSet) {
        options = this._map && this.getOptions();
      }
      if (!options) {
        options = SortedSet.defaultOptions;
      }
    }
    return value === null || value === undefined
      ? emptySortedSet(comparator, options)
      : isSortedSet(value) &&
        value.getComparator() === comparator &&
        value.getOptions() === options
        ? value
        : emptySortedSet(comparator, options).withMutations(function (set) {
            set.pack(value);
          });
  }

  if ( Set$$1 ) SortedSet.__proto__ = Set$$1;
  SortedSet.prototype = Object.create( Set$$1 && Set$$1.prototype );
  SortedSet.prototype.constructor = SortedSet;

  SortedSet.of = function of (/*...values*/) {
    return this(arguments);
  };

  SortedSet.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  SortedSet.prototype.toString = function toString () {
    return this.__toString('SortedSet {', '}');
  };

  // @pragma Access

  SortedSet.prototype.getComparator = function getComparator () {
    return this._map.getComparator();
  };

  SortedSet.prototype.getOptions = function getOptions () {
    return this._map.getOptions();
  };

  // @pragma Modification

  SortedSet.prototype.pack = function pack (value) {
    var seq =
      value === undefined
        ? undefined
        : SetCollection(value)
            .toKeyedSeq()
            .mapKeys(function (k, v) { return v; });
    return updateSortedSet(this, this._map.pack(seq));
  };

  SortedSet.prototype.from = function from (value, backwards) {
    return this._map.from(value, backwards).toSetSeq();
  };

  SortedSet.prototype.fromIndex = function fromIndex (index, backwards) {
    return this._map.fromIndex(index, backwards).toSetSeq();
  };

  SortedSet.prototype.sort = function sort (comparator) {
    // Late binding
    return SortedSet(this, comparator, this.getOptions());
  };

  SortedSet.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return SortedSet(mapFactory(this, mapper), comparator, this.getOptions());
  };

  SortedSet.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }
    return this.__make(newMap, ownerID);
  };

  return SortedSet;
}(Set));

SortedSet.isSortedSet = isSortedSet;

SortedSet.defaultComparator = SortedMap.defaultComparator;
SortedSet.defaultOptions = SortedMap.defaultOptions;

var SortedSetPrototype = SortedSet.prototype;
SortedSetPrototype[IS_SORTED_SYMBOL] = true;

SortedSetPrototype.__empty = function() {
  return emptySortedSet(this.getComparator(), this.getOptions());
};
SortedSetPrototype.__make = makeSortedSet;

function updateSortedSet(set, newMap) {
  if (set.__ownerID) {
    set.size = newMap.size;
    set._map = newMap;
    return set;
  }
  return newMap === set._map
    ? set
    : newMap.size === 0 ? set.__empty() : set.__make(newMap);
}

function makeSortedSet(map, ownerID) {
  var set = Object.create(SortedSetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

function emptySortedSet(comparator, options) {
  return makeSortedSet(emptySortedMap(comparator, options));
}

/**
 * Returns a lazy seq of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1, and end to
 * infinity. When start is equal to end, returns empty list.
 */
var Range = (function (IndexedSeq$$1) {
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      return new Range(start, end, step);
    }
    invariant(step !== 0, 'Cannot step a Range by 0');
    start = start || 0;
    if (end === undefined) {
      end = Infinity;
    }
    step = step === undefined ? 1 : Math.abs(step);
    if (end < start) {
      step = -step;
    }
    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }
      EMPTY_RANGE = this;
    }
  }

  if ( IndexedSeq$$1 ) Range.__proto__ = IndexedSeq$$1;
  Range.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  Range.prototype.constructor = Range;

  Range.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Range []';
    }
    return (
      'Range [ ' +
      this._start +
      '...' +
      this._end +
      (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]'
    );
  };

  Range.prototype.get = function get (index, notSetValue) {
    return this.has(index)
      ? this._start + wrapIndex(this, index) * this._step
      : notSetValue;
  };

  Range.prototype.includes = function includes (searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return (
      possibleIndex >= 0 &&
      possibleIndex < this.size &&
      possibleIndex === Math.floor(possibleIndex)
    );
  };

  Range.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    begin = resolveBegin(begin, this.size);
    end = resolveEnd(end, this.size);
    if (end <= begin) {
      return new Range(0, 0);
    }
    return new Range(
      this.get(begin, this._end),
      this.get(end, this._end),
      this._step
    );
  };

  Range.prototype.indexOf = function indexOf (searchValue) {
    var offsetValue = searchValue - this._start;
    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;
      if (index >= 0 && index < this.size) {
        return index;
      }
    }
    return -1;
  };

  Range.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    return this.indexOf(searchValue);
  };

  Range.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    while (i !== size) {
      if (fn(value, reverse ? size - ++i : i++, this$1) === false) {
        break;
      }
      value += reverse ? -step : step;
    }
    return i;
  };

  Range.prototype.__iterator = function __iterator (type, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var v = value;
      value += reverse ? -step : step;
      return iteratorValue(type, reverse ? size - ++i : i++, v);
    });
  };

  Range.prototype.equals = function equals (other) {
    return other instanceof Range
      ? this._start === other._start &&
          this._end === other._end &&
          this._step === other._step
      : deepEqual(this, other);
  };

  return Range;
}(IndexedSeq));

var EMPTY_RANGE;

function getIn$1(collection, searchKeyPath, notSetValue) {
  var keyPath = coerceKeyPath(searchKeyPath);
  var i = 0;
  while (i !== keyPath.length) {
    collection = get(collection, keyPath[i++], NOT_SET);
    if (collection === NOT_SET) {
      return notSetValue;
    }
  }
  return collection;
}

function getIn$$1(searchKeyPath, notSetValue) {
  return getIn$1(this, searchKeyPath, notSetValue);
}

function hasIn$1(collection, keyPath) {
  return getIn$1(collection, keyPath, NOT_SET) !== NOT_SET;
}

function hasIn$$1(searchKeyPath) {
  return hasIn$1(this, searchKeyPath);
}

function toObject() {
  assertNotInfinite(this.size);
  var object = {};
  this.__iterate(function (v, k) {
    object[k] = v;
  });
  return object;
}

// Note: all of these methods are deprecated.
Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;

Collection.Iterator = Iterator;

mixin(Collection, {
  // ### Conversion to other types

  toArray: function toArray() {
    assertNotInfinite(this.size);
    var array = new Array(this.size || 0);
    var useTuples = isKeyed(this);
    var i = 0;
    this.__iterate(function (v, k) {
      // Keyed collections produce an array of tuples.
      array[i++] = useTuples ? [k, v] : v;
    });
    return array;
  },

  toIndexedSeq: function toIndexedSeq() {
    return new ToIndexedSequence(this);
  },

  toJS: function toJS$1() {
    return toJS(this);
  },

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, true);
  },

  toMap: function toMap() {
    // Use Late Binding here to solve the circular dependency.
    return Map(this.toKeyedSeq());
  },

  toObject: toObject,

  toOrderedMap: function toOrderedMap() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedMap(this.toKeyedSeq());
  },

  toSortedMap: function toSortedMap(comparator, options) {
    // Use Late Binding here to solve the circular dependency.
    return SortedMap(this.toKeyedSeq(), comparator, options);
  },

  toSortedSet: function toSortedSet(comparator, options) {
    // Use Late Binding here to solve the circular dependency.
    return SortedSet(
      isKeyed(this) ? this.valueSeq() : this,
      comparator,
      options
    );
  },

  toOrderedSet: function toOrderedSet() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
  },

  toSet: function toSet() {
    // Use Late Binding here to solve the circular dependency.
    return Set(isKeyed(this) ? this.valueSeq() : this);
  },

  toSetSeq: function toSetSeq() {
    return new ToSetSequence(this);
  },

  toSeq: function toSeq() {
    return isIndexed(this)
      ? this.toIndexedSeq()
      : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
  },

  toStack: function toStack() {
    // Use Late Binding here to solve the circular dependency.
    return Stack(isKeyed(this) ? this.valueSeq() : this);
  },

  toList: function toList() {
    // Use Late Binding here to solve the circular dependency.
    return List(isKeyed(this) ? this.valueSeq() : this);
  },

  // ### Common JavaScript methods and properties

  toString: function toString() {
    return '[Collection]';
  },

  __toString: function __toString(head, tail) {
    if (this.size === 0) {
      return head + tail;
    }
    return (
      head +
      ' ' +
      this.toSeq()
        .map(this.__toStringMapper)
        .join(', ') +
      ' ' +
      tail
    );
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  concat: function concat() {
    var values = [], len = arguments.length;
    while ( len-- ) values[ len ] = arguments[ len ];

    return reify(this, concatFactory(this, values));
  },

  includes: function includes(searchValue) {
    return this.some(function (value) { return is(value, searchValue); });
  },

  entries: function entries() {
    return this.__iterator(ITERATE_ENTRIES);
  },

  every: function every(predicate, context) {
    assertNotInfinite(this.size);
    var returnValue = true;
    this.__iterate(function (v, k, c) {
      if (!predicate.call(context, v, k, c)) {
        returnValue = false;
        return false;
      }
    });
    return returnValue;
  },

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, true));
  },

  find: function find(predicate, context, notSetValue) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[1] : notSetValue;
  },

  forEach: function forEach(sideEffect, context) {
    assertNotInfinite(this.size);
    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
  },

  join: function join(separator) {
    assertNotInfinite(this.size);
    separator = separator !== undefined ? '' + separator : ',';
    var joined = '';
    var isFirst = true;
    this.__iterate(function (v) {
      isFirst ? (isFirst = false) : (joined += separator);
      joined += v !== null && v !== undefined ? v.toString() : '';
    });
    return joined;
  },

  keys: function keys() {
    return this.__iterator(ITERATE_KEYS);
  },

  map: function map(mapper, context) {
    return reify(this, mapFactory(this, mapper, context));
  },

  reduce: function reduce$1(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      false
    );
  },

  reduceRight: function reduceRight(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      true
    );
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, true));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, true));
  },

  some: function some(predicate, context) {
    return !this.every(not(predicate), context);
  },

  sort: function sort(comparator) {
    return reify(this, sortFactory(this, comparator));
  },

  partialSort: function partialSort(n, comparator) {
    return reify(this, partialSortFactory(this, n, comparator));
  },

  incSort: function incSort(comparator) {
    return reify(this, incSortFactory(this, comparator, null, true));
  },

  values: function values() {
    return this.__iterator(ITERATE_VALUES);
  },

  // ### More sequential methods

  butLast: function butLast() {
    return this.slice(0, -1);
  },

  isEmpty: function isEmpty() {
    return this.size !== undefined ? this.size === 0 : !this.some(function () { return true; });
  },

  count: function count(predicate, context) {
    return ensureSize(
      predicate ? this.toSeq().filter(predicate, context) : this
    );
  },

  countBy: function countBy(grouper, context) {
    return countByFactory(this, grouper, context);
  },

  equals: function equals(other) {
    return deepEqual(this, other);
  },

  entrySeq: function entrySeq() {
    var collection = this;
    if (collection._cache) {
      // We cache as an entries array, so we can just return the cache!
      return new ArraySeq(collection._cache);
    }
    var entriesSequence = collection
      .toSeq()
      .map(entryMapper)
      .toIndexedSeq();
    entriesSequence.fromEntrySeq = function () { return collection.toSeq(); };
    return entriesSequence;
  },

  filterNot: function filterNot(predicate, context) {
    return this.filter(not(predicate), context);
  },

  findEntry: function findEntry(predicate, context, notSetValue) {
    var found = notSetValue;
    this.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        found = [k, v];
        return false;
      }
    });
    return found;
  },

  findKey: function findKey(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry && entry[0];
  },

  findLast: function findLast(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .find(predicate, context, notSetValue);
  },

  findLastEntry: function findLastEntry(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .findEntry(predicate, context, notSetValue);
  },

  findLastKey: function findLastKey(predicate, context) {
    return this.toKeyedSeq()
      .reverse()
      .findKey(predicate, context);
  },

  first: function first(notSetValue) {
    return this.find(returnTrue, null, notSetValue);
  },

  flatMap: function flatMap(mapper, context) {
    return reify(this, flatMapFactory(this, mapper, context));
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, true));
  },

  fromEntrySeq: function fromEntrySeq() {
    return new FromEntriesSequence(this);
  },

  get: function get(searchKey, notSetValue) {
    return this.find(function (_, key) { return is(key, searchKey); }, undefined, notSetValue);
  },

  getIn: getIn$$1,

  groupBy: function groupBy(grouper, context) {
    return groupByFactory(this, grouper, context);
  },

  has: function has(searchKey) {
    return this.get(searchKey, NOT_SET) !== NOT_SET;
  },

  hasIn: hasIn$$1,

  isSubset: function isSubset(iter) {
    iter = typeof iter.includes === 'function' ? iter : Collection(iter);
    return this.every(function (value) { return iter.includes(value); });
  },

  isSuperset: function isSuperset(iter) {
    iter = typeof iter.isSubset === 'function' ? iter : Collection(iter);
    return iter.isSubset(this);
  },

  keyOf: function keyOf(searchValue) {
    return this.findKey(function (value) { return is(value, searchValue); });
  },

  keySeq: function keySeq() {
    return this.toSeq()
      .map(keyMapper)
      .toIndexedSeq();
  },

  last: function last(notSetValue) {
    return this.toSeq()
      .reverse()
      .first(notSetValue);
  },

  lastKeyOf: function lastKeyOf(searchValue) {
    return this.toKeyedSeq()
      .reverse()
      .keyOf(searchValue);
  },

  max: function max(comparator) {
    return maxFactory(this, comparator);
  },

  maxBy: function maxBy(mapper, comparator) {
    return maxFactory(this, comparator, mapper);
  },

  min: function min(comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator
    );
  },

  minBy: function minBy(mapper, comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator,
      mapper
    );
  },

  rest: function rest() {
    return this.slice(1);
  },

  skip: function skip(amount) {
    return amount === 0 ? this : this.slice(Math.max(0, amount));
  },

  skipLast: function skipLast(amount) {
    return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, true));
  },

  skipUntil: function skipUntil(predicate, context) {
    return this.skipWhile(not(predicate), context);
  },

  sortBy: function sortBy(mapper, comparator) {
    return reify(this, sortFactory(this, comparator, mapper));
  },

  partialSortBy: function partialSortBy(n, mapper, comparator) {
    return reify(this, partialSortFactory(this, n, comparator, mapper));
  },

  incSortBy: function incSortBy(mapper, comparator) {
    return reify(this, incSortFactory(this, comparator, mapper, true));
  },

  take: function take(amount) {
    return this.slice(0, Math.max(0, amount));
  },

  takeLast: function takeLast(amount) {
    return this.slice(-Math.max(0, amount));
  },

  takeWhile: function takeWhile(predicate, context) {
    return reify(this, takeWhileFactory(this, predicate, context));
  },

  takeUntil: function takeUntil(predicate, context) {
    return this.takeWhile(not(predicate), context);
  },

  update: function update(fn) {
    return fn(this);
  },

  valueSeq: function valueSeq() {
    return this.toIndexedSeq();
  },

  // ### Hashable Object

  hashCode: function hashCode() {
    return this.__hash || (this.__hash = hashCollection(this));
  },

  // ### Internal

  // abstract __iterate(fn, reverse)

  // abstract __iterator(type, reverse)
});

var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;
CollectionPrototype.inspect = CollectionPrototype.toSource = function() {
  return this.toString();
};
CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;

mixin(KeyedCollection, {
  // ### More sequential methods

  flip: function flip() {
    return reify(this, flipFactory(this));
  },

  mapEntries: function mapEntries(mapper, context) {
    var this$1 = this;

    var iterations = 0;
    return reify(
      this,
      this.toSeq()
        .map(function (v, k) { return mapper.call(context, [k, v], iterations++, this$1); })
        .fromEntrySeq()
    );
  },

  mapKeys: function mapKeys(mapper, context) {
    var this$1 = this;

    return reify(
      this,
      this.toSeq()
        .flip()
        .map(function (k, v) { return mapper.call(context, k, v, this$1); })
        .flip()
    );
  },
});

var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;
KeyedCollectionPrototype.__toStringMapper = function (v, k) { return quoteString(k) + ': ' + quoteString(v); };

mixin(IndexedCollection, {
  // ### Conversion to other types

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, false);
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, false));
  },

  findIndex: function findIndex(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  indexOf: function indexOf(searchValue) {
    var key = this.keyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  lastIndexOf: function lastIndexOf(searchValue) {
    var key = this.lastKeyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, false));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, false));
  },

  splice: function splice(index, removeNum /*, ...values*/) {
    var numArgs = arguments.length;
    removeNum = Math.max(removeNum || 0, 0);
    if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
      return this;
    }
    // If index is negative, it should resolve relative to the size of the
    // collection. However size may be expensive to compute if not cached, so
    // only call count() if the number is in fact negative.
    index = resolveBegin(index, index < 0 ? this.count() : this.size);
    var spliced = this.slice(0, index);
    return reify(
      this,
      numArgs === 1
        ? spliced
        : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
    );
  },

  // ### More collection methods

  findLastIndex: function findLastIndex(predicate, context) {
    var entry = this.findLastEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  first: function first(notSetValue) {
    return this.get(0, notSetValue);
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, false));
  },

  get: function get(index, notSetValue) {
    index = wrapIndex(this, index);
    return index < 0 ||
      (this.size === Infinity || (this.size !== undefined && index > this.size))
      ? notSetValue
      : this.find(function (_, key) { return key === index; }, undefined, notSetValue);
  },

  has: function has(index) {
    index = wrapIndex(this, index);
    return (
      index >= 0 &&
      (this.size !== undefined
        ? this.size === Infinity || index < this.size
        : this.indexOf(index) !== -1)
    );
  },

  interpose: function interpose(separator) {
    return reify(this, interposeFactory(this, separator));
  },

  interleave: function interleave(/*...collections*/) {
    var collections = [this].concat(arrCopy(arguments));
    var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
    var interleaved = zipped.flatten(true);
    if (zipped.size) {
      interleaved.size = zipped.size * collections.length;
    }
    return reify(this, interleaved);
  },

  keySeq: function keySeq() {
    return Range(0, this.size);
  },

  last: function last(notSetValue) {
    return this.get(-1, notSetValue);
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, false));
  },

  incSort: function incSort(comparator) {
    return reify(this, incSortFactory(this, comparator, null, false));
  },

  incSortBy: function incSortBy(mapper, comparator) {
    return reify(this, incSortFactory(this, comparator, mapper, false));
  },

  zip: function zip(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections));
  },

  zipAll: function zipAll(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections, true));
  },

  zipWith: function zipWith(zipper /*, ...collections */) {
    var collections = arrCopy(arguments);
    collections[0] = this;
    return reify(this, zipWithFactory(this, zipper, collections));
  },
});

var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;

mixin(SetCollection, {
  // ### ES6 Collection methods (ES6 Array and Map)

  get: function get(value, notSetValue) {
    return this.has(value) ? value : notSetValue;
  },

  includes: function includes(value) {
    return this.has(value);
  },

  // ### More sequential methods

  keySeq: function keySeq() {
    return this.valueSeq();
  },
});

SetCollection.prototype.has = CollectionPrototype.includes;
SetCollection.prototype.contains = SetCollection.prototype.includes;

// Mixin subclasses

mixin(KeyedSeq, KeyedCollection.prototype);
mixin(IndexedSeq, IndexedCollection.prototype);
mixin(SetSeq, SetCollection.prototype);

// #pragma Helper functions

function reduce(collection, reducer, reduction, context, useFirst, reverse) {
  assertNotInfinite(collection.size);
  collection.__iterate(function (v, k, c) {
    if (useFirst) {
      useFirst = false;
      reduction = v;
    } else {
      reduction = reducer.call(context, reduction, v, k, c);
    }
  }, reverse);
  return reduction;
}

function keyMapper(v, k) {
  return k;
}

function entryMapper(v, k) {
  return [k, v];
}

function not(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}

function neg(predicate) {
  return function() {
    return -predicate.apply(this, arguments);
  };
}

function defaultZipper() {
  return arrCopy(arguments);
}

function defaultNegComparator(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}

function hashCollection(collection) {
  if (collection.size === Infinity) {
    return 0;
  }
  var ordered = isOrdered(collection);
  var keyed = isKeyed(collection);
  var h = ordered ? 1 : 0;
  var size = collection.__iterate(
    keyed
      ? ordered
        ? function (v, k) {
            h = (31 * h + hashMerge(hash(v), hash(k))) | 0;
          }
        : function (v, k) {
            h = (h + hashMerge(hash(v), hash(k))) | 0;
          }
      : ordered
        ? function (v) {
            h = (31 * h + hash(v)) | 0;
          }
        : function (v) {
            h = (h + hash(v)) | 0;
          }
  );
  return murmurHashOfSize(size, h);
}

function murmurHashOfSize(size, h) {
  h = imul(h, 0xcc9e2d51);
  h = imul((h << 15) | (h >>> -15), 0x1b873593);
  h = imul((h << 13) | (h >>> -13), 5);
  h = ((h + 0xe6546b64) | 0) ^ size;
  h = imul(h ^ (h >>> 16), 0x85ebca6b);
  h = imul(h ^ (h >>> 13), 0xc2b2ae35);
  h = smi(h ^ (h >>> 16));
  return h;
}

function hashMerge(a, b) {
  return (a ^ (b + 0x9e3779b9 + (a << 6) + (a >> 2))) | 0; // int
}

var OrderedSet = (function (Set$$1) {
  function OrderedSet(value) {
    return value === null || value === undefined
      ? emptyOrderedSet()
      : isOrderedSet(value)
        ? value
        : emptyOrderedSet().withMutations(function (set) {
            var iter = SetCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v) { return set.add(v); });
          });
  }

  if ( Set$$1 ) OrderedSet.__proto__ = Set$$1;
  OrderedSet.prototype = Object.create( Set$$1 && Set$$1.prototype );
  OrderedSet.prototype.constructor = OrderedSet;

  OrderedSet.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedSet.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  OrderedSet.prototype.toString = function toString () {
    return this.__toString('OrderedSet {', '}');
  };

  return OrderedSet;
}(Set));

OrderedSet.isOrderedSet = isOrderedSet;

var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;

OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;

function makeOrderedSet(map, ownerID) {
  var set = Object.create(OrderedSetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_ORDERED_SET;
function emptyOrderedSet() {
  return (
    EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()))
  );
}

var Record = function Record(defaultValues, name) {
  var hasInitialized;

  var RecordType = function Record(values) {
    var this$1 = this;

    if (values instanceof RecordType) {
      return values;
    }
    if (!(this instanceof RecordType)) {
      return new RecordType(values);
    }
    if (!hasInitialized) {
      hasInitialized = true;
      var keys = Object.keys(defaultValues);
      var indices = (RecordTypePrototype._indices = {});
      // Deprecated: left to attempt not to break any external code which
      // relies on a ._name property existing on record instances.
      // Use Record.getDescriptiveName() instead
      RecordTypePrototype._name = name;
      RecordTypePrototype._keys = keys;
      RecordTypePrototype._defaultValues = defaultValues;
      for (var i = 0; i < keys.length; i++) {
        var propName = keys[i];
        indices[propName] = i;
        if (RecordTypePrototype[propName]) {
          /* eslint-disable no-console */
          typeof console === 'object' &&
            console.warn &&
            console.warn(
              'Cannot define ' +
                recordName(this$1) +
                ' with property "' +
                propName +
                '" since that property name is part of the Record API.'
            );
          /* eslint-enable no-console */
        } else {
          setProp(RecordTypePrototype, propName);
        }
      }
    }
    this.__ownerID = undefined;
    this._values = List().withMutations(function (l) {
      l.setSize(this$1._keys.length);
      KeyedCollection(values).forEach(function (v, k) {
        l.set(this$1._indices[k], v === this$1._defaultValues[k] ? undefined : v);
      });
    });
  };

  var RecordTypePrototype = (RecordType.prototype = Object.create(
    RecordPrototype
  ));
  RecordTypePrototype.constructor = RecordType;

  if (name) {
    RecordType.displayName = name;
  }

  return RecordType;
};

Record.prototype.toString = function toString () {
    var this$1 = this;

  var str = recordName(this) + ' { ';
  var keys = this._keys;
  var k;
  for (var i = 0, l = keys.length; i !== l; i++) {
    k = keys[i];
    str += (i ? ', ' : '') + k + ': ' + quoteString(this$1.get(k));
  }
  return str + ' }';
};

Record.prototype.equals = function equals (other) {
  return (
    this === other ||
    (other &&
      this._keys === other._keys &&
      recordSeq(this).equals(recordSeq(other)))
  );
};

Record.prototype.hashCode = function hashCode () {
  return recordSeq(this).hashCode();
};

// @pragma Access

Record.prototype.has = function has (k) {
  return this._indices.hasOwnProperty(k);
};

Record.prototype.get = function get (k, notSetValue) {
  if (!this.has(k)) {
    return notSetValue;
  }
  var index = this._indices[k];
  var value = this._values.get(index);
  return value === undefined ? this._defaultValues[k] : value;
};

// @pragma Modification

Record.prototype.set = function set (k, v) {
  if (this.has(k)) {
    var newValues = this._values.set(
      this._indices[k],
      v === this._defaultValues[k] ? undefined : v
    );
    if (newValues !== this._values && !this.__ownerID) {
      return makeRecord(this, newValues);
    }
  }
  return this;
};

Record.prototype.remove = function remove (k) {
  return this.set(k);
};

Record.prototype.clear = function clear () {
  var newValues = this._values.clear().setSize(this._keys.length);
  return this.__ownerID ? this : makeRecord(this, newValues);
};

Record.prototype.wasAltered = function wasAltered () {
  return this._values.wasAltered();
};

Record.prototype.toSeq = function toSeq () {
  return recordSeq(this);
};

Record.prototype.toJS = function toJS$1 () {
  return toJS(this);
};

Record.prototype.entries = function entries () {
  return this.__iterator(ITERATE_ENTRIES);
};

Record.prototype.__iterator = function __iterator (type, reverse) {
  return recordSeq(this).__iterator(type, reverse);
};

Record.prototype.__iterate = function __iterate (fn, reverse) {
  return recordSeq(this).__iterate(fn, reverse);
};

Record.prototype.__ensureOwner = function __ensureOwner (ownerID) {
  if (ownerID === this.__ownerID) {
    return this;
  }
  var newValues = this._values.__ensureOwner(ownerID);
  if (!ownerID) {
    this.__ownerID = ownerID;
    this._values = newValues;
    return this;
  }
  return makeRecord(this, newValues, ownerID);
};

Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn$$1;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge;
RecordPrototype.mergeWith = mergeWith;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep;
RecordPrototype.mergeDeepWith = mergeDeepWith;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn$$1;
RecordPrototype.update = update$$1;
RecordPrototype.updateIn = updateIn$1;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject =
  CollectionPrototype.toObject;
RecordPrototype.inspect = RecordPrototype.toSource = function() {
  return this.toString();
};

function makeRecord(likeRecord, values, ownerID) {
  var record = Object.create(Object.getPrototypeOf(likeRecord));
  record._values = values;
  record.__ownerID = ownerID;
  return record;
}

function recordName(record) {
  return record.constructor.displayName || record.constructor.name || 'Record';
}

function recordSeq(record) {
  return keyedSeqFromValue(record._keys.map(function (k) { return [k, record.get(k)]; }));
}

function setProp(prototype, name) {
  try {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      },
    });
  } catch (error) {
    // Object.defineProperty failed. Probably IE8.
  }
}

/**
 * Returns a lazy Seq of `value` repeated `times` times. When `times` is
 * undefined, returns an infinite sequence of `value`.
 */
var Repeat = (function (IndexedSeq$$1) {
  function Repeat(value, times) {
    if (!(this instanceof Repeat)) {
      return new Repeat(value, times);
    }
    this._value = value;
    this.size = times === undefined ? Infinity : Math.max(0, times);
    if (this.size === 0) {
      if (EMPTY_REPEAT) {
        return EMPTY_REPEAT;
      }
      EMPTY_REPEAT = this;
    }
  }

  if ( IndexedSeq$$1 ) Repeat.__proto__ = IndexedSeq$$1;
  Repeat.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  Repeat.prototype.constructor = Repeat;

  Repeat.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Repeat []';
    }
    return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
  };

  Repeat.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._value : notSetValue;
  };

  Repeat.prototype.includes = function includes (searchValue) {
    return is(this._value, searchValue);
  };

  Repeat.prototype.slice = function slice (begin, end) {
    var size = this.size;
    return wholeSlice(begin, end, size)
      ? this
      : new Repeat(
          this._value,
          resolveEnd(end, size) - resolveBegin(begin, size)
        );
  };

  Repeat.prototype.reverse = function reverse () {
    return this;
  };

  Repeat.prototype.indexOf = function indexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return 0;
    }
    return -1;
  };

  Repeat.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return this.size;
    }
    return -1;
  };

  Repeat.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var size = this.size;
    var i = 0;
    while (i !== size) {
      if (fn(this$1._value, reverse ? size - ++i : i++, this$1) === false) {
        break;
      }
    }
    return i;
  };

  Repeat.prototype.__iterator = function __iterator (type, reverse) {
    var this$1 = this;

    var size = this.size;
    var i = 0;
    return new Iterator(
      function () { return i === size
          ? iteratorDone()
          : iteratorValue(type, reverse ? size - ++i : i++, this$1._value); }
    );
  };

  Repeat.prototype.equals = function equals (other) {
    return other instanceof Repeat
      ? is(this._value, other._value)
      : deepEqual(other);
  };

  return Repeat;
}(IndexedSeq));

var EMPTY_REPEAT;

function fromJS(value, converter) {
  return fromJSWith(
    [],
    converter || defaultConverter,
    value,
    '',
    converter && converter.length > 2 ? [] : undefined,
    { '': value }
  );
}

function fromJSWith(stack, converter, value, key, keyPath, parentValue) {
  var toSeq = Array.isArray(value)
    ? IndexedSeq
    : isPlainObj(value) ? KeyedSeq : null;
  if (toSeq) {
    if (~stack.indexOf(value)) {
      throw new TypeError('Cannot convert circular structure to Immutable');
    }
    stack.push(value);
    keyPath && key !== '' && keyPath.push(key);
    var converted = converter.call(
      parentValue,
      key,
      toSeq(value).map(function (v, k) { return fromJSWith(stack, converter, v, k, keyPath, value); }
      ),
      keyPath && keyPath.slice()
    );
    stack.pop();
    keyPath && keyPath.pop();
    return converted;
  }
  return value;
}

function defaultConverter(k, v) {
  return isKeyed(v) ? v.toMap() : v.toList();
}

var version = "0.2.11";

// Functional predicates
// Functional read/write API
var Immutable = {
  version: version,

  Collection: Collection,
  // Note: Iterable is deprecated
  Iterable: Collection,

  Seq: Seq,
  Map: Map,
  OrderedMap: OrderedMap,
  SortedMap: SortedMap,
  List: List,
  Stack: Stack,
  Set: Set,
  OrderedSet: OrderedSet,
  SortedSet: SortedSet,

  Record: Record,
  Range: Range,
  Repeat: Repeat,

  is: is,
  fromJS: fromJS,
  hash: hash,

  isImmutable: isImmutable,
  isCollection: isCollection,
  isKeyed: isKeyed,
  isIndexed: isIndexed,
  isAssociative: isAssociative,
  isOrdered: isOrdered,
  isSorted: isSorted,
  isValueObject: isValueObject,
  isSeq: isSeq,
  isList: isList,
  isMap: isMap,
  isOrderedMap: isOrderedMap,
  isSortedMap: isSortedMap,
  isStack: isStack,
  isSet: isSet,
  isOrderedSet: isOrderedSet,
  isSortedSet: isSortedSet,
  isRecord: isRecord,

  get: get,
  getIn: getIn$1,
  has: has,
  hasIn: hasIn$1,
  merge: merge$1,
  mergeDeep: mergeDeep$1,
  mergeWith: mergeWith$1,
  mergeDeepWith: mergeDeepWith$1,
  remove: remove,
  removeIn: removeIn,
  set: set,
  setIn: setIn$1,
  update: update$1,
  updateIn: updateIn,
};

// Note: Iterable is deprecated
var Iterable = Collection;

exports['default'] = Immutable;
exports.version = version;
exports.Collection = Collection;
exports.Iterable = Iterable;
exports.Seq = Seq;
exports.Map = Map;
exports.OrderedMap = OrderedMap;
exports.SortedMap = SortedMap;
exports.List = List;
exports.Stack = Stack;
exports.Set = Set;
exports.OrderedSet = OrderedSet;
exports.SortedSet = SortedSet;
exports.Record = Record;
exports.Range = Range;
exports.Repeat = Repeat;
exports.is = is;
exports.fromJS = fromJS;
exports.hash = hash;
exports.isImmutable = isImmutable;
exports.isCollection = isCollection;
exports.isKeyed = isKeyed;
exports.isIndexed = isIndexed;
exports.isAssociative = isAssociative;
exports.isOrdered = isOrdered;
exports.isSorted = isSorted;
exports.isValueObject = isValueObject;
exports.get = get;
exports.getIn = getIn$1;
exports.has = has;
exports.hasIn = hasIn$1;
exports.merge = merge$1;
exports.mergeDeep = mergeDeep$1;
exports.mergeWith = mergeWith$1;
exports.mergeDeepWith = mergeDeepWith$1;
exports.remove = remove;
exports.removeIn = removeIn;
exports.set = set;
exports.setIn = setIn$1;
exports.update = update$1;
exports.updateIn = updateIn;

Object.defineProperty(exports, '__esModule', { value: true });

})));

}).call(this,require('_process'))
},{"_process":35}],35:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],36:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}]},{},[18]);
