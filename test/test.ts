import test = require('blue-tape');

import jsonp = require('jsonp');

test('jsonp exists', (t) => {
  t.plan(1);
  t.notEqual(jsonp, undefined);
});
