/**
 * Declare variables.
 */
var routesArray = [];

/**
 * Inserts routes required by the http server.
 * @param {String} type
 * @param {String} path
 * @param {Function} callback
 */
function addRoute(type, path, callback) {
  routesArray.push([type, path, callback]);
}

/**
 * Checks if the requested url is equal to a route.
 * @param {Function} req
 * @param {Function} res
 */
function checkRoute(req, res, callback) {
  for (var i = 0; i < routesArray.length; i++) {
    if (routesArray[i][0] === req.method && routesArray[i][1] === req.url) {
      routesArray[i][2](req, res);
      break;
    }
    if (i === routesArray.length - 1) {
      callback(req, res);
    }
  }
}

/**
 * Expose functions and variables.
 */
exports.addRoute   = addRoute;   // Function
exports.checkRoute = checkRoute; // Function