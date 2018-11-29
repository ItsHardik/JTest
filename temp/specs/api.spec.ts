var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://dev.authorify.com/afy-api-demo");

// UNIT test begin

describe("Login API Tests",function(){

  // #1 should return home page

  it("Should return",function(done){
    // calling home page api
    server
    .get("/draft/generatepdf/5bf7e1b32e170c097f957562")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .expect(function(res){
      console.log(res.body.data.url, "Hardik")
      done();
    })
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false);
      done();
    });
  });

});