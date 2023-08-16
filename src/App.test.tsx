import { merge } from './function'

test('merge', () => {
  expect(merge([1,10,15,20], [21,3,6,87])).toStrictEqual([1,3,6,10,15,20,21,87]);
});