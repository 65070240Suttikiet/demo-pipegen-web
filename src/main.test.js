import { expect, test } from 'vitest'

test('1 + 1 ต้องเท่ากับ 2 (Math check)', () => {
  expect(1 + 1).toBe(2)
})

test('ระบบต้องทำงานได้ (Sanity check)', () => {
  expect(true).toBe(true)
})