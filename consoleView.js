var scrapeMdn = require ('./scrape-mdn/dist/index');
var prettyjson = require('prettyjson');
var vorpal = require('vorpal')();
var clear = require('clear');
var colors = require('colors');
var opn = require('opn');

var options = {
  keysColor: 'yellow',
  stringColor: 'magenta'
};

module.exports = function(args, command) {
  
  var argument = command + '.' + args.methodName;

  scrapeMdn.search(argument).then((results) => {
    vorpal.log(args);
    var data = {url, title, description} = results[0];
    if(args.options.website || args.options.w) {
      opn(data.url);
    } else {
      clear();
      vorpal.log(prettyjson.render(data, options));
    }
  });
};
