var scrapeMdn = require ('./scrape-mdn/dist/index');
var prettyjson = require('prettyjson');
var vorpal = require('vorpal')();
var clear = require('clear');
var colors = require('colors');
var opn = require('opn');

var options = {
  keysColor: 'yellow',
};

module.exports = function(args) {
  scrapeMdn.search(args.methodName).then((results) => {
    var data = {url, title, description} = results[0];
    if(args.options.website || args.options.w) {
      opn(data.url);
    } else {
      clear();
      vorpal.log(prettyjson.render(data, options));
    }
  });
};
