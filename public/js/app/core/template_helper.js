(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);

//# sourceMappingURL=template_helper.js.map
