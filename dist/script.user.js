// ==UserScript==
// @name My Userscript
// @description A cool userscript
// @version 1.0.0
// @author Your Name
// @match https://example.com/*
// @grant GM_getValue
// @grant GM_setValue
// @updateURL https://raw.githubusercontent.com/justinloveless/TamperMonkeyTemplate/dist/script.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/exampleModule.js
function demo(message) {
  console.log("This is a demo function from another file.", message);
}
;// ./src/main.js

console.log('Tampermonkey Script Started (using webpack)');
demo('calling demo function from main.js');
/******/ })()
;