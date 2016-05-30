/*
* broccoli-rupture
*
* Copyright (c) 2016 Danilo Vaz
* Licensed under the MIT license.
* https://github.com/danilovaz/broccoli-rupture/blob/master/LICENSE-MIT
*/
'use strict';

var Plugin = require('broccoli-plugin');
var RSVP = require('rsvp');
var rupt = require('rupture');

function RuptureFilter(inputTree, options) {
  if (!(this instanceof RuptureFilter)) {
    console.log("Alpha");
    return new RuptureFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};

}

RuptureFilter.prototype = Object.create(Plugin.prototype);
RuptureFilter.prototype.constructor = RuptureFilter;

RuptureFilter.prototype.extensions = ['styl'];
RuptureFilter.prototype.targetExtension = 'styl';

RuptureFilter.prototype.processString = function(str) {
  return rupt.rupture();
};

module.exports = RuptureFilter;
