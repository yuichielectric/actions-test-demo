import test from 'ava';
import adder from '../index.js';

test('adder#calc returns 2', t => {
    t.is(adder.calc(1, 1), 2);
});
