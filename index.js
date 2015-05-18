/** Fetch JSON data from File System or URL
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     fsurl
 */
 (function() {
  'use strict';
  var FsurlError = require('make-error')('FsurlError')

  /** Fsurl
   *  @class
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function fsurlClass(options) {
    /*jshint validthis: true */
    var self = this
    options = options || {}
    self.value = options
    return self
  }



  /** Fsurl
   *  @constructor
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function fsurl(options) {
    return new fsurlClass(options).value
  }


  module.exports = fsurl
})();
