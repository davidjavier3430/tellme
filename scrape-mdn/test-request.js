var scrapeMdn = require ('./dist/index');
var request = require('request');
var cheerio = require('cheerio');

function searchTest(argument) {
scrapeMdn.search(argument).then((results) => {
var {url, title, description} = results[0];
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
       var $ = cheerio.load(body);
       var resultElements = $('.toggleable').find('.toggle-container');
       resultElements = [].slice.call(resultElements);

       return resultElements.map(function (el) {
        var $el = $(el);
        var exampleCode = $el.find('li a');
        //console.log(exampleCode);
        var id = [];
        for (var i = 0; i < exampleCode.length; i++) {
          var href = exampleCode[i].attribs.href;
          id.push(href);
        }
        console.log(id);
          var syntax = $(id[0]).next().text();
          var Example = $(id[2]).next();
         //console.log(syntax);
         //console.log(Example);
       });
     }
    });//Request End
  });//Search End
} //Function End

searchTest('array.length');
