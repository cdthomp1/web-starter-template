var fs = require('fs');

const htmlTemplate = require('./templates/static/htmlTemplate');
const cssTemplate = require('./templates/static/cssTemplate');
const jsTemplate = require('./templates/static/jsTemplate');

module.exports = function () {


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
}
