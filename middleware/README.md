

Middleware = functions that execute **between** the request and response cycle.

### Common Uses:
- Logging requests
- Parsing body data
- Authentication
- Error handling

### Custom Middleware Example:
```js
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
