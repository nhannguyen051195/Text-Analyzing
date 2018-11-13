const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('GET /', function() {
    it('respond 200', function(done) {
      request(app)
        .get('/')
        .expect(200, done);
    });
});

describe('POST /', function() {
    it('should return correct JSON', function(done) {
      request(app)
        .post('/')
        .send({text: 'hi'})        
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            else{
                assert(res.body.result, {
                    "textLength": {
                        "withSpaces": 2,
                        "withoutSpaces": 2
                    },
                    "wordCount": 1,
                    "characterCount": [
                        {
                            "h": 1
                        },
                        {
                            "i": 1
                        }
                    ]
                });
            }
            done();
        });
    });
});

