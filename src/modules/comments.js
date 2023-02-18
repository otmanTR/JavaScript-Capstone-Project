import getItems from './getItems';
import countComment from '../counterComment';
class Comments {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/B4dSeq5fl0y4n8s59SaR/comments';
  }


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
    const commentsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/B4dSeq5fl0y4n8s59SaR/comments?item_id=${itemId}`;
    getItems(commentsUrl).then((data) => {
      if (!data.error) {
        commentList.classList.add('show');
        const content = data
          .map((element) => `
        <li class="scoreItem">${element.creation_date}<span>: <span>${element.username} <span>: <span>${element.comment}</li>
       `)
          .join('');
        commentList.innerHTML = content;
        commentsCount.innerHTML = `Comments  (${countComment(commentList.children)}) `;

      }
    });
  };
}

export default Comments;
