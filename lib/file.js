/**
 * Module dependencies.
 */
var fs   = require('fs');
var mime = require('mime');

/**
 * Directory which store static files.
 * @var {String} directory
 */
var directory;

/**
 * Serves static files.
 * @param {Function} req
 * @param {Function} res
 */
function serve(req, res) {
  var path;
  
  if (req.url.charAt(req.url.length - 1) === '/') {
    path = directory + req.url + 'index.html';
  } else {
    path = directory + req.url;
  }
  
  fs.exists(path, ifExists)
  
  /**
   * Checks if static file exists.
   * @param {Boolean} exists
   */
  function ifExists(exists) {
    if (exists) { // If file does exist
      fs.readFile(path, 'utf8', sendFile);
    } else { // If file doesn't exist
      res.writeHead(404);
      res.end('Cannot find ' + req.url);
    }
  }
  
  function sendFile(err, data) {
    if (err) {
      
    } else {
      res.writeHead(200, {
        'Content-Length': data.length,
        'Content-Type': mime.lookup(path)
      });
      res.end(data);
    }
  }
}

/**
 * Sets value of directory variable.
 * @param {String} setDir
 */
function setDirectory(setDir) {
  directory = setDir;
}

/**
 * Expose functions and variables.
 */
exports.serve     = serve;        // Function
exports.directory = setDirectory; // Function