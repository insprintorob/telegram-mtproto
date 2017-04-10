const test = require('tap').test
const MTProto = require('../lib')

const { delayExit } = require('./fixtures')

test('plugins existance', t => {
  t.plan(3)
  t.type(MTProto.plugins.makePasswordHash, 'function', 'makePasswordHash')
  t.type(MTProto.plugins.MemoryStorage, 'function', 'MemoryStorage')
  t.type(MTProto.plugins.FileStorage, 'function', 'FileStorage')
}).then(delayExit)