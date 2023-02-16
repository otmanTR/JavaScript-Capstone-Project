import countComment from "../counterComment";

describe("testing count comment", () => {


test("Counting comments", () => {
   let commentList = [];
   commentList.push("BA");
    
    expect(countComment(commentList)).toBe(1) 
})
})