import getItems from './getItems';

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
  }

  addNewComment= async (itemId, username, comment) => {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({ item_id: itemId, username, comment }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }

  displayComments = async () => {
    getItems();
    const commentsList = document.querySelector('.commentList');
    // commentsList = '';
    const data = await this.apiFetch();
    // console.log("data here", data);
    if (this.url > 0) {
      commentsList.classList.add('show');
    }
    data.forEach((element) => {
      const content = `
        <li class="scoreItem">${element.username} <span>: <span>${element.comment}</li>
      `;
      commentsList.innerHTML += content;
    });
  }
}

export default Comments;