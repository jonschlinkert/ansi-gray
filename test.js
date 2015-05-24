'use strict';

/* deps: mocha */
var assert = require('assert');
var gray = require('./');

describe('gray', function () {
  it('should wrap a string with ansi styling:', function () {
    assert.equal(gray('string'), '\u001b[90mstring\u001b[39m');
  });
});
