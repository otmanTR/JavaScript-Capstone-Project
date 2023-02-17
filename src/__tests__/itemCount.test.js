import getItemCount from '../modules/getItemCount';
describe('count items', () => {
  test('should return 1 ', () => {
    const testArr = [];
    testArr.push(1);

    expect(getItemCount(testArr)).toBe(1);
  });
  test('should return 0 ', () => {
    const testArr = [];
    expect(getItemCount(testArr)).toBe(0);
  });
  test('should return 2 ', () => {
    const testArr = [];
    testArr.push(1);
    testArr.push(2);
    expect(getItemCount(testArr)).toBe(2);
  });
});
