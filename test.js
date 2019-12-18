import { tick, idle, time, frame } from './index.js'
import t from 'tst'

let log = []

t('basic', async t => {
  tick().then(() => log.push('tick'))
  idle().then(() => log.push('idle'))
  frame().then(() => log.push('frame'))
  time(0).then(() => log.push('time'))

  t.deepEqual(log, [], 'none')

  await idle()
  t.deepEqual(log, ['tick', 'frame', 'time', 'idle'], 'idle')

  t.end()
})
