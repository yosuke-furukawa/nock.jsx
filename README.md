Nock bindings for JSX
======================

[Nock](https://github.com/pgte/nock) is a HTTP Mock module.

This nock.jsx is binding Nock for JSX.


Getting Started
======================

For JSX user:

```javascript
import "nock.jsx/nock.jsx";
import "test-case.jsx";
import "nodejs.jsx/ext/needle.jsx";

class _Test extends TestCase {
  function testNockGet() :void {
    this.async(function(async : AsyncContext) : void {
    Nock.setUrl("http://www.google.com").get("/").reply(200, "Hello Google");
    needle.get("http://www.google.com/", function(err, response, data){
      this.expect(response.statusCode).toBe(200);
      this.expect(data.toString()).toBe("Hello Google");
      async.done();
    });
    }, 10000);
  }
}
```

For JavaScript user:

```javascript
var Nock = require('../nock.jsx').Nock;
var needle = require('needle');


Nock.setUrl("http://www.google.com").get("/").reply(200, "Hello Google");
needle.get("http://www.google.com/", function(err, response, data){
    console.log(data.toString()); // Hello Google
});
```
