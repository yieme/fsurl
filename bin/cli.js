#!/usr/local/bin/node
/** Fetch JSON data from File System or URL
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     fsurl
 *  @param      {stream} stdin  - Standard input
 *  @return     {stream} stdout - Standard output
 */ 'use strict';
var convar  = require('convar')
var fsurl = require('../index.js')


function help(msg) {
  if (msg) console.error(msg)
  var pkg = require('../package.json')
  console.error(pkg.description, '- v' + pkg.version)
  console.error('Usage:', pkg.name, '--param value')
  process.exit(1)
}

var param = convar('param')
if (!param) help()



// standard in template
var stdin   = require('get-stdin')

stdin(function (data) {
  if (data) {
    var result = fsurl(data)
    console.log(JSON.stringify(result))
  }
})
