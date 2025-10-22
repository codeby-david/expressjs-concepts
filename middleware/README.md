

Middleware = functions that execute **between** the request and response cycle.
in short Middleware are functions that run between receiving a request and sending a response.
They are useful for logging, authentication, parsing, etc.
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
