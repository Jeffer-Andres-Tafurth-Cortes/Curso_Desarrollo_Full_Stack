const { test } = require('node:test')
const assert = require('node:assert')

const reverse = require('../utils/for_testing').reverse
const average = require('../utils/for_testing').average

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

describe('average', () => {
  test('uno de los valores es el si el mismo valor', () => {
    assert.strictEqual(average([1]), 1)
  })

  test('el calculo esta correcto', () => {
    assert.strictEqual(average([1, 2, 3, 4, 5, 6]), 3.5)
  })

  test('el array esta vacio', () => {
    assert.strictEqual(average([]), 0)
  })
})