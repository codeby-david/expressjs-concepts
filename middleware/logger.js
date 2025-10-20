
//  Custom Middleware Example

// Middleware functions have access to req, res,
// and next() and can run logic before routes.

function logger(req, res, next) {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next(); // continue to next middleware/route
}

module.exports = logger;
