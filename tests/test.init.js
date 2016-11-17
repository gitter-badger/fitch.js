import test from 'ava'
import init from '../src/utils/init'

test('method: init', t => {
  const obj = {
    init,
    get: function() {
      return this.baseURL
    },
  }

  obj.init({
    baseURL: 'http://localhost:8000/'
  });

  t.is(typeof init, 'function', 'is defined and is a function')
  t.is(obj.get(), 'http://localhost:8000/', 'return baseUrl')
})
