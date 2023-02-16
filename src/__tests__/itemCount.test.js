import getItemCount from '../modules/getItemCount';
describe('count items', () => {
  test('should return 2 ', () => {
    const testArr = [];
    testArr.push(1);
    testArr.push(2);
    expect(getItemCount(testArr)).toBe(2);
  });
});
