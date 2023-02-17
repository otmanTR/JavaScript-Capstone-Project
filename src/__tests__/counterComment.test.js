import countComment from '../counterComment';

describe('testing count comment', () => {
  test('Counting comments', () => {
    let commentList = [];
    commentList.push('BA');

    expect(countComment(commentList)).toBe(1);
  });
  test('Counting comments', () => {
    let commentList = [];

    expect(countComment(commentList)).toBe(0);
  });
  test('Counting comments', () => {
    let commentList = [];
    commentList.push('BA');
    commentList.push('BA');
    expect(countComment(commentList)).toBe(2);
  });
});
