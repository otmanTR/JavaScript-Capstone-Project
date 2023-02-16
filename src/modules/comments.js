import getItems from './getItems';
import countComment from '../counterComment';
class Comments {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kumd2xEuWrRQPQTt2JCG/comments';
  }

  apiFetch = async () => {
    const request = new Request(this.url);
    const result = await fetch(request);
    const fResult = await result.json();
    // const allComments = fResult.result.map(({ user: name, insights }) => ({
    //   name,
    //   insights,
    // }));
    // console.log('comments here', allComments);
    return fResult;
  };

  addNewComment = async (itemId, username, comment) => {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({ item_id: itemId, username, comment }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  };

  displayComments = async (commentList, itemId,commentsCount) => {
    const commentsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kumd2xEuWrRQPQTt2JCG/comments?item_id=${itemId}`;
    getItems(commentsUrl).then((data) => {
      if (!data.error) {
        commentList.classList.add('show');
        const content = data
          .map((element) => `
        <li class="scoreItem">${element.username} <span>: <span>${element.comment}</li>
       `)
          .join('');
        commentList.innerHTML = content;
        commentsCount.innerHTML = `Comments  (${countComment(commentList.children)}) `;

      }
    });
  };
}

export default Comments;
