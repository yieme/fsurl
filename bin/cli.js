#!/usr/local/bin/node
/** Fetch JSON data from File System or URL
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     fsurl
 */ 'use strict';

var convar  = require('convar')
var fsurl = require('../index.js')


function help(msg) {
  if (msg) console.error(msg)
  var pkg = require('../package.json')
  console.error(pkg.description, '- v' + pkg.version)
  console.error('Usage:', pkg.name, '--url url [--pretty]')
  process.exit(1)
}

var url = convar('url')
if (!url) help()

var result = fsurl.sync(url)
if (convar('pretty')) {
  console.log(JSON.stringify(result, null, 2))
} else {
  console.log(JSON.stringify(result))
}
