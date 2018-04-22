import test from 'ava'
import signal from '../src/signal'

test('has a function "change"', t => {
  t.is(typeof signal.change, 'function')
})

test('has a function "getCurrent"', t => {
  t.is(typeof signal.getCurrent, 'function')
})
