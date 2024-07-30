const { test } = require('node:test')
const assert = require('node:assert')

const reverse = require('../utils/for_testing').reverse

test('revertir a', () => {
  const result = reverse('a')

  assert.strictEqual(result, 'a')
})

test('revertir react', () => {
  const result = reverse('react')

  assert.strictEqual(result, 'tcaer')
})

test('revertir saippuakauppias', () => {
  const result = reverse('saippuakauppias')

  assert.strictEqual(result, 'saippuakauppias')
})