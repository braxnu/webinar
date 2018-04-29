import test from 'ava'
import getSignal from '../src/signal'

test('starts with red light', t => {
  const signal = getSignal()
  const light = signal.getCurrent()

  t.is(light, 'red')
})

test('changes to yellow as second', t => {
  const signal = getSignal()

  signal.change()

  const light = signal.getCurrent()

  t.is(light, 'yellow')
})

test('changes to green as third', t => {
  const signal = getSignal()

  signal.change()
  signal.change()

  const light = signal.getCurrent()

  t.is(light, 'green')
})

test('changes to yellow as fourth', t => {
  const signal = getSignal()

  signal.change()
  signal.change()
  signal.change()

  const light = signal.getCurrent()

  t.is(light, 'yellow')
})

test('changes to red as fifth', t => {
  const signal = getSignal()

  signal.change()
  signal.change()
  signal.change()
  signal.change()

  const light = signal.getCurrent()

  t.is(light, 'red')
})
