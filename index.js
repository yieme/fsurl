/** Fetch JSON data from File System or URL
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     fsurl
 */
'use strict';

var fs = require('fs')
var sa = require('superagent')
var requestSync = require('sync-request')


function isUrl(path) {
  var head = path.substr(0,7).toLowerCase()
  return (head == 'https:/' || head == 'http://' || path.substr(0,2) == '//')
}



function fsurl(path, callback) {
  if (isUrl(path)) {
    sa.get(path).end(function fsurlReadUrl(err, res) {
      if (err) return callback(err)
      var data = res.getBody()
      return JSON.parse(data)
    })
  } else {
    fs.readFile(path, 'utf8', function fsurlReadFile(err, data) {
      if (err) return callback(err)
      return JSON.parse(data)
    })
  }
}



function fsurlSync(path) {
  var data
  if (isUrl(path)) {
    var res = requestSync('GET', path)
    data = res.getBody()
  } else {
    data = fs.readFileSync(path, 'utf8')
  }
  return JSON.parse(data)
}



module.exports      = fsurl
module.exports.sync = fsurlSync
