import "js.jsx";

__export__ class Nock {
  static function setUrl(url :string) : Scope {
    return js.eval("require('nock')('"+url+"')") as __noconvert__ Scope;
  }
}

native __fake__ class Scope {
  function get(path:string) : Scope;
  function post(path:string) : Scope;
  function put(path:string) : Scope;
  function delete(path:string) : Scope;

  function get(path:string, requestBody : Map.<variant>) : Scope;
  function post(path:string, requestBody : Map.<variant>) : Scope;
  function put(path:string, requestBody : Map.<variant>) : Scope;
  function delete(path:string, requestBody : Map.<variant>) : Scope;

  function get(path:string, requestBody : Map.<variant>, option : Map.<variant>) : Scope;
  function post(path:string, requestBody : Map.<variant>, option : Map.<variant>) : Scope;
  function put(path:string, requestBody : Map.<variant>, option : Map.<variant>) : Scope;
  function delete(path:string, requestBody : Map.<variant>, option : Map.<variant>) : Scope;

  function reply(statusCode:int, json:variant) : Scope;
  function reply(statusCode:int, json:variant, option:Map.<variant>) : Scope;
}

