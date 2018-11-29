var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://dev.authorify.com/afy-api-demo");
describe("Login API Tests", function () {
    it("Should return", function (done) {
        server
            .get("/draft/generatepdf/5bf7e1b32e170c097f957562")
            .expect("Content-type", /json/)
            .expect(200)
            .expect(function (res) {
            console.log(res.body.data.url, "Hardik");
            done();
        })
            .end(function (err, res) {
            res.status.should.equal(200);
            res.body.error.should.equal(false);
            done();
        });
        done();
    });
});
