import test from 'ava'
import getSignal from '../src/signal'

test('has a function "change"', t => {
  const signal = getSignal()
  t.is(typeof signal.change, 'function')
})

test('has a function "getCurrent"', t => {
  const signal = getSignal()
  t.is(typeof signal.getCurrent, 'function')
})
