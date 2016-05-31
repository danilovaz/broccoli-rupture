/*
* broccoli-rupture
*
* Copyright (c) 2016 Danilo Vaz
* Licensed under the MIT license.
* https://github.com/danilovaz/broccoli-rupture/blob/master/LICENSE-MIT
*/
'use strict';

var Plugin = require('broccoli-plugin');
var stylus = require('stylus');
var rupture = require('rupture');

RuptureFilter.prototype = Object.create(Plugin.prototype);
RuptureFilter.prototype.constructor = RuptureFilter;

function RuptureFilter(inputNode) {
  if (!(this instanceof RuptureFilter)) return new RuptureFilter(inputNode);
  Plugin.call(this, [inputNode]);
}

RuptureFilter.prototype.build = function() {
  return rupture();
};

module.exports = RuptureFilter;
