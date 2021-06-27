(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSnackBar = showSnackBar;

function showSnackBar(text) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var snackbarEl = $($.parseHTML('<div class="show" id="snackbar">' + text + '</div>'));
  $("body").append(snackbarEl);
  setTimeout(function () {
    snackbarEl.removeClass("show");
  }, 3000);
}

},{}]},{},[1]);

//# sourceMappingURL=alert_helper.js.map
