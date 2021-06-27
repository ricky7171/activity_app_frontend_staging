(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateStandartFormat = getDateStandartFormat;
exports.getTimeStandartFormat = getTimeStandartFormat;
exports.monthToText = monthToText;

function getDateStandartFormat() {
  var dateObj = new Date();
  return dateObj.toISOString().split("T")[0];
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }

  return i;
}

function getTimeStandartFormat() {
  var dateObj = new Date();
  var h = dateObj.getHours();
  var m = dateObj.getMinutes();
  var s = dateObj.getSeconds(); // add a zero in front of numbers<10

  m = checkTime(m);
  s = checkTime(s);
  return h + ":" + m + ":" + s;
}

function monthToText(month) {
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month - 1];
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

function render(html, item) {
  var tokens = html.split(/\$\{(.+?)\}/g); //example tokens : 
  //["<div>", "title", "</div><div>", "description", "</div>"]

  var finalHtml = tokens.map(function (token, i) {
    //token can be "<div>" (when i is odd) or "title" (when i is even)
    if (i % 2 == 0) {
      //if even, that means token is just a html
      return token;
    } else {
      //if odd, that means token is a key of item. 
      return item[token];
    }
  }).join('');
  return finalHtml;
}

},{}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActivities = getActivities;
exports.getActivitiesByMonthAndYear = getActivitiesByMonthAndYear;
exports.addActivity = addActivity;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var api = _interopRequireWildcard(require("./../infra/api"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getActivities() {
  return _getActivities.apply(this, arguments);
}

function _getActivities() {
  _getActivities = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var result, response;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;
            response = null;
            _context.prev = 2;
            _context.next = 5;
            return api.requestApi("activity.get");

          case 5:
            response = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            response = false;

          case 11:
            result = api.processResponse(response);
            return _context.abrupt("return", result);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));
  return _getActivities.apply(this, arguments);
}

function getActivitiesByMonthAndYear(_x, _x2) {
  return _getActivitiesByMonthAndYear.apply(this, arguments);
}

function _getActivitiesByMonthAndYear() {
  _getActivitiesByMonthAndYear = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(month, year) {
    var result, response;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;
            response = null;
            _context2.prev = 2;
            _context2.next = 5;
            return api.requestApi("activity.getByMonthAndYear", {}, "/" + month + "/" + year);

          case 5:
            response = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            response = false;

          case 11:
            result = api.processResponse(response);
            return _context2.abrupt("return", result);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return _getActivitiesByMonthAndYear.apply(this, arguments);
}

function addActivity() {
  return _addActivity.apply(this, arguments);
}

function _addActivity() {
  _addActivity = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var title,
        value,
        target,
        canChange,
        useTextField,
        result,
        response,
        body,
        _args3 = arguments;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            title = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : "title";
            value = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 50;
            target = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 100;
            canChange = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : 0;
            useTextField = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : 0;
            //prepare variable to store response & result
            result = null;
            response = null; //prepare body
            //- fill to body

            body = {
              "title": title,
              "default_value": value,
              "target": target,
              "can_change": canChange,
              "use_textfield": useTextField
            }; //call to api

            _context3.prev = 8;
            _context3.next = 11;
            return api.requestApi("activity.add", body);

          case 11:
            response = _context3.sent;
            _context3.next = 18;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](8);
            console.log("error !", _context3.t0);
            response = false;

          case 18:
            //proccess response
            result = api.processResponse(response);
            return _context3.abrupt("return", result);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[8, 14]]);
  }));
  return _addActivity.apply(this, arguments);
}

},{"./../infra/api":5,"@babel/runtime/helpers/asyncToGenerator":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/typeof":14,"@babel/runtime/regenerator":17}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHistories = getHistories;
exports.addHistory = addHistory;
exports.bulkStoreHistoriesData = bulkStoreHistoriesData;
exports.deleteHistory = deleteHistory;
exports.getHistoryRange = getHistoryRange;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var api = _interopRequireWildcard(require("./../infra/api"));

var datetimeHelper = _interopRequireWildcard(require("./../core/datetime_helper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getHistories() {
  return _getHistories.apply(this, arguments);
}

function _getHistories() {
  _getHistories = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var result, response;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = null;
            response = null;
            _context.prev = 2;
            _context.next = 5;
            return api.requestApi("history.get");

          case 5:
            response = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            response = false;

          case 11:
            result = api.processResponse(response);
            return _context.abrupt("return", result);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));
  return _getHistories.apply(this, arguments);
}

function addHistory(_x, _x2, _x3) {
  return _addHistory.apply(this, arguments);
}

function _addHistory() {
  _addHistory = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(activityId, inputValue, useTextfield) {
    var result, response, dateObj, currentDateFormatted, currentHours, currentMinutes, currentSeconds, currentTimeFormatted, body;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //prepare variable to store response & result
            result = null;
            response = null; //prepare body
            //- get date 

            dateObj = new Date();
            currentDateFormatted = datetimeHelper.getDateStandartFormat(); //- get time

            currentHours = dateObj.getHours();
            if (currentHours.toString().length < 2) currentHours = '0' + currentHours;
            currentMinutes = dateObj.getMinutes();
            if (currentMinutes.toString().length < 2) currentMinutes = '0' + currentMinutes;
            currentSeconds = dateObj.getSeconds();
            if (currentSeconds.toString().length < 2) currentSeconds = '0' + currentSeconds;
            currentTimeFormatted = currentHours + ":" + currentMinutes + ":" + currentSeconds; //- fill to body

            body = {
              "activity_id": activityId,
              "date": currentDateFormatted,
              "time": currentTimeFormatted
            };

            if (useTextfield) {
              body['value_textfield'] = inputValue;
            } else {
              body['value'] = inputValue;
            } //call to api


            _context2.prev = 13;
            console.log("CHECK BODY FIRST");
            console.log(body);
            _context2.next = 18;
            return api.requestApi("history.add", body);

          case 18:
            response = _context2.sent;
            _context2.next = 25;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](13);
            console.log("error !", _context2.t0);
            response = false;

          case 25:
            //proccess response
            result = api.processResponse(response);
            return _context2.abrupt("return", result);

          case 27:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[13, 21]]);
  }));
  return _addHistory.apply(this, arguments);
}

function bulkStoreHistoriesData(_x4, _x5) {
  return _bulkStoreHistoriesData.apply(this, arguments);
}

function _bulkStoreHistoriesData() {
  _bulkStoreHistoriesData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(inputHistories, activityId) {
    var result, response, body;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //prepare variable to store response & result
            result = null;
            response = null; //prepare body
            //langsung kirim, karena inputhistory sudah jadi array, tinggalbkin body
            //- fill to body

            body = {
              "activity_id": activityId,
              "history": inputHistories
            }; //call to api

            _context3.prev = 3;
            console.log("CHECK BODY FIRST");
            console.log(body);
            _context3.next = 8;
            return api.requestApi("history.bulkStore", body);

          case 8:
            response = _context3.sent;
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](3);
            console.log("error !", _context3.t0);
            response = false;

          case 15:
            //proccess response
            result = api.processResponse(response);
            return _context3.abrupt("return", result);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 11]]);
  }));
  return _bulkStoreHistoriesData.apply(this, arguments);
}

function deleteHistory(_x6) {
  return _deleteHistory.apply(this, arguments);
}

function _deleteHistory() {
  _deleteHistory = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(id) {
    var result, response;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //prepare variable to store response & result
            result = null;
            response = null; //call to api

            _context4.prev = 2;
            _context4.next = 5;
            return api.requestApi("history.delete", {
              "_method": "delete"
            }, "/" + id);

          case 5:
            response = _context4.sent;
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](2);
            console.log("error !", _context4.t0);
            response = false;

          case 12:
            //proccess response
            result = api.processResponse(response);
            return _context4.abrupt("return", result);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 8]]);
  }));
  return _deleteHistory.apply(this, arguments);
}

function getHistoryRange() {
  return _getHistoryRange.apply(this, arguments);
}

function _getHistoryRange() {
  _getHistoryRange = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
    var result, response;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            result = null;
            response = null;
            _context5.prev = 2;
            _context5.next = 5;
            return api.requestApi("history.getHistoryRange");

          case 5:
            response = _context5.sent;
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](2);
            response = false;

          case 11:
            result = api.processResponse(response);
            return _context5.abrupt("return", result);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 8]]);
  }));
  return _getHistoryRange.apply(this, arguments);
}

},{"./../core/datetime_helper":1,"./../infra/api":5,"@babel/runtime/helpers/asyncToGenerator":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/typeof":14,"@babel/runtime/regenerator":17}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processResponse = processResponse;
exports.requestApi = requestApi;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var message = {
  "connection": "Check your internet connection !"
};
var server = "http://localhost:8000";
var listApi = {
  "activity.get": {
    method: 'GET',
    url: server + "/api/activities",
    withToken: false
  },
  "activity.getByMonthAndYear": {
    method: "GET",
    url: server + "/api/activities/getUsingMonthYear",
    withToken: false
  },
  "activity.add": {
    method: "POST",
    url: server + "/api/activities",
    withToken: false
  },
  "history.get": {
    method: "GET",
    url: server + "/api/histories",
    widthToken: false
  },
  "history.add": {
    method: "POST",
    url: server + "/api/histories",
    withToken: false
  },
  "history.delete": {
    method: "DELETE",
    url: server + "/api/histories",
    withToken: false
  },
  "history.getHistoryRange": {
    method: 'GET',
    url: server + "/api/histories/getHistoryRange",
    withToken: false
  },
  "history.bulkStore": {
    method: "POST",
    url: server + "/api/histories/bulkStore",
    withToken: false
  }
}; //this function will process message to readable message (not object)
//example : 
//message = {username: ["The username field is required.", "other error"]}
//this function will return :
//"The username field is required., other error"

function processMessage(message) {
  var result = "";
  var listMessage = [];

  var _iterator = _createForOfIteratorHelper(message),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      listMessage.push(value.toString());
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (listMessage.length > 0) {
    result = listMessage.toString();
  } else {
    result = message.toString();
  }

  if (result.includes("[object Object]")) {
    result = "Please try again";
  }

  return result;
} //this function used to convert SUCCESS plain response from API to formated response
//example, plain response : 
//{'data' : {'access_token' : 'xxx', ...}, 'config' : {...}, 'header' : {...}, ... }
//then convert to : 
//{'already_display_alert' : false, 'is_json' : true, 'message' : '', 'result' : {..data..}, 'success' : true}


function processResponse(r, ignoreAlert) {
  var result = {
    "success": false,
    "response": null,
    "is_json": false,
    "message": "",
    "already_display_alert": false
  }; //if response is not a valid value, then just return result with message : connection problem

  if (!r) {
    result['is_json'] = false;
    result['success'] = false;
    result['message'] = message.connection;

    if (!ignoreAlert) {
      alert('Failed ! ' + message.connection);
      result['already_display_alert'] = true;
    }

    return result;
  } //if response is valid and there is no error, then return result with that response


  if (r.error == false) {
    //if request success, then return success information + data
    result['is_json'] = true;
    result['success'] = true;
    result['response'] = r;
    return result;
  } //if request failed, then return failed information


  result['is_json'] = true;
  result['success'] = false;

  if (r.message) {
    result['message'] = processMessage(r.message);

    if (!ignoreAlert) {
      alert('Failed ! ' + result['message']);
      result['already_display_alert'] = true;
    }
  } else {
    result['is_json'] = false;
    result['success'] = false;
    result['message'] = message.connection;

    if (!ignoreAlert) {
      alert('Failed ! ' + message.connection);
      result['already_display_alert'] = true;
    }
  }

  if (result['message'].includes("[object Object]")) {
    result['message'] = "Please try again";
  }

  return result;
}

function requestApi(_x) {
  return _requestApi.apply(this, arguments);
}

function _requestApi() {
  _requestApi = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(nameApi) {
    var bodyRequest,
        additionalUrl,
        ignoreAlert,
        customUrl,
        customMethod,
        url,
        method,
        dataRequest,
        _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            bodyRequest = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            additionalUrl = _args.length > 2 && _args[2] !== undefined ? _args[2] : "";
            ignoreAlert = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
            customUrl = _args.length > 4 && _args[4] !== undefined ? _args[4] : null;
            customMethod = _args.length > 5 && _args[5] !== undefined ? _args[5] : null;
            url = "";
            method = "";

            if (!(nameApi != null)) {
              _context.next = 12;
              break;
            }

            url = listApi[nameApi]['url'];
            method = listApi[nameApi]['method'];
            _context.next = 18;
            break;

          case 12:
            if (!(customUrl != null && customMethod != null && ["GET", "POST", "PATCH", "UPDATE", "DELETE"].includes(customMethod.toUpperCase()))) {
              _context.next = 17;
              break;
            }

            url = customUrl;
            method = customMethod;
            _context.next = 18;
            break;

          case 17:
            return _context.abrupt("return", false);

          case 18:
            //1. prepare params or formData
            dataRequest = null;
            dataRequest = bodyRequest; //2. request GET / POST / PUT / DELETE

            if (["GET", "POST", "PATCH", "UPDATE", "DELETE"].includes(method.toUpperCase())) {
              _context.next = 23;
              break;
            }

            if (!ignoreAlert) {
              alert("Failed ! Error Api.js (1) ! Method is wrong !");
              resultReturn['already_display_alert'] = true;
            }

            return _context.abrupt("return", resultReturn);

          case 23:
            console.log("check datarequest");
            console.log(dataRequest);
            console.log(method);
            _context.next = 28;
            return $.ajax({
              url: url + additionalUrl,
              data: dataRequest,
              type: method,
              crossDomain: true,
              dataType: 'json' // added data type

            });

          case 28:
            return _context.abrupt("return", _context.sent);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requestApi.apply(this, arguments);
}

},{"@babel/runtime/helpers/asyncToGenerator":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/slicedToArray":13,"@babel/runtime/regenerator":17}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var historyRepository = _interopRequireWildcard(require("./../../../js/app/data/history_repository"));

var activityRepository = _interopRequireWildcard(require("./../../../js/app/data/activity_repository"));

var templateHelper = _interopRequireWildcard(require("./../core/template_helper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function loadActivitiesData() {
  return _loadActivitiesData.apply(this, arguments);
}

function _loadActivitiesData() {
  _loadActivitiesData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var result;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return activityRepository.getActivities();

          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadActivitiesData.apply(this, arguments);
}

function showActivitiesData(activities) {
  console.log("check data");
  console.log(activities); //clear histories

  $("#importer").empty(); //prepare template

  var optionActivityTpl = $('script[data-template="option-activity"').text(); //render template

  $("#importer").append(activities.map(function (activity, i) {
    return templateHelper.render(optionActivityTpl, {
      "title": activity['title'],
      'id': activity['id'],
      'useTextfield': activity['use_textfield']
    });
  }));
}

function bulkStoreHistoriesData(_x, _x2) {
  return _bulkStoreHistoriesData.apply(this, arguments);
}

function _bulkStoreHistoriesData() {
  _bulkStoreHistoriesData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(inputHistories, activityId) {
    var result;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return historyRepository.bulkStoreHistoriesData(inputHistories, activityId);

          case 2:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _bulkStoreHistoriesData.apply(this, arguments);
}

jQuery( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
  var activitiesData;
  return _regenerator.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return loadActivitiesData();

        case 2:
          activitiesData = _context2.sent;

          if (activitiesData['success']) {
            showActivitiesData(activitiesData['response']['data']);
          } //event handler


          $("body").on('click', '#submit-btn', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
            var activityId, useTextfield, plainInput, inputHistories, result;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //get activityId
                    activityId = $("#importer").find(":selected").val();
                    useTextfield = $("#importer").find(":selected").attr("useTextfield"); //get input history

                    plainInput = $("textarea[name='histories']").val();
                    inputHistories = [];
                    _context.prev = 4;
                    console.log("check palinInput");
                    console.log(plainInput);
                    inputHistories = plainInput.split("\n").map(function (row) {
                      var rowSplitted = row.split(", ");

                      if (useTextfield == "1") {
                        return {
                          "date": rowSplitted[0],
                          "time": rowSplitted[1],
                          "value_textfield": rowSplitted[2]
                        };
                      } else {
                        return {
                          "date": rowSplitted[0],
                          "time": rowSplitted[1],
                          "value": rowSplitted[2]
                        };
                      }
                    });
                    _context.next = 15;
                    break;

                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context["catch"](4);
                    console.log(_context.t0);
                    alert("your input format is wrong");
                    return _context.abrupt("return");

                  case 15:
                    _context.next = 17;
                    return bulkStoreHistoriesData(inputHistories, activityId);

                  case 17:
                    result = _context.sent;

                    if (result['success']) {
                      alert("successfully added !");
                    }

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[4, 10]]);
          })));

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));

},{"./../../../js/app/data/activity_repository":3,"./../../../js/app/data/history_repository":4,"./../core/template_helper":2,"@babel/runtime/helpers/asyncToGenerator":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/typeof":14,"@babel/runtime/regenerator":17}],7:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],8:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],9:[function(require,module,exports){
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
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],10:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],11:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],12:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],13:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");

var iterableToArrayLimit = require("./iterableToArrayLimit.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableRest = require("./nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayWithHoles.js":8,"./iterableToArrayLimit.js":11,"./nonIterableRest.js":12,"./unsupportedIterableToArray.js":15}],14:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],15:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":7}],16:[function(require,module,exports){
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

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
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
      define(genFun, toStringTagSymbol, "GeneratorFunction");
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

  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
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
        return new PromiseImpl(function(resolve, reject) {
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
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
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

  define(Gp, toStringTagSymbol, "Generator");

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

},{}],17:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":16}]},{},[6]);

//# sourceMappingURL=import.js.map
