const { test, describe } = require('node:test')

const average = require('../utils/for_testing').average

const average = array => {
  const reducer = (sum, item) => {
    return sum + item
  }
  return array.length === 0 ? 0 : array.reduce(reducer) / array.length
}

describe('average', () => {
  test('donde uno de los valores sea el valor en si', () => {
    assert.strictEqual(average([1]), 1)
  })

  test('donde el calculo este correcto', () => {
    assert.strictEqual(average([1, 2, 3, 4, 5, 6]), 3.5)
  })

  test('donde el array este vacion', () => {
    assert.strictEqual(average([]), 0)
  })
})


