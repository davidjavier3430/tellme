var consoleView = require ('./consoleView');
var vorpal = require('vorpal')();
var colors = require('colors');

var arrayMethods = [
  'from',
  'isArray',
  'observe',
  'of',
  'prototype.concat',
  'prototype.copyWithin',
  'prototype.entries',
  'prototype.every',
  'prototype.fill',
  'prototype.filter',
  'prototype.find',
  'prototype.findIndex',
  'prototype.forEach',
  'prototype.includes',
  'prototype.indexOf',
  'prototype.join',
  'prototype.keys',
  'prototype.lastIndexOf',
  'prototype.prototype.map',
  'prototype.pop',
  'prototype.push',
  'prototype.reduce',
  'prototype.reduceRight',
  'prototype.reverse',
  'prototype.shift',
  'prototype.slice',
  'prototype.some',
  'prototype.sort',
  'prototype.splice',
  'prototype.toLocaleString',
  'prototype.toSource',
  'prototype.toString',
  'prototype.unshift',
  'prototype.values',
  'prototype[@@iterator]'
];

var stringMethods = [
  'length',
  'prototype',
  'fromCharCode',
  'fromCodePoint',
  'prototype.anchor',
  'prototype.big',
  'prototype.blink',
  'prototype.bold',
  'prototype.charAt',
  'prototype.charCodeAt',
  'prototype.codePointAt',
  'prototype.concat',
  'prototype.endsWith',
  'prototype.endsWith',
  'prototype.fixed',
  'prototype.fontcolor',
  'prototype.fontsize',
  'prototype.includes',
  'prototype.indexOf',
  'prototype.italics',
  'prototype.lastIndexOf',
  'prototype.link()',
  'prototype.localeCompare',
  'prototype.match',
  'prototype.normalize',
  'prototype.repeat',
  'prototype.replace',
  'prototype.search',
  'prototype.slice()',
  'prototype.small',
  'prototype.split()',
  'prototype.startsWith',
  'prototype.strike()',
  'prototype.sub',
  'prototype.substr',
  'prototype.substring',
  'prototype.sup',
  'toLocaleUpperCase',
  'toLowerCase',
  'toSource',
  'prototype.toString',
  'toUpperCase',
  'prototype.trim',
  'prototype.trimLeft',
  'trimRight',
  'prototype.valueOf',
  'prototype[@@iterator]'
];

var objectMethods = [
  'prototype',
  'prototype.__proto__',
  'prototype.constructor',
  'assign',
  'create',
  'defineProperties',
  'defineProperty',
  'entries',
  'freeze',
  'getOwnPropertyDescriptor',
  'getOwnPropertyDescriptors',
  'getOwnPropertyNames',
  'getOwnPropertySymbols',
  'getPrototypeOf',
  'is',
  'sExtensible',
  'isFrozen',
  'isSealed',
  'keys',
  'preventExtensions',
  'prototype.__defineGetter__',
  'Object.prototype.__defineSetter__',
  'Object.prototype.__lookupGetter__',
  'Object.prototype.__lookupSetter__',
  'Object.prototype.hasOwnProperty',
  'Object.prototype.isPrototypeOf',
  'Object.prototype.propertyIsEnumerable',
  'Object.prototype.toLocaleString',
  'Object.prototype.toSource',
  'Object.prototype.toString',
  'Object.prototype.toString',
  'Object.prototype.valueOf',
  'prototype.watch',
  'seal',
  'setPrototypeOf',
  'values'
];

//Array
vorpal
  .command('array <methodName>')
  .description('Outputs array documentation')
  .autocomplete(arrayMethods)
  .option('-w', '--website', 'Open the methods url in the browser')
  .action(function(args, callback) {
    consoleView(args);
    callback();
   });

//object
vorpal
.command('object <methodName>')
.description('Outputs object documentation')
.autocomplete(objectMethods)
.option('-w', '--website', 'Open the methods url in the browser')
.action(function(args, callback) {
  consoleView(args);
  callback();
 });

//string
vorpal
.command('string <methodName>')
.description('Outputs string documentation')
.autocomplete(stringMethods)
.option('-w', '--website', 'Open the methods url in the browser')
.action(function(args, callback) {
  consoleView(args);
  callback();
 });

vorpal
  .delimiter('tellme$'.yellow)
  .show();
