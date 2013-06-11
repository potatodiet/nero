/**
 * Module dependencies.
 */
var server = require('./server');
var route  = require('./route');
var file   = require('./file');

/**
 * Expose functions and variables.
 */
exports.listen          = server.listen;  // Function
exports.addRoute        = route.addRoute; // Function
exports.publicDirectory = file.directory; // Variable