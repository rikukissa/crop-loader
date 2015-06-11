'use strict';

var extend = require('extend');
var gm = require('gm');
var loaderUtils = require('loader-utils');
var reduce = require('lodash.reduce');
var set = require('lodash.set');

module.exports = function(content) {
  var callback = this.async();
  this.cacheable(true);

  var loaderOptions = loaderUtils.parseQuery(this.query);
  var resourceOptions = loaderUtils.parseQuery(this.resourceQuery);

  if(loaderOptions.skip) {
    return content;
  }

  var parsedOptions = reduce(resourceOptions, function(memo, value, key) {
    return set(memo, key, parseInt(value, 10));
  }, {});


  var options = extend({}, {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  }, parsedOptions);

  gm(this.resourcePath)
  .crop(options.w, options.h, options.x, options.y)
  .toBuffer(callback);
}
