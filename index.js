#!/usr/bin/env node

"use strict";

var fs = require('fs');

const htmlTemplate = require('./templates/htmlTemplate');
const cssTemplate = require('./templates/cssTemplate');
const jsTemplate = require('./templates/jsTemplate');

console.log("Creating HTML File")
fs.writeFile('index.html', htmlTemplate, function (err) {
    if (err) throw err;
    console.log("HTML File Created!")
});

console.log("Creating CSS File")
fs.writeFile('style.css', cssTemplate, function (err) {
    if (err) throw err;
    console.log("CSS File Created!")
});

console.log("Creating JS File")
fs.writeFile('main.js', jsTemplate, function (err) {
    if (err) throw err;
    console.log("JS File Created!")
});