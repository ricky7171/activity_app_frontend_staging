(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateStandartFormat = getDateStandartFormat;
exports.getTimeStandartFormat = getTimeStandartFormat;
exports.monthToText = monthToText;
exports.getCurrentMonth = getCurrentMonth;

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

function getCurrentMonth() {
  var dateObject = new Date();
  var currentMonth = dateObject.getMonth();
  return monthToText(currentMonth);
}

},{}]},{},[1]);

//# sourceMappingURL=datetime_helper.js.map
