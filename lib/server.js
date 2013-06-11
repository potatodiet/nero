/**
 * Module dependencies.
 */
var http  = require('http');
var https = require('https');
var route = require('./route');
var file  = require('./file');

/**
 * Declare variables.
 */
var server;

/**
 * Sets the port the http server is listening on.
 * @param {Number} port
 */
function listen(port) {
  server = http.createServer().listen(port);
  addListener();
}

/**
 * Creates request listener.
 */
function addListener() {
  //Listens for requests to the http server.
  server.addListener('request', function (req, res) {
    route.checkRoute(req, res, noRoutes);
  });
}

/**
 * Runs if requested url doesn't match any routes.
 * @param {Function} req
 * @param {Function} res
 */
function noRoutes(req, res) {
  file.serve(req, res);
}

/**
 * Expose functions and variables.
 */
exports.listen = listen; // Variable