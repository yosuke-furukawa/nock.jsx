import "../lib/nock.jsx";
import "test-case.jsx";
import "nodejs.jsx/ext/needle.jsx";

class _Test extends TestCase {
  function toMapMatch(expect : Map.<variant>, tobe : Map.<variant>) : void {
    var alreadyMatchedKeys = [] : Array.<variant>;
    expect.keys().forEach((key)->{
      this.expect(expect[key]).toBe(tobe[key]);
      alreadyMatchedKeys.push(key);
    });
    tobe.keys().forEach((key)->{
      if (alreadyMatchedKeys.indexOf(key) < 0) {
        this.expect(expect[key]).toBe(tobe[key]);
      }
    });
  }
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
  function testNockPost() :void {
    this.async(function(async : AsyncContext) : void {
    Nock.setUrl("http://www.google.com").post("/search", {"q":"test"}).reply(200, "Hello Google POST");
    needle.post("http://www.google.com/search", "q=test", function (error, response, data) {
      if (error) {
        log error;
      } else {
        this.expect(response.statusCode).toBe(200);
        this.expect(data.toString()).toBe("Hello Google POST");
      }
      async.done();
    });
    }, 10000);
  }
  function testNockGetJSON() :void {
    this.async(function(async : AsyncContext) : void {
    Nock.setUrl("http://www.google.com").get("/").reply(200, {"abc":"def", "ghi":123}, {"Content-Type" : "application/json"});
    needle.get("http://www.google.com/", function(err, response, data){
      this.expect(response.statusCode).toBe(200);
      var dataRaw = data as variant;
      this.toMapMatch({"abc":"def", "ghi":123}, dataRaw as Map.<variant>);
      async.done();
    });
    }, 10000);
  }
}

